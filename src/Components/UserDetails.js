import React from 'react'

const UserDetails = (props) => {
    if (props.show) {
        return (
            <div>
                <p>Details</p> 
            </div>
        )
    } else {
        return null
    }  
}

export default UserDetails