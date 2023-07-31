import NavbarItem from '@/components/NavbarItem'
import React from 'react'
import { useCallback, useState } from 'react';

import { useRouter } from 'next/router';

import Footer from '@/components/Footer';




function home() {

    const router = useRouter();


    const auth = useCallback(async () => {
        router.push('/auth');
    }, []);







    return (
        <>

            <div className="relative h-5/6 w-full bg-[url('/images/BG.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
                <div className="bg-black w-full h-full bg-opacity-50 px-4 md:px-16 py-6  ">
                    <nav className="px-12 py-5 flex flex-row justify-between ">
                        <img src="/images/logoo.png" className="h-8 lg:h-12" alt="Logo" />

                        <button onClick={auth} className="bg-red-600 flex-row text-white rounded-md w-28 h-11 hover:bg-red-700 transition">
                            Sign in
                        </button>

                        {/* <div className="flex-row ml-10 gap-7  lg:flex  ">
                    <NavbarItem  label="Make account now for free"  active />
                    </div> */}
                    </nav>

                    <section className="text-slate-50 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-col text-center w-full mb-12">
                                <h1 className="sm:text-5xl text-lg font-medium title-font mb-4 text-white">Unlimited movies, TV shows, and more</h1>
                                <p className="lg:w-2/3 mx-auto sm:text-lg text-sm leading-relaxed text-base">Watch anywhere . Cancel anytime.
                                    <br />
                                    Ready to watch? Enter your email to create your membership for free.</p>
                            </div>

                            <div className="flex lg:w-3/6 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                                {/* <div className="relative flex-grow w-full">
                                    <label htmlFor="full-name" className="leading-7 text-sm text-white">Full Name</label>
                                    <input type="text" id="full-name" name="full-name" className="w-full bg-gray-800 bg-opacity-30 rounded border border-gray-300 focus:border-red-600 focus:bg-transparent focus:ring-2 focus:ring-red-300 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div> */}

                                <div className="relative flex-grow w-full">
                                    <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-30 rounded border border-gray-300 focus:border-red-600 focus:bg-transparent focus:ring-2 focus:ring-red-300 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>

                                <button className="text-white bg-red-600 border-0 py-3 px-10 focus:outline-none hover:bg-red-700 rounded text-md ">Join </button>

                            </div>
                        </div>
                    </section>

                </div>

            </div>

            <div className='w-full border-t-8 border-zinc-800'></div>

            <section className="text-gray-400 bg-black body-font">
                <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-5xl text-2xl mb-6 font-medium title-font text-white">Enjoy on your TV

                        </h1>

                        <p className="mb-8 leading-relaxed sm:text-xl text-lg">Watch on Smart TVs, Playstation, Xbox,
                            <br />Chromecast, Apple TV, Blu-ray players, and more.
                        </p>
                        {/* <div className="flex justify-center">
                            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
                            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
                        </div> */}
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:pr-20">
                        <img className="object-cover object-center rounded" alt="hero" src="/images/img.png" />
                    </div>
                </div>
            </section>


            <div className='w-full border-t-8 border-zinc-800'></div>


            <section className="text-gray-400 bg-black body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 lg:pl-24 lg:mr-52 " >
                        <img className="object-cover object-center rounded w-4/6 " alt="hero" src="/images/img2.png" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pr-6 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-5xl text-2xl mb-6 font-medium text-white">Download your shows
                            <br className="hidden lg:inline-block" />to watch offline
                        </h1>
                        <p className="mb-8 leading-relaxed sm:text-xl text-lg">Save your favorites easily and always have something to watch.</p>
                        {/* <div className="flex justify-center">
                            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
                            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
                        </div> */}
                    </div>
                </div>
            </section>



            <div className='w-full border-t-8 border-zinc-800'></div>

            <section className="text-gray-400 bg-black body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-5xl text-2xl mb-6 font-medium title-font text-white">Create Profiles for kids

                        </h1>

                        <p className="mb-8 leading-relaxed sm:text-xl text-lg">Send kids on adventures with their favorite characters in
                            <br />a space made just for them --free with your membership.
                        </p>
                        {/* <div className="flex justify-center">
                            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
                            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
                        </div> */}
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:pr-20">
                        <img className="object-cover object-center rounded" alt="hero" src="/images/kids.png" />
                    </div>
                </div>
            </section>


            <div className='w-full border-t-8 border-zinc-800'></div>




            <section className="text-gray-400 bg-black body-font">
                <div className="container px-10 py-24 mx-auto flex items-center md:flex-row flex-col">
                    <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                        <h2 className="text-xs text-red-400 tracking-widest font-medium title-font mb-1">STAR APP</h2>
                        <h1 className="md:text-3xl text-2xl font-medium title-font text-white">Avaliable now on google play & Apple Store</h1>
                    </div>
                    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                        <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                            </svg>
                            <span className="ml-4 flex items-start flex-col leading-none">
                                <span className="text-xs text-gray-500 mb-1">GET IT ON</span>
                                <span className="title-font font-medium">Google Play</span>
                            </span>
                        </button>
                        <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
                                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                                <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                            </svg>
                            <span className="ml-4 flex items-start flex-col leading-none">
                                <span className="text-xs text-gray-500 mb-1">Download on the</span>
                                <span className="title-font font-medium">App Store</span>
                            </span>
                        </button>
                    </div>
                </div>
            </section>


            <div className='w-full border-t-8 border-zinc-800'></div>



            {/* 
            <section className="text-gray-400 bg-black body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                        <img className="object-cover object-center rounded" alt="hero" src="/images/kids.png"/>
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-5xl text-2xl mb-6 font-medium text-white">Create Profiles for  
                            <br className="hidden lg:inline-block"/>kids
                        </h1>
                        <p className="mb-8 leading-relaxed sm:text-xl text-lg">Send kids on adventures with their favorite characters in a space made just for them --free with your membership.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
                            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
                        </div>
                    </div>
                </div>
            </section>



            
            */
            
            }


            <Footer />



        </>


    )
}

export default home
