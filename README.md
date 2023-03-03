# Would You Rather

[![Netlify Status](https://api.netlify.com/api/v1/badges/6367e432-6f08-417f-9123-2b8d9f4d39b9/deploy-status)](https://app.netlify.com/sites/would-you-rather14/deploys)

Would You Rather is a Questionnaire App that allows you to ask and answer questions about what you rather between only two options, you can answer your own question or any other user's question, add and ask a new question to other users, also you can access the leaderboard page to see the active state of the users according to their score.

You can view the App from [here](https://would-you-rather14.netlify.app/)

![Screenshot](preview.png) 

## Demo

https://user-images.githubusercontent.com/69651552/132402671-b64aaefb-b3e6-4f15-9af2-4f3111c0cadc.mp4

## Instructions, Building & Get Started

    - 1- Fork, clone or download this repository to your local machine.
    - 2- Be sure that you install the Node.js environment in your machine.
    - 3- Open your terminal and be sure that you are inside the correct destination of the App, while you must be in the same path of the package.json file.
    - 4- Inside your terminal run these commands:-
    
        * to install dependencies.
        ```
        npm install
        ```
        * to start the server.
        ```
        npm start
        ```
    - 5- Once the App server is running, visit (localhost:3000) in the browser to view the App and now you can treat with it as shown above in the Demo.
    - 6- You can also see a live preview of the App from this Link (https://would-you-rather14.netlify.app/)

## Pages

* Login
* Dashboard
* Leaderboard
* New Question
* Question
* 404

## Built with

* HTML
* CSS
* JS

## Libraries & Packages

* [Redux](https://redux.js.org/)
* [React Redux](https://react-redux.js.org/)
* [React Icons](https://react-icons.github.io/react-icons/)
* [Redux Thunk](https://www.npmjs.com/package/redux-thunk)
* [React Router](https://www.npmjs.com/package/react-router)
* [React Router Dom](https://www.npmjs.com/package/react-router-dom)

## Frameworks 

* [React](https://reactjs.org/)  
* [Ant Design](https://ant.design/)
* [React Bootstrap](https://react-bootstrap.github.io/)

## Notices & Overview about the App

- This App is a practical project from Udacity Course [Nanodegree Program - Web Development Advanced Track](https://www.udacity.com/course/intro-to-programming-nanodegree--nd000)

- The App depends on a fake static database, using customized methods to send requests and get questions from this database.

- You have the ability to login with the option of 3 users in the login form, and you have to choose one user to be able to access the internal pages of the App.

- The App contains of 404 page which will be rendered if the user tries to access a not available page.

- Due to dealing with fake static database, so if you try to reload the App at any time, your progress in the App about adding or answering questions will be lost, and the data will be reset to its initial state.

- The `_DATA.js` file represents the fake static database and the methods that let you access this database.

- There are two types of objects stored in the fake static database: [`Questions` & `Users`]

- The App contacts with the database via 4 methods:

    * `_getUsers()`
    * `_getQuestions()`
    * `_saveQuestion(question)`
    * `_saveQuestionAnswer(object)`
    ---------------------------------------------------

    1) `_getUsers()` Method:
    *Description*: Get all of the existing users from the database.  
    *Return Value*: Object where the key is the user’s id and the value is the user object.

    2) `_getQuestions()` Method:
    *Description*: Get all of the existing questions from the database.  
    *Return Value*: Object where the key is the question’s id and the value is the question object.

    3) `_saveQuestion(question)` Method:
    *Description*: Save the polling question in the database.  
    *Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`.
    *Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`.

    4) `_saveQuestionAnswer(object)` Method:
    *Description*: Save the answer to a particular polling question in the database.
    *Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`.

- Finally, you can consider this App as a reference and strong practical & revision to understand the working logic of `redux`, `react-redux` & middleware like `redux-thunk` and how they interact with a react App.

## Certificate

[Course Certificate](Certificate.pdf)

## Author

* [Mohamed Elhawary](https://www.linkedin.com/in/mohamed-elhawary14/) 

## Contact me through my social accounts

* Email: mohamed.k.elhawary@gmail.com
* [Linkedin](https://www.linkedin.com/in/mohamed-elhawary14/)
* [Github](https://github.com/Mohamed-Elhawary)  
* [Behance](https://www.behance.net/mohamed-elhawary14)
* [Codepen](https://codepen.io/Mohamed-ElHawary) 

## License

Licensed under the [MIT License](LICENSE)
