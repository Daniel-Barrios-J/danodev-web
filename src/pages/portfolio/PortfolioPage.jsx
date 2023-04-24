import React from 'react';
import Header from '../../components/pure/Header';
import '../../styles/css/portfolioPage.css'
import PortfolioCard from '../../components/containers/PortfolioCard';
import { projects } from '../../utils/projects';

const PortfolioPage = () => {
  return (
    <div className='portfolio-page-container'>
      <Header />
      <h1>Portafolio</h1>
      {
        projects.map(project => <PortfolioCard {...project} />)
      }
    </div>
  );
}

export default PortfolioPage;
