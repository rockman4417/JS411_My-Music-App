import React, { useState } from 'react'

import Textfield from './Textfield.js'
import Button from './Button'
import Navbar from './Navbar'
import SettingsCardSelect from './SettingsCardSelect'
import SettingsCardSlider from './SettingsCardSlider'
import SettingsCardSwitch from './SettingsCardSwitch'
import Notifications from './Notifications'
 
export default function Dashboard() {

    const [loggedIn, setLoggedIn] = useState(false)

    const handleLoginClick = () => {
        if(!loggedIn){
            console.log("clicked!")
            setLoggedIn(true)
        } else {
            console.log("clicked!")
            setLoggedIn(false)
        }

    }

    
    
    if(!loggedIn) {
        return (
            <div>
        <div>
            <Navbar/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <div>
            <Textfield/>

            </div>
            <div>
            <button onClick={handleLoginClick}>Login</button>
            <Button  onClick={() => { alert('clicked') }} randomProp={'this is a test prop'} passedFunction={handleLoginClick}/>
            </div>
            
        </div>
    </div>
        )
    } else {
        return (
            <div>
        <div style={{marginBottom: '150px'}}>
            <Navbar/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            
            <SettingsCardSwitch/>
            <SettingsCardSlider/>
            <SettingsCardSelect/>
            
        </div>
        <Notifications/>
        <button onClick={handleLoginClick}>Logout</button>
    </div>
            
            
            )
    }

    
        
    
}
