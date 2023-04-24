import React from 'react'
import styled from 'styled-components'
import CardProject from '../pure/cardProject'

const PortfolioCardContainer = styled.div`
  /* background-color: gray; */
  display: flex;
  align-items: center;
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
  width: 40%;
  color: beige;
  h2 {
    margin: 0;
  }
`

const Technologies = styled.div`
  /* background-color: aliceblue; */
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  width: 30%;
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
        {
          technologies.map(tech =>
            <div className='tech'>
              <img src={tech.img} alt="" />
            </div>
          )
        }
      </Technologies>
    </PortfolioCardContainer>
  )
}
