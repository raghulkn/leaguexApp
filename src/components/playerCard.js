import React,{useEffect, useState} from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width:60%;
    margin:0.5rem;
    height:70px;
    display:flex;
    background-color:${(props=>props.select?"rgb(0,175,122,1)":props.team?"rgb(0,127,122,0.5)":"rgb(0,125,0,0.5)")};
    justify-content:space-evenly;
`;
const Text = styled.h4`
    color:white;
`;

const PlayersCard = ({Player,SelectedPlayers,addPlayerToSquad,removePlayerFromSquad,Team}) => {
    // const mySquad = useSelector(props=>props.mysquad);
    const [selected, setselected] = useState(false);
    // mySquad[0].squad.forEach(p=>{
    //  console.log(p)
    // })
    console.log(SelectedPlayers)
    const array = SelectedPlayers.map(p=>p.id);
    useEffect(()=>{
        if(array.length)
        setselected(array.includes(Player.id));
    },[array,Player])
    const onClickHandle = ()=>{
        if(selected){
            removePlayerFromSquad(Player)
            setselected(!selected)
        }
        else{
            addPlayerToSquad(Player);
            setselected(!selected)
        }
    };
    const team = Team.A.includes(Player);
    return (
        <Card select={selected} team={team} onClick={onClickHandle}>
            <Text>Player:{Player.name}</Text>
            <Text>{Player.role}</Text>
            <Text>Team:{Player.team_name}</Text>
            {/* <Image src={Player.team_logo}/> */}
            <Text>{Player.event_total_points}</Text>
            <Text>{Player.event_player_credit}</Text>
        </Card>
    )
}

export default PlayersCard;
