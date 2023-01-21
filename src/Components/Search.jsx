import React from 'react'
import userimg from '../userImages/user1.jpg'

const Search = () => {
    return (
        <div>
            <div className="">
                <div className="mb-0.5">
                    <input type="search" className="form-control block w-full  text-base font-normal text-gray-100 bg-transparent g border-b-2 border-opacity-75 border-gray-600 rounded transition  ease-in-out  focus:text-gray-100 focus:bg-transparent focus:border-blue-600 px-2 focus:outline-none placeholder-gray-400" id="exampleSearch2" placeholder="Find a User.." />
                </div>
                <div className='border-b-2 cursor-pointer border-gray-600 flex border-opacity-50 hover:bg-slate-500'>
                    <img src={userimg} className='w-16 px-2 rounded-full py-2 ' alt='userimg' />
                    <p className=' mx-6 items-center text-center text-gray-200 flex text-lg font-Poppins'>Jhon</p>
                </div>
            </div>
        </div>
    )
}

export default Search
