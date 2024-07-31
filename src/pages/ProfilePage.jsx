import React from 'react'
import { useAuth } from '../hooks/AuthProvider'

const ProfilePage = () => {
  return (<>
    <div>ProfilePage</div>
    { useAuth.isAuth &&
        <div>
           <h4>User</h4>
           
             <p>Name: { useAuth.user.name}</p>
             
          </div>
       }
       </>
  )
}

export default ProfilePage