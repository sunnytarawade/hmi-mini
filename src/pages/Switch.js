import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

export const StyledSwitch = styled.span`
    padding: 5px;
    display: inline-block;
`;


export const StyledLabel = styled.label`
    cursor: pointer;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
`;

export const StyledInput = styled.input`
    position: absolute;
    top: 0%;
    left: 0%;
    opacity: 0;
`;

export const StyledSlider = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    align-items: center;
    opacity: ${props => (props.disabled ? '0.6' : '1')};
    justify-content: ${props => (props.checked ? 'flex-end' : 'flex-start')};
    background-color: ${props => (props.checked ? '#0f93ff' : '#ccc')};
`;

export const StyledKnob = styled.div`
    width: 28px;
    height: 28px;
    margin: 4px;
    border-radius: 100%;
    background-color: white;
`;

const Switch = ({
    defaultChecked,
    disabled,
    className,
    handleChange,
}) => {
    const [checked, setChecked] = useState(defaultChecked);

    useEffect(() => {
        setChecked(defaultChecked);
    }, [defaultChecked]);

    const handleSwitchChange = (e) => {
        handleChange(e);
        setChecked(e.target.checked);
    };

    return (
        <StyledSwitch className={className}>
            <StyledLabel>
                <StyledInput
                    type="checkbox"
                    checked={checked}
                    disabled={disabled}
                    onChange={handleSwitchChange}
                />
                <StyledSlider
                    disabled={disabled}
                    className="slider"
                    checked={checked}
                >
                    <StyledKnob className="knob" />
                </StyledSlider>
            </StyledLabel>
        </StyledSwitch>
    );
};


export default Switch;
