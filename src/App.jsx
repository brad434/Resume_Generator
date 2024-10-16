import { useState } from 'react'
import { useUser } from '@clerk/clerk-react'
import { Button } from './components/ui/button'
import './App.css'
import { Navigate, Outlet } from 'react-router-dom'
import Header from './components/custom/Header'

function App() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to={'/auth/sign-in'} />
  }

  return (
    <>
      <Header />
      {/* Outlet connects with the routes in the main.jsx file */}
      <Outlet />
    </>
  )
}

export default App
