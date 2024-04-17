#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker
from datetime import date

# Local imports
from app import app
from models import User, Exercise, Workout, WorkoutExercise
from config import db

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        db.session.query(User).delete()
        db.session.query(Workout).delete()
        db.session.query(Exercise).delete()
        
        db.session.query(WorkoutExercise).delete()
        db.session.commit()
        print("Starting seed...")
        user1 = User(username='user1', age=25, weight=270.5, height=175.0, goal_weight = 215, password= 'abc' )
        user2 = User(username='user2', age=30, weight=265.2, height=168.0, goal_weight = 205, password= 'abc')
        user1.password= 'abc'
        user2.password = 'abc'
        # Create workouts
        workout1 = Workout(user_id=1, date=date(2024, 4, 11), duration=60, notes='Great workout!')
        workout2 = Workout(user_id=2, date=date(2024, 4, 12), duration=45, notes='Feeling energized!')
        workout3 = Workout(user_id=1, date=date(2024, 4, 13), duration=70, notes='Good workout!')
        # Create exercises
        exercise1 = Exercise(name='Squats', muscle_group='Legs', difficulty='Intermediate', push_pull = 'Legs', img = "https://images.unsplash.com/photo-1596357395217-80de13130e92?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXR0aW5nfGVufDB8fDB8fHww" )
        exercise2 = Exercise(name='Bench Press', muscle_group='Chest', difficulty='Advanced', push_pull = 'Push', img = "https://plus.unsplash.com/premium_photo-1682094035772-a5ccdb07d9b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVuY2glMjBwcmVzc3xlbnwwfHwwfHx8MA%3D%3D")
        
        # Create goals
        
        # Add instances to the session
        db.session.add_all([user1, user2, workout1, workout2, exercise1, exercise2, workout3])
        
        # Create workout-exercise associations
        workout_exercise1 = WorkoutExercise(workout_id=1, exercise_id=1, sets=3, reps=10)
        workout_exercise2 = WorkoutExercise(workout_id=2, exercise_id=2, sets=4, reps=8)
        workout_exercise3 = WorkoutExercise(workout_id=3, exercise_id=1, sets=4, reps=8)
        # Add workout-exercise associations to the session
        db.session.add_all([workout_exercise1, workout_exercise2, workout_exercise3])
        
        # Commit the changes
        db.session.commit()

        

