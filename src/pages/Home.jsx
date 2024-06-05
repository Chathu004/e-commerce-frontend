import React from 'react'
import Header from '../components/Header'
import video from '../../public/home1.mp4'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <video
          className="  w-full h-full "
          src={video}
          autoPlay
          loop
          muted
        >

        </video>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default Home
