import React from 'react';
import AboutMe from '../../AboutMe/AboutMe';
import { ContactMe } from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';
import MyProjects from '../MyProjects/MyProjects';
import MySkill from '../MySkill/MySkill';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';

const Home = () => {
    return (
      <div>
        <Intro></Intro>
        <MySkill></MySkill>
        <Services></Services>
        <MyProjects></MyProjects>
        <ContactMe>f</ContactMe>
      </div>
    );
};

export default Home;