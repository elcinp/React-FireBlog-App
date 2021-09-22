import React from 'react'
import { BrowserRouter,Switch } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

const AppRouter = () => {
    return (
        <BrowserRouter>
                <Navbar/>
            <Switch>
                
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
