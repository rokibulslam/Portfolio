import React from 'react';
import Intro from './Intro/Intro';
import MySkill from './MySkill/MySkill';
import Navigation from './Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <MySkill></MySkill>
        </div>
    );
};

export default Home;