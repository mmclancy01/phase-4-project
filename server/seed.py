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
        workout1 = Workout(user_id=1, date=date(2024, 4, 10), duration=60, notes='Great workout!')
        workout2 = Workout(user_id=2, date=date(2024, 4, 11), duration=45, notes='Feeling energized!')
        workout3 = Workout(user_id=1, date=date(2024, 4, 12), duration=70, notes='Good workout!')
        # Create exercises
        exercise1 = Exercise(name='Squats', muscle_group='Legs', difficulty='Intermediate', push_pull = 'Legs', img = "https://images.unsplash.com/photo-1596357395217-80de13130e92?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXR0aW5nfGVufDB8fDB8fHww" )
        exercise2 = Exercise(name='Bench Press', muscle_group='Chest', difficulty='Advanced', push_pull = 'Push', img = "https://plus.unsplash.com/premium_photo-1682094035772-a5ccdb07d9b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVuY2glMjBwcmVzc3xlbnwwfHwwfHx8MA%3D%3D")
        exercise3 = Exercise(name='Push-ups', muscle_group='Upper Body', difficulty='Beginner', push_pull='Push', img='https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt590cd1c4bd125af7/5fa2d53cc1502b76a1699490/Pushups.jpg?width=1200&height=630&fit=crop')
        exercise4 = Exercise(name='Pull-ups', muscle_group='Upper Body', difficulty='Intermediate', push_pull='Pull', img='https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2015/08/bb_pull-ups-regular_web.jpg')
        exercise5 = Exercise(name='Deadlifts', muscle_group='Back', difficulty='Beginner', push_pull='Pull', img='https://blogscdn.thehut.net/wp-content/uploads/sites/478/2018/10/12113512/Blog-Deadlifting-Male_1800x1200.jpg')
        exercise6 = Exercise(name='Lunges', muscle_group='Legs', difficulty='Intermediate', push_pull='Legs', img='https://hips.hearstapps.com/hmg-prod/images/reverse-lunges-1544222100.jpg?crop=0.6235xw:1xh;center,top&resize=640:*')
        exercise7 = Exercise(name='Hammer Curls', muscle_group='Arms', difficulty='Intermediate', push_pull='Pull', img='https://www.trainheroic.com/wp-content/uploads/2023/02/AdobeStock_417412809-TH-jpg.webp')
        exercise8 = Exercise(name='Bench Press', muscle_group='Chest', difficulty='Intermediate', push_pull='Push', img='https://wodprep.com/wp-content/uploads/2023/06/The-Ultimate-Guide-To-Bench-Press-in-CrossFit-1-scaled-e1686756414180.jpg')
        exercise9 = Exercise(name='Rows', muscle_group='Back', difficulty='Intermediate', push_pull='Pull', img='https://images.ctfassets.net/8urtyqugdt2l/5JyoMOTRMiqUgeX3xcFAot/adc9c772286fb52694a1d39de481709a/barbell-row-tile.jpg')
        exercise10 = Exercise(name='Curls', muscle_group='Arms', difficulty='Intermediate', push_pull='Pull', img='https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2017/11/1109-hammer-curl.jpg?quality=86&strip=all')
        exercise11 = Exercise(name='Leg Press', muscle_group='Legs', difficulty='Intermediate', push_pull='Legs', img='https://yorkbarbell.com/wp-content/uploads/2017/01/55035_leg-press_in-use_low.jpg')
        exercise12 = Exercise(name='Crunches', muscle_group='Core', difficulty='Beginner', push_pull='Core', img='https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blta2cf34be231e50d5/5faa9e613cdbef7187ce5a83/FL_1_Blog-Header-Pics_1232-x-630_V3-crunches.jpg?format=pjpg&auto=webp&quality=76&width=1232')
        exercise13 = Exercise(name='Dumbbell Lunges', muscle_group='Legs', difficulty='Intermediate', push_pull='Legs', img='https://hips.hearstapps.com/hmg-prod/images/dumbbell-lunge-1675879057.jpg')
        exercise14 = Exercise(name='Dumbbell Rows', muscle_group='Back', difficulty='Intermediate', push_pull='Pull', img='https://www.dmoose.com/cdn/shop/articles/MicrosoftTeams-image_2_90411cba-7995-4fac-8f20-af7caa6406a0.jpg?v=1652281904')
        exercise15 = Exercise(name='Bodyweight Squats', muscle_group='Legs', difficulty='Beginner', push_pull='Legs', img='https://media1.popsugar-assets.com/files/thumbor/CJmnrrrF7n5F6Fs5ys2R3CBCcK0=/fit-in/792x549/top/filters:format_auto():upscale()/2018/07/17/791/n/43387813/93ecc1623d512e58_Basic-Squat.jpg')
        exercise16 = Exercise(name='Pistol Squats', muscle_group='Legs', difficulty='Advanced', push_pull='Legs', img='https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt6eea3a2cdab8e52a/5fa3ce8965bdd35303dff85f/FL_1_Blog-Header-Pics_1232-x-630_V2-pistol-squat.jpg?width=1200&height=630&fit=crop')
        exercise17 = Exercise(name='Box Jumps', muscle_group='Legs', difficulty='Advanced', push_pull='Legs', img='https://hips.hearstapps.com/hmg-prod/images/box-jump-1585302208.jpeg')
        exercise18 = Exercise(name='Lat Pulldowns', muscle_group='Back', difficulty='Intermediate', push_pull='Pull', img='https://steelsupplements.com/cdn/shop/articles/Lat_pulldowns_machine_-_cover_-_shutterstock_2137570149_1000x.jpg?v=1661886914')
        exercise19 = Exercise(name='Barbell Deadlifts', muscle_group='Back', difficulty='Advanced', push_pull='Pull', img='https://hips.hearstapps.com/hmg-prod/images/fai-6793-1644532875.jpeg')
        exercise20 = Exercise(name='Tricep Dips', muscle_group='Arms', difficulty='Intermediate', push_pull='Push', img='https://hips.hearstapps.com/hmg-prod/images/dips-1608221119.jpg?resize=980:*')
        exercise20 = Exercise(name='Hammer Curls', muscle_group='Arms', difficulty='Intermediate', push_pull='Pull', img='https://www.trxtraining.com/cdn/shop/articles/woman-doing-bicep-curls.jpg?v=1684766964')
   


   
        
        # Add instances to the session
        db.session.add_all([user1, user2, workout1, workout2, exercise1, exercise2, exercise3 , workout3, exercise4 , exercise5, exercise6, exercise7, exercise8 , exercise9 , exercise10 , exercise11, exercise12 , exercise13, exercise14 , exercise15 , exercise16, exercise17,  exercise18, exercise19,  exercise20])
        
        # Create workout-exercise associations
        workout_exercise1 = WorkoutExercise(workout_id=1, exercise_id=1, sets=3, reps=10)
        workout_exercise2 = WorkoutExercise(workout_id=2, exercise_id=2, sets=4, reps=8)
        workout_exercise3 = WorkoutExercise(workout_id=3, exercise_id=1, sets=4, reps=8)
        # Add workout-exercise associations to the session
        db.session.add_all([workout_exercise1, workout_exercise2, workout_exercise3])
        
        # Commit the changes
        db.session.commit()

        

