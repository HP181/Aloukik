import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
  return (<>
        <Navbar />
    <div className='fixed bottom-0 w-full'>
        <Footer />
        </div>
  </>
  
  )
}

export default Home