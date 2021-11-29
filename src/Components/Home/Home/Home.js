import React from 'react';
import Intro from './Intro/Intro';
import MyProjects from './MyProjects/MyProjects';
import MySkill from './MySkill/MySkill';
import Navigation from './Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <MySkill></MySkill>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Home;