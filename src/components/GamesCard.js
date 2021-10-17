import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import {getmatchsquad} from "../features/Slice/matchsquadSlice";
import { useDispatch } from 'react-redux';
import { setMatchId } from '../features/Slice/matchIdSlice';
const Card = styled.div`
    width:45%;
    display: flex;
    position:relative;
    margin:1rem;
    border-radius:10px;
    box-shadow:3px 2px 10px 4px rgb(0,0,0,0.05);
    flex-direction:column;
    transition: transform 0.3s ease;
    &:hover{
        transform:Scale(1.01);
    }
    @media (max-width:768px){
        width:100%;
    }
`
const TitleDiv = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items:center;
    margin:0;dispatch(getmatchsquad(matchid))
`
const Text = styled.p`
    font-size:0.8rem;
    padding: 0 1em;
    color: gray;
`
const TeamDiv = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
`
const TeamA = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:rgb(0,127,122,0.5);
`
const TeamB = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color: rgb(0,125,0,0.5);
`
const TeamImage = styled.img`
    width:50px;
    aspect-ratio:1;
    border-radius:50%;
    background-color:rgb(0,122,0,0.5);
`
const TeamName = styled.h4`
    color: blue;
    font-size: 20px;
    text-align:center;
    color:#fff;
    font-weight:400;
`

const EventDiv = styled.div`
    display:flex;
    justify-content:space-between;
`
const AbsoluteContent = styled.div`
    display:flex;
    position:absolute;
    width:100%;
    top:-30px;
    justify-content:center;
    @media(max-width:768px){
        position:relative;
        top:0;
    }
`
const AbsoluteText = styled.h3`
    padding:0.5rem;
    background-color:orange;
    color:#fff;
    font-weight:900;
    text-transform: uppercase;
`

const GamesCard=({Match})=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const date = Match.match_date.split('T')
    const time = date[1].split('+');

    const onClickHandle = ()=>{
        history.push(`/squad/${Match.id}`);
        dispatch(setMatchId({matchid:Match.id}));
        dispatch(getmatchsquad(Match.id));
    }

    return(<Card onClick={onClickHandle}>
        <TitleDiv>
            <Text>{Match.match_name}</Text>
            <Text>{date[0]}</Text>
        </TitleDiv>
        <TeamDiv>
            <TeamA>
                <TeamImage alt="teamlogo" src={Match.t1_image}/>
                <TeamName>{Match.t1_name}</TeamName>
            </TeamA>
            <TeamB>
                <TeamImage alt="teamlogo" src={Match.t2_image}/>
                <TeamName>{Match.t2_name}</TeamName>
            </TeamB>
        </TeamDiv>
        <EventDiv>
            <Text>{Match.event_name}</Text>
            <Text>{time[0]}</Text>
            <Text>{Match.match_type}</Text>
        </EventDiv>
        <AbsoluteContent>
            <AbsoluteText>{Match.match_status}</AbsoluteText>
        </AbsoluteContent>
    </Card>)
}
export default GamesCard;