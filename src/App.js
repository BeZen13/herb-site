import React from 'react'
import {hot} from "react-hot-loader"; //allows hot reloading, which is useful for testing

const App = props => {

    return (
        <>
            Welcome to the website!
        </>
    )
}


export default hot(module)(App)