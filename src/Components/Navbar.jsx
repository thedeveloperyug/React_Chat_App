import user1 from "../userImages/user1.jpg"

const Navbar = () => {
    return (
        <div className=' flex justify-between w-full h-20  bg-slate-600 chatNavbar'>
            <span className='chatLogo font-Poppins font-semibold leading-6 text-gray-100 text-lg p-4 tracking-wide'>thecodersfactory</span>
            <div className="user flex w-full items-center bg-slate-600">
                <div className="ml-6">
                <img src={user1} className='w-10  rounded-full' alt="" />
                </div>
                <div className="">
                <span className='font-Poppins font-medium text-gray-300 text-lg items-center mx-2'>user</span>
                <button className='font-Poppins font-medium bg-gray-100 bg-opacity-60 py-2 rounded px-2 text-sm'>Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
