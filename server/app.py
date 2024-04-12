#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource
from flask import Flask, request, jsonify
from datetime import date, datetime

# Local imports
from config import app, db, api
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
        return {"error": "Restaurant not found"}, 404
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

@app.post("/workouts")
def post_workouts():
    data = request.get_json()

    # Get the existing workouts count
    workouts_count = Workout.query.count()

    workout = Workout(
        user_id=data['user_id'],
        date=datetime.strptime(data['date'], '%Y-%m-%d').date(),
        duration=data['duration'],
        notes=data['notes']
    )

    db.session.add(workout)
    db.session.commit()

    response = {
        "message": "Workout created successfully",
        "workout": {
            "id": workouts_count + 1,  # Calculate the new workout ID
            "user_id": workout.user_id,
            "date": workout.date.strftime('%Y-%m-%d'),
            "duration": workout.duration,
            "notes": workout.notes
        }
    }

    return jsonify(response), 201

@app.route("/workouts/<int:workout_id>", methods=["GET"])
def get_workout(workout_id):
    workout = Workout.query.get(workout_id)
    if workout:
        response = {
            "workout_id": workout.id,
            "user_id": workout.user_id,
            "date": workout.date.strftime('%Y-%m-%d'),
            "duration": workout.duration,
            "notes": workout.notes
        }
        return jsonify(response), 200
    else:
        return jsonify({"message": "Workout not found"})

@app.post("/exercises")
def post_exercises():
    data = request.get_json()

    exercise = Exercise(
        name=data['name'],
        muscle_group=data['muscle_group'],
        difficulty=data['difficulty'],
        push_pull=data['push_pull']
    )

    db.session.add(exercise)
    db.session.commit()

    response = {
        "message": "Exercise created successfully",
        "exercise": {
            
            "name": exercise.name,
            "muscle_group": exercise.muscle_group,
            "difficulty": exercise.difficulty,
            "push_pull": exercise.push_pull
        }
    }

    return jsonify(response), 201
@app.route("/exercises/<int:exercise_id>", methods=["DELETE"])
def delete_exercise(exercise_id):
    exercise = Exercise.query.get(exercise_id)

    if exercise:
        db.session.delete(exercise)
        db.session.commit()
        return jsonify({"message": "Exercise deleted successfully"}), 200
    else:
        return jsonify({"message": "Exercise not found"}), 404


if __name__ == '__main__':
    app.run(port=5555, debug=True)

