import React from 'react'
import FormLayer from './FormLayer'
import { StyledHomeMain, StyledLink } from './styles'

const AtsDetails = {
    0 : 'No Risk',
    1: 'Low Risk',
    2 : 'Medium Risk',
    3 : 'Medium Risk',
    4 : 'High Risk',
    5 : 'High Risk',
    
}

const AtsFormDetails = ['Confusion','Uremia BUN level > 20 mg/dL',`Lukopenia`,'Thrombocytopenia','Hypothermia'];

function CurbForm(props) {
    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            background:'linear-gradient(to right,green, blue)',
            height:'100vh',
        }}>
            <div style={{
                height:'5vh',
            padding:'5ph',
            textAlign:'center',
            fontWeight:'bold',
            borderBottom:'solid 2px grey',
            background:'white'
            }}>
                Treatment
            </div>
            <div style={{
                height:'60vh',
                display:'flex',
                flexDirection:'column',
            }}>
                {AtsFormDetails.map(detail=><FormLayer score="atsScore" setState={props.setState} {...props} formDetailTest={detail}/>)}
            </div>

            <div style={{
                height: '30vh',
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <div style={{
                    height : '80%',
                    width: '80%',
         background:'white',
         padding :'5px'
            }}>
                    Score = {props.atsScore}
                    <br/>
                    {AtsDetails[props.atsScore]}
                    <StyledLink to="/treatment">Treatment</StyledLink>
                </div>
            </div>
        </div>
    )
}

export default CurbForm
