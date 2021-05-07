import React from 'react'
import Switch from './Switch'


function FormLayer({setState,curbScore, formDetailTest, atsScore, score}) {
    const scoreState = {atsScore,curbScore}
    return (
        <div style={{
            background:'white',
            display:'flex',
            padding : '10px',
            borderBottom:'0.5px solid grey',
        }}>
            <p style={{width:'70%'}}>{formDetailTest}</p>
            {/* <Switch handleChange={(e)=>{console.log('i work'); setState({atsScore,curbScore : e.target.checked ? ++curbScore : --curbScore})}}/> */}
            <Switch handleChange={(e)=>{ setState({...scoreState, [score] : e.target.checked ? ++scoreState[score] : --scoreState[score]})}}/>
            {/* <Switch handleChange={(e)=>{console.log('i work'); setState({curbScore : 25})}}/> */}
        </div>
    )
}

export default FormLayer
