import React from 'react'
import styled from 'styled-components'
import CardProject from '../pure/cardProject'
import CardSkills from '../pure/CardSkills'

const PortfolioCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 24px;
  border-top: solid 1px white;
  width: 90%;
  margin: 0 auto;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 8px;
  max-width: 40%;
  min-width: 300px;
  color: beige;
  h2 {
    margin: 0;
  }
`

const Technologies = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  max-width: 30%;
  min-width: 400px;
  h2 {
    color: beige;
  }
  .technologies-container {
    display: flex;
    flex-wrap: wrap;
    gap: 18px 8px;
    justify-content: space-evenly;
  }
`

export default function PortfolioCard({name, description, technologies, link}) {
  return (
    <PortfolioCardContainer className='portfolio-card'>
      <CardProject
        project={name}
        link={link}
      />
      <Description>
        <h2>{name}</h2>
        {description}
      </Description>
      <Technologies>
        
        <h2>Tecnologías</h2>
        <div className='technologies-container'>
        {
          technologies.map(tech =>
            // <div className='tech'>
            //   <img src={tech.img} alt="" />
            // </div>
            <CardSkills skill={tech.tech} urlImage={tech.img} />
          )
        }  
        </div>
        
      </Technologies>
    </PortfolioCardContainer>
  )
}
