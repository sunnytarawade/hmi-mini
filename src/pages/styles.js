import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const StyledHomeContainer = styled.div`
    background: linear-gradient(to right, green, cyan);
    width: 100vw;
    height: 100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;

export const StyledHomeMain = styled.div`

    background: white;
    width : 70%;
    height: 60%;
    transform : translateY(-10%);
    padding : 20px;
`;

export const StyledImg = styled.img`
    display : block;
    margin : 20px auto;
    width : 40%;
    height : 40%;

`;

export const StyledLink = styled(Link)`
display:block;
    width : 150px;
    height: 20px;
    background-color : indigo;
    color:white;
    text-decoration:none;
    padding : 5px;
    text-align:center;
    margin : 10px auto;

    border-radius : 2px;
    &:hover{
        opacity : 0.5;
    }
`;