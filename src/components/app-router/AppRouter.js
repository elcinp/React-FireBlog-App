import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Login from '../pages/Login'
import Register from '../pages/Register'

const AppRouter = () => {
    return (
        <BrowserRouter>
                <Navbar/>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
