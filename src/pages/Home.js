import React from 'react'
import {StyledHomeContainer, StyledHomeMain, StyledImg, StyledLink} from './styles';
import Logo from '../assets/logo.png';
import Switch from './Switch';
function Home() {
    return (
        <StyledHomeContainer>
            <StyledHomeMain>
                <StyledImg src={Logo}/>
       
  
                <h1 style={{textAlign:'center'}}>Pneumonia Calculator</h1>
                    <StyledLink to="/curb-form">Severity</StyledLink>
                    {/* <StyledLink to="/treatment">Treatment</StyledLink> */}

            </StyledHomeMain>
        </StyledHomeContainer>
    )
}

export default Home
