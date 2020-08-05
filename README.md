## Hogwarts CRM App structure: 

```
Hogwarts CRM web App - react
├── public/          #static files
│   └── index.html   #html 
│
├── src/             #project root
│   ├── components/      #components - reusable components source
│   ├── pages/  #pages 
|   │   ├── AddStudent.jsx
|   │   ├── DashBoard.jsx
|   │   ├── EditStudent.jsx
|   │   ├── Login.jsx
|   │   ├── ProfileData.jsx
|   │   └── SignUp.jsx      
│   ├── scss/        #hogwarts app scss source
│   │   ├── 
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── polyfill.js
│   ├── index.js
│   ├── index.css
│   ├── serviceWorker.js
│   └── setupTests.js
│
└── package.json
```


Hogwarts CRM (Front End) Part 1


Summary

Create an Hogwarts CRM (customer relationship management) client app using react.
This front end app will be used by you in the next backend project.
It is broken into pages and features required in those pages (aka specification document). You are free to implement those pages however you want regarding design.

Suggestion

Plan your app on paper  before implementing it - what are the components you want to build, what props/state should they have, and how should they be placed. A good suggestion is to paint the UI on paper, and then translate the parts of your UI into component (here is a good tutorial on planning: https://medium.com/@konstantin.muenster/how-to-plan-and-organize-a-react-project-by-building-a-weather-app-95175b11bd01)  
Do not spend too much time on planning (no more than an hour or two), you could always change your initial plan on the fly, it is better to do that instead of starting coding too late.

Page 1 - Admin Signup Form

A form with name, email, password and repeat password
The form should not be submitted if the password does not match the repeat password, and if some of the fields are empty

Page 2 - Admin Login

A form with email and password
Should show error messages to the user it the email/password match are incorrect
Page 3 - Add Student From (Admin Protected)

A form for adding new student to the school table
The form Should include
Email
First name
Last name
List of predefined skills rating 1-5. Skills are:
Potion making
Spells
Quidditch
Animagus
Apparate 
Metamorphmagi
Parseltongue (talking with snakes)
List of desired skills rating (same list as above)


Page 4 - Main Page

A table list of the all added students
Present a table of the added students, with edit and delete buttons next to them
Click on edit should navigate to page 5 (see below)
Click on delete should prompt a modal asking if you really want to delete this student (if so, delete the student)
Clicking the user should navigate to the user data page
A pie chart presenting the desired skills of all the students, by popularity

Page 5 - Edit student page

The same form as the add student, only to update an existing one


