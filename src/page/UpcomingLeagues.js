import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';

import { getUpcomingLeague } from '../features/Slice/upcomingleagueSlice';

//import { getmatchsquad } from '../features/Slice/matchsquadSlice';
import GamesCard from '../components/GamesCard';
import styled from 'styled-components';


const Title = styled.h2`
background-image:linear-gradient(to right,red,blue);
width:100%;
text-align:center;
color:white;
padding:0.2em 0;
`
const Container = styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
`
const UpcomingLeagues = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUpcomingLeague())
    },[dispatch])
    const upcomingleague = useSelector(state => state.upcomingleague);
    console.log(upcomingleague);
    return (
        <>
            <Title>Upcoming Leagues</Title>
            <Container>
                {upcomingleague.length&&upcomingleague.map(Match=><GamesCard key={Match.id} Match={Match}/>)}
            </Container>
        </>
    )
}

export default UpcomingLeagues;

//const dispatch = useDispatch();
    //dispatch(setMatchId({value:6432}))
    
    //const matchid = useSelector(props=>props.matchid)
    //const value =  useSelector(props=>props.upcomingleague)
    // useEffect(() => {
    //     dispatch(getmatchsquad(matchid))
    // }, [dispatch,matchid])
//const matchsquad = useSelector(props=>props.matchsquad)