import React from 'react';
import './Main.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Preferences from '../components/Preferences';
import App from '../App';
import Login from '../components/Login';
import useToken from '../components/useToken'


function Main()
{
    const { token, setToken } = useToken();


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
                        <Route path="/app" element={<App/>}/>                    </Routes>
                </BrowserRouter>
            </React.StrictMode>
        </div>
    )
}

export default Main