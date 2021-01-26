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
            setNotifications([...notifications, "Your application is offline. You won't be able to share or stream music to other devices."]);
        } else {
            setNotifications(notifications.filter(notification => {
                return notification !== "Your application is offline. You won't be able to share or stream music to other devices.";
            }))
        }

    }, [online])

    useEffect(()=> {
        
        if(volume >= 80 && !notifications.includes('Listening to music at a high volume could cause long-term hearing loss.')) {
            setNotifications([...notifications, "Listening to music at a high volume could cause long-term hearing loss."])
        } 

        if(volume < 80) {
            setNotifications(notifications.filter(notification => {
                return notification !== "Listening to music at a high volume could cause long-term hearing loss.";
                }))
        }

    }, [volume])

    useEffect(()=> {

        if(quality === 'Low') {
            setNotifications([...notifications, "Music quality is degraded. Increase quality if your connection allows it."])
        } else setNotifications(notifications.filter(notification => {
            return notification !== "Music quality is degraded. Increase quality if your connection allows it.";
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
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
                <Textfield handleLoginClick={handleLoginClick} Logged={'Login'}/>
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

            <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>
                <Notifications notifications={notifications}/>
                <Button handleLoginClick={handleLoginClick} Logged={'Logout'} />
            </div>
        </div>
    )}
}
