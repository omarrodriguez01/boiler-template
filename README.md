# ORMs Homework

## Bienvenido
The purpose of this homework is to make sure you get a full understanding of what an ORM is.

Here are your instructions to run the repository:
- Make sure you have Docker Desktop installed in your machine
- Clone the repository whichever way you feel most comfortable with (GitHub Desktop or with git clone commands)
- Open a terminal in the project's directory
- Run `npm install`
- Before running the code, you need to add a .env file at the projects root
- Add this value to your .env file `DATABASE_URL="postgresql://postgres:postgres@localhost:5434/postgres?schema=public"`
- run: `docker-compose up -d`
After you are done, your code should be running at http://localhost:3000/ (if you have any issues please get a hold of me)

## Your Task
Your submission of your homework will be through creating a Pull Request
- checkout a new branch with `git checkout -b {your name}/{name of your DB Model}`
### Add your model
Your first task will be to add the model of the DB model of your choice in the schema.prisma file (no timestamps fields)
- Add your models in `prisma/schema.prisma`
- Once you have finished you will push it to your DB with `npx prisma push`
- Once you made sure you had no issues pushing to your db commit your model to your branch with
    - `git add .`
    - `git commit -m "added initial model"`
    - `git push -u origin {your name}/{name of your DB Model}`
### Add Migrations
- Now it's time to add a migration to your model that adds a createdAt and updatedAt flag to all your models
- Run `npx prisma migrate dev`, and this will generate your first migration folder and file, it will ask you for a name for your first migration which will be the same query for your initial models and will ask you if it's ok to override your database, type `y`
- Now you can edit your model to include the timestampz flags
- Now you can add your migration with `npx prisma migrate dev --name add-timestamps-flags` this will genereate the migration file to add the flags
- execute your migration with  `npx prisma migrate dev`
- commit and and push your code
    - `git add .`
    - `git commit -m "added timestampz"`
    - `git push`

### Add Seeders
The last part of your homework will be to add seeders to all of your tables, the project has already preloaded the folder to add your seeders and a file to run to use seeders.
- Create at least 3 objects per table per seeder. Use studentSeeder.ts as a guide
- Import all of your seeder functions to seed file and use the commented lines as guide
- Run your seeders with `npx prisma db seed`
- Once your seeders have ran and have been added to your db, commit and push your changes

### Submission
You will submit this homework in 2 steps:
- Create a PR, your description should include your name and studentId (matricula) along with a screenshot of the ERD Diagram you based off your model
- Submit your PR link on the canvas submission, so I can give you your grade

*remeber I will download your code an test it. Your models need to run successfully as well as your seeders in order to get all the points. Also, it is very important you commit at every stage, you should have at least 3 commits in your branch. These commits are your evidence to show me you followed each step