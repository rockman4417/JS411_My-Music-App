import React, { useState, useEffect } from 'react'

import Textfield from './Textfield.js'
import Button from './Button'
import Navbar from './Navbar'
import SettingsCardSelect from './SettingsCardSelect'
import SettingsCardSlider from './SettingsCardSlider'
import SettingsCardSwitch from './SettingsCardSwitch'
import Notifications from './Notifications'
 
export default function Dashboard() {

    const [loggedIn, setLoggedIn] = useState(false)
    const [online, setOnline] = useState(true)
    const [volume, setVolume] = useState(10)
    const [quality, setQuality] = useState('normal')
    const [notifications, setNotifications] = useState([])


    useEffect(()=> {
        
        console.log(notifications)
        if(!online) {
            setNotifications([...notifications, "you are offline!"]);
        } else {
            setNotifications(notifications.filter(notification => {
                return notification !== "you are offline!";
            }))
        }

    }, [online])

    useEffect(()=> {
        setNotifications(notifications.filter(notification => {
            return notification !== "volume is too high!";
            }))

        if(volume > 80) {
            setNotifications([...notifications, "volume is too high!"])
        } else setNotifications(notifications.filter(notification => {
            return notification !== "volume is too high!";
            }))

    }, [volume])

    useEffect(()=> {

        if(quality === 'Low') {
            setNotifications([...notifications, "quality set to low"])
        } else setNotifications(notifications.filter(notification => {
            return notification !== "quality set to low";
        }))

    }, [quality])


    
    const handleLoginClick = () => {
        if(!loggedIn){
            console.log("clicked!")
            setLoggedIn(true)
        } else {
            console.log("clicked!")
            setLoggedIn(false)
        }

    }

    const selectHandler = (event) => {
        setQuality(event.target.value)
    }

    const volumeHandler = (event, newValue) => {
        console.log('event.target.value', newValue)
        setVolume(newValue)
    }

    const toggleOnline = (event) => {
        console.log(event.target.checked)
        setOnline(event.target.checked)
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
            <Button handleLoginClick={handleLoginClick} />
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
            
            <SettingsCardSwitch toggleOnline={toggleOnline} online={online}/>
            <SettingsCardSlider volumeHandler={volumeHandler}/>
            <SettingsCardSelect selectHandler={selectHandler} quality={quality}/>
            
        </div>
        <Notifications notifications={notifications}/>
        <Button handleLoginClick={handleLoginClick} />
    </div>
            
            
            )
    }

    
        
    
}
