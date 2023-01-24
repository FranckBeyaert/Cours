import React, { useState } from 'react';
import './Main.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Preferences from '../components/Preferences';
import Login from '../components/Login';


function Main()
{
    const [token, setToken] = useState()

    if(!token)
    {
        return <Login setToken={setToken}/>
    }
    
    return(
        <div className="wrapper">
            <h1>Application</h1>
            <React.StrictMode>
                <BrowserRouter>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/preferences" element={<Preferences/>}/>
                    </Routes>
                </BrowserRouter>
            </React.StrictMode>
        </div>
    )
}

export default Main