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
  gap: 0 24px;
  .card-project {
    width: auto;
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 8px;
  color: whitesmoke;
  min-width: 350px;
  width: 40%;
  h2 {
    margin: 0;
  }
`

const Technologies = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  width: 25%;
  h2 {
    color: whitesmoke;
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
    <PortfolioCardContainer>
      <div className='card-project'>
        <CardProject
          project={name}
          link={link}
        />
      </div>
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
