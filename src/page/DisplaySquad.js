import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';

const Text = styled.h4`
color:white;
font-weight:600;
background-color:gray;
padding:0.5em;
`
const TextDiv = styled.div`
display:flex;
width:100%;
justify-content:center;
align-items:center;
flex-direction:column;
`
const Title = styled.h2`
background-image:linear-gradient(to right,red,blue);
width:100%;
text-align:center;
color:white;
padding:0.2em 0;
`

const DisplaySquad = () => {
    const {eventid}= useParams();
    const mysquad = useSelector(props=>props.matchsquad[eventid]);
    
    console.log(mysquad)
    return (
        <>
        <Title>Players</Title>
        <TextDiv>
            {mysquad.squad.map(p=><Text>{p.name}</Text>)}
        </TextDiv>
        </>
    )
}

export default DisplaySquad
