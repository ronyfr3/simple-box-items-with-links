import React from 'react'
// import Navbar from './Navbar'
// import Home from './Home'
import ToggleSlide from './ToggleSlide'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
    return (
        <Router>
        <ToggleSlide/>
            {/* <Navbar/>
            <Home/> */}
            <Switch>
            <Route/>
            </Switch>
        </Router>
    )
}

export default App
