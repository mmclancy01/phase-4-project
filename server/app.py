#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session, jsonify
from datetime import datetime
# from flask_restful import Resource
# from flask_migrate import Migrate
# from flask_cors import CORS
# import os
# Local imports
from config import app, db
# Add your model imports
from models import User, Exercise, Workout, WorkoutExercise

# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

@app.get('/exercises')
def get_exercises():
    exercises = Exercise.query.all()
    return [e.to_dict() for e in exercises], 200

@app.get('/user/<int:id>')
def get_user_by_id(id):
    user = User.query.filter(User.id == id).first()
    if not user:
        return {"error": "User not found"}, 404
    else: 
        return user.to_dict(), 200
    
# @app.get('/goals')
# def get_goals():
#     goals = Goal.query.all()
#     return [g.to_dict() for g in goals], 200

@app.get('/workouts')
def get_workouts():
    workouts = Workout.query.all()
    return [w.to_dict() for w in workouts], 200

@app.route('/workouts', methods=['POST'])
def create_workout():
    data = request.get_json()

    # Convert date string to Python date object
    date_str = data.get('date')
    date_obj = datetime.strptime(date_str, '%Y-%m-%d').date()

    # Assuming you have SQLAlchemy models named Workout and Exercise
    new_workout = Workout(
        user_id=data.get('user_id'),
        date=date_obj,
        duration=data.get('duration'),
        notes=data.get('notes')
    )
    db.session.add(new_workout)
    db.session.commit()

    workout_exercises_data = data.get('workout_exercises', [])
    for exercise_data in workout_exercises_data:
        exercise = WorkoutExercise(
            workout_id=new_workout.id,
            exercise_id=exercise_data.get('exercise_id'),
            reps=exercise_data.get('reps'),
            sets=exercise_data.get('sets')
        )
        db.session.add(exercise)
    
    db.session.commit()

    return jsonify({"message": "Workout added successfully", "workout_id": new_workout.id}), 201
@app.post("/exercises")
def post_exercises():
    pass

@app.route('/login', methods=['POST'])
def login():
    json_data = request.get_json()

    # check that user exists
    user = User.query.filter(User.username == json_data.get('username')).first()
    if not user:
        return {'error': 'user not found'}, 404
    
    # check the user's password
    if not user.authenticate(json_data.get('password')):
        return {'error': 'login failed'}, 401
    
    # store a cookie in the browser
    session['user_id'] = user.id
    print(f"SESSION AFTER SUCCESSFUL LOGIN: {session}")
    # return a response
    return user.to_dict(), 200

# logout
@app.route('/logout', methods=['DELETE'])
def logout():
    # delete the user_id cookie
    session.pop('user_id', None)
    print(session)
    return {}, 204
@app.route('/signup', methods=['POST'])
def signup():
    # get the json data
    json_data = request.get_json()

    user = User.query.filter(User.username == json_data.get('username')).first()
    if user:
        return {'error': 'user already exists'}, 400

    # create a new user
    new_user = User(
        username=json_data.get('username'),
        password=json_data.get('password'),
    )

    # add to db
    db.session.add(new_user)
    db.session.commit()

    return new_user.to_dict(), 201

@app.route('/check_session', methods=['GET'])
def check_session():
    # get user id from the browser cookies
    print(f"SESSION RETRIEVAL DURING CHECK SESH: {session}")
    user_id = session.get('user_id')
    print(f"RETRIEVED USER ID FROM SESSION: {user_id}")
    # query the db to make sure that user id is valid
    user = User.query.filter(User.id == user_id).first()

    # if the user isn't valid, send error
    if not user:
        return {'error': 'unauthorized'}, 401
    else:
        return user.to_dict(), 200

@app.route('/workouts/<int:id>', methods=['DELETE'])
def delete_workout(id):
    workout = Workout.query.get(id)

    # Check if the workout exists
    if workout:
        WorkoutExercise.query.filter(WorkoutExercise.workout_id == id).delete()
        # Delete the workout object
        db.session.delete(workout)
        db.session.commit()
        return jsonify({"message": "Workout deleted successfully"}), 204
    else:
        # If the workout does not exist, return a 404 Not Found status
        return jsonify({"error": "Workout not found"}), 404
if __name__ == '__main__':
    app.run(port=5555, debug=True)

