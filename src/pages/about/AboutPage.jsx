import React from 'react';
import Header from '../../components/pure/Header';
import DescriptionMe from '../../components/pure/DescriptionMe';
import Skills from '../../components/containers/Skills';
import '../../styles/css/aboutPage.css'

const About = () => {
  return (
    <div>
      <Header />
      <main className='main-container' style={{display: 'flex', height: '90vh'}}>
        <DescriptionMe />
        <Skills />
      </main>
    </div>
  );
}

export default About;
