#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource


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
    pass

@app.post("/exercises")
def post_exercises():
    pass


if __name__ == '__main__':
    app.run(port=5555, debug=True)

