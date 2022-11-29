import React from 'react'
import DefaultLayoutHOC from '../layout/Default.layout';

// Components
import Poster from '../components/Poster/Poster.Component';
import PlayFilter from '../components/PlayFilters/PlayFilters.Component';

const PlayPage = () => {
    return (<>
        <div className='container mx-auto px-4 my-10'>
            <div className='w-full flex flex-col flex-col-reverse lg:flex-row-reverse gap-4'>
                <div className='lg:w-3/4 p-4 bg-white rounded'>
                    <h2 className='text-2xl font-bold mb-4'>Plays in Nashik</h2>
                    <div className='flex flex-wrap'>
                        <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                            <Poster
                                isPlay={true}
                                src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMCBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00336218-retptecdec-portrait.jpg'
                                title='Waghnakha'
                                subtitle='Drama | Marathi | 5yrs + | 2hrs' />
                        </div>
                        <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                            <Poster
                                isPlay={true}
                                src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNiBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00118818-cxfksxqxyv-portrait.jpg'
                                title='Haravlelya Pattyancha Banglaa'
                                subtitle='Drama | Marathi | 5yrs + | 2hrs 10mins' />
                        </div>
                        <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                            <Poster
                                isPlay={true}
                                src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzMCBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00338953-muhafeytzd-portrait.jpg'
                                title='Charchaughi'
                                subtitle='Drama | Marathi | 5yrs + | 2hrs 45mins' />
                        </div>
                        <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                            <Poster
                                isPlay={true}
                                src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMyBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00090017-bpljeefzdc-portrait.jpg'
                                title='Dada Ek Good News Aahe'
                                subtitle='Drama | Marathi | 2hrs 10mins' />
                        </div>
                        <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                            <Poster
                                isPlay={true}
                                src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNiBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00341340-asblzwcqpx-portrait.jpg'
                                title='Tughlaq'
                                subtitle='Theatre | Hindi, Urdu | All age groups | 1hr 50mins' />
                        </div>
                        <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                            <Poster
                                isPlay={true}
                                src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyIERlYw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00340392-psrgtpbhmx-portrait.jpg'
                                title='Jati Rehje'
                                subtitle='Comedy Shows | Gujarati, English | 18yrs + | 1hr 30mins' />
                        </div>
                    </div>
                </div>

                <div className='lg:w-1/4 p-4 bg-white rounded'>
                    <h2 className='text-2xl font-bold mb-4'>Filters</h2>
                    <div>
                        <PlayFilter
                            title="Date"
                            tags={["Today", "Tomorrow", "This Weekend"]} />
                    </div>
                    <div>
                        <PlayFilter
                            title="Language"
                            tags={["English", "Marathi", "Hindi"]} />
                    </div>
                    <div>
                        <PlayFilter
                            title="Categories"
                            tags={["Theatre"]} />
                    </div>
                    <div>
                        <PlayFilter
                            title="Genres"
                            tags={["Drama", "Musical"]} />
                    </div>
                    <div>
                        <PlayFilter
                            title="More Filters"
                            tags={["Outdoor Events", "Online Streaming"]} />
                    </div>
                    <div>
                        <PlayFilter
                            title="Price"
                            tags={["Free", "0-500", "501-2000", "Above 2000"]} />
                    </div>
                </div>
            </div>
        </div>

    </>
    );
};

export default DefaultLayoutHOC(PlayPage);