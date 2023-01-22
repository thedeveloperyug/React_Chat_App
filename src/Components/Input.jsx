import React from 'react'

const Input = () => {
  return (
    <div className='bg-gray-300  w-full'>
      <div>
        <div className='flex space-x-2 items-center'>
          <div className=' w-full'>
            <input type="text" className='py-2 w-full focus:outline-slate-300 font-Poppins font-medium px-4 mx-1 rounded bg-gray-200 placeholder-gray-500' placeholder='Enter Messages' />
          </div>
          <div className='flex cursor-pointer items-center'>
            <div className='flex items-center'>
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" className='h-6' xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 40.00 40.00" enableBackground="new 0 0 40 32" xmlSpace="preserve" fill="#000000" stroke="#000000" strokeWidth="0.0004"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <path fill="#808184" d="M10.459,15.294c2.757,0,5-2.243,5-5s-2.243-5-5-5s-5,2.243-5,5S7.702,15.294,10.459,15.294z M10.459,6.294 c2.206,0,4,1.794,4,4s-1.794,4-4,4s-4-1.794-4-4S8.253,6.294,10.459,6.294z" /> <path fill="#808184" d="M40,30.5v-29C40,0.673,39.327,0,38.5,0h-37C0.673,0,0,0.673,0,1.5v29C0,31.327,0.673,32,1.5,32h37 C39.327,32,40,31.327,40,30.5z M1,30.5v-29C1,1.224,1.224,1,1.5,1h37C38.776,1,39,1.224,39,1.5v29c0,0.276-0.224,0.5-0.5,0.5h-37 C1.224,31,1,30.776,1,30.5z" /> <path fill="#808184" d="M27.73,11.086c-0.536-0.532-1.406-0.53-1.938,0.003L14.646,22.235c-0.143,0.145-0.371,0.147-0.519,0.008 l-2.583-2.429c-0.544-0.51-1.382-0.498-1.912,0.03l-6.986,6.99c-0.195,0.195-0.195,0.512,0,0.707 C2.744,27.639,2.872,27.688,3,27.688s0.256-0.049,0.354-0.146l6.986-6.989c0.144-0.143,0.372-0.146,0.52-0.008l2.583,2.428 c0.544,0.513,1.383,0.499,1.911-0.029l11.145-11.146c0.145-0.146,0.38-0.146,0.526-0.001l9.622,9.566 c0.196,0.196,0.513,0.194,0.707-0.002c0.195-0.196,0.194-0.512-0.002-0.707L27.73,11.086z" /> </g> </g></svg>
              <svg viewBox="0 0 24 24" className='h-6' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 7.90909V16C6 19.3137 8.68629 22 12 22V22C15.3137 22 18 19.3137 18 16V6C18 3.79086 16.2091 2 14 2V2C11.7909 2 10 3.79086 10 6V15.1818C10 16.2864 10.8954 17.1818 12 17.1818V17.1818C13.1046 17.1818 14 16.2864 14 15.1818V8" stroke="#817e7e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
            <div className=''>
              <input type="file" className='w-72' name="" id="file" style={{ display: "none" }} />
              <label htmlFor="file"></label>
            </div>
            <div>
              <svg viewBox="0 0 24 24" className='h-10' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.99811 10.2467L7.43298 11.0077C7.70983 11.4922 7.84825 11.7344 7.84825 12C7.84825 12.2656 7.70983 12.5078 7.43299 12.9923L7.43298 12.9923L6.99811 13.7533C5.75981 15.9203 5.14066 17.0039 5.62348 17.5412C6.1063 18.0785 7.24961 17.5783 9.53623 16.5779L15.8119 13.8323C17.6074 13.0468 18.5051 12.654 18.5051 12C18.5051 11.346 17.6074 10.9532 15.8119 10.1677L9.53624 7.4221C7.24962 6.42171 6.1063 5.92151 5.62348 6.45883C5.14066 6.99615 5.75981 8.07966 6.99811 10.2467Z" fill="#646262"></path> </g></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Input
