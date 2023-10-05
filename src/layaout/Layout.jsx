import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Route from '../routes/Route'
import Chat from '../Components/Chat'

const Layout = () => {
  return (
    <div>

            <Header/>
                <Route/>
                <Chat/>
            <Footer/>
    </div>
  )
}

export default Layout