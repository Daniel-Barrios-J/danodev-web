import React from 'react';
import DesingMe from '../../components/containers/DesingMe';
import Header from '../../components/pure/Header';
import Presentation from '../../components/containers/Presentation';
import '../../styles/home.css'

const Home = () => {
  return (
    <div>
      <Header />
      <main className='main-container' >
        <Presentation />
        <DesingMe />
      </main>
    </div>
  );
}

export default Home;
