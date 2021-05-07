import React from 'react'
import {StyledHomeContainer, StyledHomeMain, StyledImg, StyledLink} from './styles';

const TreatmentData = {
    0 : 'No Risk found',
    1: 'Not enough symptoms match',
    2 : 'Not enough symptoms match',
    3 : 'Try using an aspirin',
    4 : 'Try using an aspirin',
    5 : 'Combination of beta-lactum, beta-lactumase inhibitor',
    6 : 'Combination of beta-lactum, beta-lactumase inhibitor',
    7 : 'See a doctor',
    8 : 'See a doctor immediately',
    9 : 'See a doctor immediately',

}

function Treatment({curbScore, atsScore,setState}) {
    return (
        <StyledHomeContainer>
        <StyledHomeMain>
        
            <h1>Non ICU Treatment :</h1>
            <h3>Curb Score : {curbScore}</h3>
            <h3>ATS Score : {atsScore}</h3>
            <h4>Recommedation:</h4>
            <code>{TreatmentData[curbScore + atsScore]}</code>

          
        </StyledHomeMain>
        <StyledLink  to="/" onClick={()=>setState({atsScore:0,curbScore:0})}>Home</StyledLink>
       
    </StyledHomeContainer>
    )
}

export default Treatment
