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
import CommentSection from './CommentSection/CommentSection';
import TestimonialPage from './TestimonialPage/TestimonialPage';

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
            <CommentSection></CommentSection>
            <TestimonialPage></TestimonialPage>
        </div>
    );
};

export default Home;