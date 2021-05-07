import React from 'react'
import FormLayer from './FormLayer'
import { StyledHomeMain, StyledLink } from './styles'

const CurbDetails =  {
    0 : 'No Risk',
    1: 'Low Risk',
    2 : 'Medium Risk',
    3 : 'High Risk',
    4 : 'High Risk',
    
}

const CurbFormDetails = ['BUN > 19mg/dL','Respiratory Rate >= 30',`Systolic BP < 90mm/Hg\nDiastolic BP > 60 mm/Hg`,'Age >= 65',];

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
                CURB
            </div>
            <div style={{
                height:'60vh',
                display:'flex',
                flexDirection:'column',
            }}>
                {CurbFormDetails.map(detail=><FormLayer score='curbScore' setState={props.setState} {...props} formDetailTest={detail}/>)}
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
                    Score = {props.curbScore}
                    <br/>
                    {CurbDetails[props.curbScore]}
                    <StyledLink to="/ats">Go to ATS Criteria</StyledLink>
                </div>
            </div>
        </div>
    )
}

export default CurbForm
