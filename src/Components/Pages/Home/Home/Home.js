import React from 'react';
import { ContactMe } from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';
import MyProjects from '../MyProjects/MyProjects';
import MySkill from '../MySkill/MySkill';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <MySkill></MySkill>
            <MyProjects></MyProjects>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;