import React from 'react'

export default function Notifications(props) {
    return (
        <div style={{marginLeft: '100px', marginTop: '50px'}}>
            <h3>Notifications: </h3>
            <ul>{props.notifications.map((notification, index) => {
            return (
              <li key={index}>{notification}</li>
            )
          })}</ul>
        </div>
    )
}
