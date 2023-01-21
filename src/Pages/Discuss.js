
const Discuss = () => {
    return (
        <>
            <section className="body-font font-Poppins text-gray-100 bg-gray-800">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">Discuss with your friends</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">You can join the Chat Room by entering room number <span> <i> example - 1234 </i>, <br /> and your friend enter the same room number for continue Discussions </span> </p>
                    </div>
                    <form>
                    <div className="w-full justify-center mx-auto sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 ">
                        <div className="relative justify-center items-center  text text-center flex-grow w-full mb-10">
                            <div className="mb-4">
                                <label htmlFor="full-name" className="leading-7 text-xl font-Poppins font-medium text-gray-100">Join Room</label><br />
                            </div>
                            <input type="number" placeholder="Enter Room Number..." maxLength="10" min={1111} required id="full-name" name="roomId" className="w-1/2 bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <section className="mx-auto w-1/2">
                        <div className="relative mx-auto justify-center items-center text text-center flex-grow w-full  py-2 ">

                            {/* --------------Chatbox--------- */}
                            <section className="text-gray-100 bg-gray-700 rounded-2xl body-font">
                                <div className="container  h-4/6   px-5 py-24 mx-auto">
                                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                                        <div className="sm:w-32 sm:h-32 h-20 w-20  sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                        <img src="images/user2.jpg" className="h-32 w-40 rounded-full" alt=""/>
                                        </div>
                                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                            <h2 className="text-yellow-100 text-lg title-font font-medium mb-2">User 1</h2>
                                            <p className="leading-relaxed text-base text-white">Hii, How are you?</p>

                                        </div>
                                    </div>
                                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                            <h2 className="text-yellow-400 text-lg title-font font-medium mb-2">User 2</h2>
                                            <p className="leading-relaxed text-base text-white">i'm fine & you?</p>

                                        </div>
                                        <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                            <img src="images/user1.jpg" className="rounded-full" alt=""/>
                                        </div>
                                    </div>
                                    <div className="text-start ml-6 px-20">
                                        <label htmlFor="text-box" className="leading-7 text-lg  text-gray-400">Enter Chat</label><br />
                                    </div>
                                    <input type="text-box" id="text-box" name="textBox" className="w-1/2 bg-transparent rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 py-2 focus:py-4  px-3 leading-8 transition-colors duration-200 ease-in-out" />

                                    <button type="submit" className="text-white ml-10 bg-indigo-500 justify-center  items-center border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
                                </div>
                            </section>

                            {/* --------------Chatbox--------- */}

                        </div>
                    </section>
                    </form>
                </div>
            </section>
        </>

    )
}

export default Discuss
