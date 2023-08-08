import ConcertConnect from '../assets/ConcertConnect.PNG'
import StarGazers from '../assets/StarGazers.png'
import EmployeeSQLDatabase from '../assets/EmployeeSQLDatabase.jpg'
import MVCTechBlog from '../assets/MVCTechBlog.jpg'
import READMEGenerator from '../assets/READMEGenerator.jpg'
import GistTutorial from '../assets/GistTutorial.png'
import OldPortfolio from '../assets/OldPortfolio.jpg'


const projectData = [
    {
        title: "Concert:Connect",
        image: ConcertConnect,
        description: "Love going to concerts? Find your next show here, review concerts, make friends!",
        workType: "Group",
        variableBtnText: "View App",
        applicationURL: "https://github.com/Sabplpz/Concert-Connect.git",
        repositoryURL: "https://github.com/Sabplpz/Concert-Connect.git"
    },
    {
        title: "StarGazers",
        image: StarGazers,
        description: "A web application to help you find the best times and places to go stargazing!",
        workType: "Group",
        variableBtnText: "View App",
        applicationURL: "https://limitless-dawn-09471-5eef669ce044.herokuapp.com/",
        repositoryURL: "https://github.com/Sabplpz/StarGazers.git"
    },
    {
        title: "Employee Database using SQL",
        image: EmployeeSQLDatabase,
        description: "This command-line-application is an employee management database using SQL",
        workType: "Solo",
        variableBtnText: "Executing The App",
        applicationURL: "https://github.com/dionkb/vigilant-fishstick.git#execution",
        repositoryURL: "https://github.com/dionkb/vigilant-fishstick.git"
    },
    {
        title: "MVC Tech Blog",
        image: MVCTechBlog,
        description: "A basic MVC structured blog to showcase skills with using CRUD operations, basic encryption, session-variables, and more.",
        workType: "Solo",
        variableBtnText: "View App",
        applicationURL: "https://sheltered-badlands-65127.herokuapp.com/",
        repositoryURL: "https://github.com/dionkb/stunning-octo-dollop.git"
    },
    {
        title: "README Generator",
        image: READMEGenerator,
        description: "Answer a series of prompts that will then be used to populate a README file that is newly generated. There are several questions that alllow the user to customize the README based on their needs.",
        workType: "Solo",
        variableBtnText: "Executing The App",
        applicationURL: "https://github.com/dionkb/ubiquitous-octo-invention#execution",
        repositoryURL: "https://github.com/dionkb/ubiquitous-octo-invention"
    },
    {
        title: "Gist Tutorial",
        image: GistTutorial,
        description: "I also plan on helping others learn and contributing to open-source apps once I have more experience, just like this Gist tutorial shows",
        workType: "Solo",
        variableBtnText: "View Gist",
        applicationURL: "https://gist.github.com/dionkb/7807b363e16dd03c36ce2f60c782a856",
        repositoryURL: "https://gist.github.com/dionkb/7807b363e16dd03c36ce2f60c782a856"
    },
    {
        title: "My Old HTML/CSS Portfolio ❤",
        image: OldPortfolio,
        description: "My old HTML/CSS-only portfolio. Let's see how far I've come, and how far I'll go.",
        workType: "Solo",
        variableBtnText: "View Page",
        applicationURL: "https://dionkb.github.io/Dion-Baskara-Portfolio/",
        repositoryURL: "https://github.com/dionkb/Dion-Baskara-Portfolio.git"
    },
];

// Created as objects as I may add icons or descriptions in the future.
const proficiencyData = [
    {
        name: "MERN: MongoDb, Express, React, NodeJS",
    },
    {
        name: "Various SQL & NoSQL style database management apps",
    },
    {
        name: "MVC, ORM, and other styles of framework",
    },
    {
        name: "Fetching APIs through various means and frameworks",
    },
    {
        name: "Basic HTML, CSS, & Javascript",
    },
]

export { projectData, proficiencyData };