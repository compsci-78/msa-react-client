import React from 'react'
import { useAuth } from '../hooks/AuthProvider'

const LandingPage = () => {

  const {user,isAuth,loginAction, logoutAction} = useAuth();

  return (
    <>
    <h1>LandingPage</h1>
    <section className="actions">
        {!isAuth && (
          <button onClick={() => loginAction()}>Login</button>
        )}
        {isAuth && (
          <button onClick={() => logoutAction()}>Logout</button>
        )}
      </section>

      {isAuth && (
        <div>
          <h4>Token</h4>
          <pre>{user.name}</pre>
        </div>
      )}
    </>
  )
}

export default LandingPage