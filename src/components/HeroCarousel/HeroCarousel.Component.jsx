import React, { useState } from 'react'
import HeroSlider from 'react-slick';
import { NextArrow, PrevArrow } from './Arrows.Component';

const HeroCarousel = () => {

    const [images, setImages] = useState([{
        "adult": false,
        "backdrop_path": "/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 760161,
        "original_language": "en",
        "original_title": "Orphan: First Kill",
        "overview": "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
        "popularity": 3744.732,
        "poster_path": "/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg",
        "release_date": "2022-07-27",
        "title": "Orphan: First Kill",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 964
    },
    {
        "adult": false,
        "backdrop_path": "/hT3OqvzMqCQuJsUjZnQwA5NuxgK.jpg",
        "genre_ids": [
            53
        ],
        "id": 985939,
        "original_language": "en",
        "original_title": "Fall",
        "overview": "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
        "popularity": 3302.231,
        "poster_path": "/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
        "release_date": "2022-08-11",
        "title": "Fall",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 1363
    },
    {
        "adult": false,
        "backdrop_path": "/ghsPsvM0sEztdNT4kUlTsBF2LEF.jpg",
        "genre_ids": [
            18,
            28,
            53
        ],
        "id": 852046,
        "original_language": "fr",
        "original_title": "Athena",
        "overview": "Hours after the tragic death of their youngest brother in unexplained circumstances, three siblings have their lives thrown into chaos.",
        "popularity": 2780.156,
        "poster_path": "/fenNPxVF5ERy0CSyVruuEg959Hg.jpg",
        "release_date": "2022-09-09",
        "title": "Athena",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 250
    }
    ]);

    const settingsLG = {
        arrows: true,
        slidesToShow: 1,
        infinte: true,
        speed: 500,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        previousArrow: <PrevArrow />,
    }

    const settings = {
        arrows: true,
        slidesToShow: 1,
        infinte: true,
        speed: 500,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        previousArrow: <PrevArrow />,
    }

    return (
        <>
            <div className='lg:hidden'>
                <HeroSlider {...settings}>
                    {
                        images.map((images, index) => (
                            <div className='w-full h-96 md:h-80 py-3' key={index}>
                                <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt="Hero Banner" className='w-full h-full rounded-md object-center' />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>

            <div className='hidden lg:block'>
                <HeroSlider {...settingsLG}>
                    {
                        images.map((images, index) => (
                            <div className='w-full h-96 px-2 py-3' key={index}>
                                <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt="Hero Banner" className='w-full h-full rounded-md object-center' />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>

        </>
    );
}

export default HeroCarousel
