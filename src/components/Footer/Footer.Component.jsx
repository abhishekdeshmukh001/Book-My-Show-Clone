import React from 'react'

function FooterSm() {
    return (
        <>

        </>
    )
}

function FooterMd() {
    return (
        <>

        </>
    )
}

function FooterLg() {
    return (
        <>
            <div className='container flex mx-auto px-4 items-center justify-between flex-row flex-wrap pb-5'>
                <div className='flex items-center gap-3 justify-between'>
                    <div className='w-10 h-10 flex'>
                        <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" alt="Hut Icon" className='w-full h-full' />
                    </div>
                    <div className='flex items-center gap-3 px-2'>
                        <h2 className='text-white font-bold text-m'>List your Show</h2>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h2 className='text-white text-s'>
                            Got a show,event,activity or a great experience? Partner with us & get listed on BookMyShow
                        </h2>
                    </div>
                </div>

                <div className='flex items-center gap-3'>
                    <button className='bg-red-500 text-white px-3 py-2 text-m rounded hover:bg-red-400'>Contact Today !</button>
                </div>

                <div className='flex flex-wrap items-start flex-row w-full pt-4'>
                    <div className='flex flex-wrap items-start flex-row w-full pt-6'>
                        <div className='flex flex-wrap items-start flex-row w-full pt-5'>
                            <h5 className='text-gray-300 text-sm'>MOVIES NOW SHOWING IN NASHIK</h5>
                        </div>
                        <div className='flex flex-wrap flex-row w-full pt-3'>
                            <h5 className='text-gray-400 text-xs'>
                                Black Adam | Doctor G | Kantara | Shivpratap Garudzep | Vikram Vedha | Tiranga | Halloween ends | Brahmastra
                            </h5>
                        </div>
                    </div>

                    <div className='flex flex-wrap items-start flex-row w-full pt-4'>
                        <div className='flex flex-wrap items-start flex-row w-full pt-5'>
                            <h5 className='text-gray-300 text-sm'>MOVIES REVIEWS AND TRENDING ARTICLES</h5>
                        </div>
                        <div className='flex flex-wrap flex-row w-full pt-3'>
                            <h5 className='text-gray-400 text-xs'>
                                Trending Articles | Latest News on Movies, Events, Plays and Sports | Trailers
                            </h5>
                        </div>
                    </div>

                    <div className='flex flex-wrap items-start flex-row w-full pt-4'>
                        <div className='flex flex-wrap items-start flex-row w-full pt-5'>
                            <h5 className='text-gray-300 text-sm'>MOVIES UPDATES AND CELEBRITIES</h5>
                        </div>
                        <div className='flex flex-wrap flex-row w-full pt-3'>
                            <h5 className='text-gray-400 text-xs'>
                                Upcoming Movies | Movies Now Showing | Movie Celebrities
                            </h5>
                        </div>
                    </div>

                    <div className='flex flex-wrap items-start flex-row w-full pt-4'>
                        <div className='flex flex-wrap items-start flex-row w-full pt-5'>
                            <h5 className='text-gray-300 text-sm'>THINGS TO DO IN NASHIK</h5>
                        </div>
                        <div className='flex flex-wrap flex-row w-full pt-3'>
                            <h5 className='text-gray-400 text-xs'>
                                Adventure | Amusement Parks | Festivals | Durga Puja Festival | Food and Drinks | Holi Parties | Antiques, Heritage, Museums | Christmas Celebration | Gaming | Parties | Unique Tours
                            </h5>
                        </div>
                    </div>

                    <div className='flex flex-wrap items-start flex-row w-full pt-4'>
                        <div className='flex flex-wrap items-start flex-row w-full pt-5'>
                            <h5 className='text-gray-300 text-sm'>EVENTS IN NASHIK</h5>
                        </div>
                        <div className='flex flex-wrap flex-row w-full pt-3'>
                            <h5 className='text-gray-400 text-xs'>
                                Workshops | Comedy Shows | Movies Shows | Kids | Spirituality | Exhibitions | Meetups | Conference | Vacations | Talks
                            </h5>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

const Footer = () => {
    return <footer className='bg-darkBackground-700 px-4 py-3'>

        {/* Mobile Screen Navbar*/}
        <div className='md:hidden'>
            <FooterSm />
        </div>

        {/* Tablet Screen Navbar*/}
        <div className='hidden md:flex lg:hidden'>
            <FooterMd />
        </div>

        {/* Desktop Screen Navbar*/}
        <div className='hidden md:hidden lg:flex'>
            <FooterLg />
        </div>
    </footer>
}

export default Footer;