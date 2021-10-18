import React from 'react';
import Doctor from './Components/Doctor/Doctor';
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Doctor />
        </div>
    );
};

export default Home;