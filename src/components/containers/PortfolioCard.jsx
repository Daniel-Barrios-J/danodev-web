import React from 'react'
import styled from 'styled-components'
import CardProject from '../pure/cardProject'

const PortfolioCardContainer = styled.div`
  /* background-color: gray; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  /* gap: 24px 0; */
  padding: 24px;
  border-bottom: solid 1px beige;
  width: 90%;
  margin: 0 auto;
`

const Description = styled.div`
  /* background-color: gray; */
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
  min-width: 300px;
  h2 {
    color: beige;
  }
  .technologies-container {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    .tech{
      width: 90px;
      height: 90px;
      background-color: white;
      border-radius: 12px;
      display: grid;
      place-content: center;
      overflow: hidden;
      box-shadow: 2px 2px 8px black;
      img {
        width: 80px;
      }
    }
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
            <div className='tech'>
              <img src={tech.img} alt="" />
            </div>
          )
        }  
        </div>
        
      </Technologies>
    </PortfolioCardContainer>
  )
}
