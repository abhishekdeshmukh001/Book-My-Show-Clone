import React from 'react'
import Footer from '../components/Footer/Footer.Component';
import Navbar from '../components/Navbar/Navbar.Component';


const DefaultLayoutHOC =
    (Component) =>
        ({ ...props }) => {
            return (
                <div>
                    <Navbar />
                    <Component {...props} />
                    <Footer />
                </div>
            )
        };

export default DefaultLayoutHOC;