from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!
class WorkoutExercise(db.Model, SerializerMixin):
    __tablename__ = 'workout_exercises'
    workout_id = db.Column(db.Integer, db.ForeignKey('workouts.id'), primary_key=True)
    exercise_id = db.Column(db.Integer, db.ForeignKey('exercises.id'), primary_key=True)
    sets = db.Column(db.Integer, nullable=False)
    reps = db.Column(db.Integer, nullable=False)
    
    workouts = db.relationship('Workout', back_populates = 'workout_exercises')
    exercises = db.relationship('Exercise', back_populates = 'workout_exercises')
    
    serialize_rules = ['-workouts', '-exercises']



class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    weight = db.Column(db.Float, nullable=False)
    height = db.Column(db.Float, nullable=False)
    goal_weight = db.Column(db.Integer)
    workouts = db.relationship('Workout', back_populates = 'users')
    # goals = db.relationship('Goal', back_populates = 'users')
    
    
    serialize_rules = ['-workouts.users']

class Workout(db.Model, SerializerMixin):
    __tablename__ = 'workouts'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    date = db.Column(db.Date, nullable=False)
    duration = db.Column(db.Integer, nullable=False)
    notes = db.Column(db.Text)
    workout_exercises = db.relationship('WorkoutExercise', back_populates = 'workouts')
    users = db.relationship('User', back_populates = 'workouts')
    # user_workouts = db.relationship('UserWorkout', back_populates = 'workouts')

    serialize_rules = ['workout_exercises', '-users', '-user_workouts']



class Exercise(db.Model, SerializerMixin):
    __tablename__ = 'exercises'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    muscle_group = db.Column(db.String)
    push_pull = db.Column(db.String)
    difficulty = db.Column(db.String)
    
    workout_exercises = db.relationship('WorkoutExercise', back_populates = 'exercises')

    serialize_rules = ['muscle_group', 'name', 'push_pull', 'difficulty', '-workout_exercises']

# class Goal(db.Model, SerializerMixin):
#     __tablename__ = 'goals'
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
#     start_weight = db.Column(db.Integer)
#     goal_weight = db.Column(db.Integer)

#     users = db.relationship('User', back_populates = 'goals')
#     serialize_rules = ('user_id', '-users', 'users.username')
