import React from 'react';
import Banner from './Banner/Banner';
import OurServices from './OurServices/OurServices';
import MarqueeSection from '../MarqueeSection/MarqueeSection';
import KnowMore from './KnowMore/KnowMore';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <MarqueeSection></MarqueeSection>
            <KnowMore></KnowMore>
        </div>
    );
};

export default Home;