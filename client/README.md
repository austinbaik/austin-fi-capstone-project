# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## React Front-end

Component files can be found here: `client/src/`

index.js
    App 
        NavBar
        SignUp
            ErrorModal
        Login
            ErrorModal
        Landing
        NewCase
            ErrorModal
        AgentHome 
            AgentOpenCases 
                CurrentCase
                    ErrorModal
                    EditCase
                        ErrorModal
                    CommentCard
                        ErrorModal
                    NewComment
                        ErrorModal
            AllClosedCases 
                CurrentCase
                        ErrorModal
                        EditCase
                            ErrorModal
                        CommentCard
                            ErrorModal
                        NewComment
                            ErrorModal
            AllUnassignedCases 
                CurrentCase
                    ErrorModal
                    EditCase
                        ErrorModal
                    CommentCard
                        ErrorModal
                    NewComment
                        ErrorModal


## Styling: 

This application includes some basic CSS formatting. You can update the colors/styling to fit your brand identity by updating the files.

CSS files are broken-up into five different files :

        -modal.css
        -Table.css 
        -index.css
        -App.css 
        -CaseView.css


## Additional technical components used 

State management throughout the application is handled through useContext. Context files can be found in `client/src/context`. 

Error messages are rendered via modal `ErrorModal.css`

`react-router-dom` provides additional hooks for app functionalities: 
    useParams, 
    useNavigate
    Link 
    Routes 
    Route  

## Available Scripts

In the project's React directory `/app/client` , you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

