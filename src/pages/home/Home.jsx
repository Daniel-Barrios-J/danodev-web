import React from 'react';
import DesingMe from '../../components/containers/DesingMe';
import Header from '../../components/pure/Header';
import Presentation from '../../components/containers/Presentation';

const Home = () => {
  return (
    <div>
      <Header />
      <main className='main-container' style={{display: 'flex', height: '90vh'}}>
        <Presentation />
        <DesingMe />
      </main>
    </div>
  );
}

export default Home;
