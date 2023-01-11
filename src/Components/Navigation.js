import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <>
      <header c className="text-gray-600 body-font navbar">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" className="flex title-font font-medium items-center text-gray-800 mb-4 md:mb-0">
            <img src="/images/logotcf.png" alt="tcflogo" className="w-16" />
            <span className="ml-3 text-2xl font-semibold font-Poppins text-blue-900">thecodersfactory</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto font-Poppins text-zinc flex flex-wrap text-xl text-center items-center font-bold justify-center space-x-4">
            <Link to="/about" className="hover:text-gray-900 uppercase ">Learn</Link>
            <Link to="/about" className="hover:text-gray-900 uppercase ">Projects</Link>
            <Link to="/about" className="hover:text-gray-900 uppercase ">Discussions</Link>
            <Link to="/about" className="hover:text-gray-900 uppercase ">Developers</Link>
            <Link to="/about" className="hover:text-gray-900 uppercase ">About</Link>

          </nav>
          <Link to="/" className="flex">
          <div>
          <svg viewBox="0 0 24 24" className='h-8' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" fill="#2A4157" fillOpacity="0.24" /> <circle cx={12} cy={10} r={4} fill="#222222" /> <path fillRule="evenodd" clipRule="evenodd" d="M18.2209 18.2462C18.2791 18.3426 18.2613 18.466 18.1795 18.5432C16.5674 20.0662 14.3928 21 12 21C9.60728 21 7.43264 20.0663 5.82057 18.5433C5.73877 18.466 5.72101 18.3427 5.77918 18.2463C6.94337 16.318 9.29215 15 12.0001 15C14.7079 15 17.0567 16.3179 18.2209 18.2462Z" fill="#222222" /> </g></svg>
            </div>
            <div>
              <button className="items-center text-zinc-900 font-bold font-Poppins border-0 py-1 px-3 focus:outline-none hover:text-orange-900 rounded-lg text-xl mt-4 md:mt-0">Log In</button>
            </div>
          </Link>
        </div>
      </header>
    </>
  )
}

export default Navigation;
