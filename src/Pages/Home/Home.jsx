import React from 'react';
import Banner from './Banner/Banner';
import OurServices from './OurServices/OurServices';
import MarqueeSection from '../MarqueeSection/MarqueeSection';
import KnowMore from './KnowMore/KnowMore';
import TopCourse from './TopCourse/TopCourse';
import SubsCribe from './Subscribe/SubsCribe';
import SkilledIntroduce from './SkilledIntroduce/SkilledIntroduce';
import AchievementsSection from './AchievementsSection/AchievementsSection ';
import FaqSection from './FaqSection/FaqSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <MarqueeSection></MarqueeSection>
            <KnowMore></KnowMore>
            <TopCourse></TopCourse>
            <SubsCribe></SubsCribe>
            <SkilledIntroduce></SkilledIntroduce>
            <AchievementsSection></AchievementsSection>
            <FaqSection></FaqSection>
        </div>
    );
};

export default Home;