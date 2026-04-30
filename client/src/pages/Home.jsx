import homePageDoodle from '../Assets/Images/HomePageDoodle.png'

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center">
      
       <div className="relative w-full max-w-6xl mx-auto">
  
  <img
    src={homePageDoodle}
    alt="homepage doodle"
    className="w-full h-auto rounded-xl"
  />

<div className="absolute top-4 sm:top-6 md:top-8 lg:top-10 left-1/2 -translate-x-1/2 px-4"> 
   <div className="text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
        Welcome to Trakio
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mt-2">
        Peace of Mind, Every Mile
      </p>
    </div>
  </div>

</div>
      </div>
    </div>
  )
}

export default Home