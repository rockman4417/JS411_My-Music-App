import React from 'react'

export default function Notifications(props) {
    return (
        <div style={{marginLeft: '100px', display: 'flex', flexDirection: 'column'}}>
            <h3>Notifications: </h3>
            <div style={{width: '600px'}}>
              <ul>{props.notifications.map((notification, index) => {
                return (
                  <li key={index} style={{margin: '10px'}}>{notification}</li>
                )
              })}</ul>
            </div>
            
        </div>
    )
}
