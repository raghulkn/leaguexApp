import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';
import PlayersCard from '../components/playerCard';
import {maxValidation} from '../services/validator';
import CaptianSelection from './CaptianSelection';
//import { useSelector } from 'react-redux';

const Catorgories = ["Wicket-Keeper","All-Rounder","Batsman","Bowler"]

const Link = styled.h4`
background-color:${props=>props.Select};
padding: 1em;
color:white;
`
const NavBar = styled.div`
width:100%;
display:flex;
justify-content:center;
`
const Tab = styled.div`
width:100%;
height:calc(100vh - 150px);
overflow-x:hidden;
overflow-y:auto;
white-space:nowrap;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Button = styled.div`
width:10vw;
height:5vh;
margin:0 auto;
background-color:black;
color:white;
position:absolute;
text-align:center;
bottom:100px;
right:50%;
font-size:1.5rem;
font-weight:800;
padding:0.5em;
&:hover{
    background-color:gray;
}
`
const Text = styled.p`
font-Size:1em;
color:gray;
`
const TextDiv = styled.div`
display:flex;
width:100%;
align-items:center;
justify-content:space-around;
`

const DisplayPlayers = ({AllPlayers,EventId}) => {

    const [Selected, setSelected] = useState('Wicket-Keeper');
    const [playerType,setplayerType] = useState({
        wk:[],
        ar:[],
        bowl:[],
        bat:[]
    })
    const [Team,setTeam] = useState({
        A:[],
        B:[]
    })
    useEffect(()=>{
        setplayerType({
            wk:AllPlayers.filter(player=>player.role==="Wicket-Keeper"),
            ar:AllPlayers.filter(player=>player.role==="All-Rounder"),
            bat:AllPlayers.filter(player=>player.role==="Batsman"),
            bowl:AllPlayers.filter(player=>player.role==="Bowler")
        });
        setTeam({
            A:AllPlayers.filter(player=>player.team_id===AllPlayers[0].team_id),
            B:AllPlayers.filter(player=>player.team_id!==AllPlayers[0].team_id)
        })
    },[AllPlayers,setplayerType]);
    const [DisplayPlayer,setDisplayPlayer] = useState([]);
    const [SelectedPlayers,setSelectedPlayers] = useState([]);
    const [Credit,setCredit] = useState(100);
    const [Proceed,setProceed] = useState(false)

    // const mysquad = useSelector(props=>props.matchsquad[EventId]);
    
    // console.log(mysquad)
    // useEffect(()=>{
    //     console.log("mysquad",mysquad);
    //     if(mysquad.length){
    //         setSelectedPlayers(mysquad.squad.map(p=>p))
    //         setCredit(100-mysquad.squad.reduce((p,c)=>c.event_player_credit+p,0))
    //     }
    // },[mysquad])

    useEffect(()=>{
        setDisplayPlayer(playerType.wk);
    },[playerType,setDisplayPlayer]);
    const onClickHandle = (e)=>{
        const Text = e.target.textContent
        if(SelectedPlayers.length > 0)
        {
            if(minValidation[Selected](SelectedPlayers))
        {
            setSelected(Text)
            if(Text === "All-Rounder")
            setDisplayPlayer(playerType.ar)
            if(Text === "Batsman")
            setDisplayPlayer(playerType.bat)
            if(Text === "Bowler")
            setDisplayPlayer(playerType.bowl)
            if(Text === "Wicket-Keeper")
            setDisplayPlayer(playerType.wk)
        }
        if(!minValidation[Selected](SelectedPlayers)){
            alert('select valid number of players')
        }
    }
    }
    const minValidation = {
        "Wicket-Keeper":(SelectedPlayers)=>{
            if(SelectedPlayers.filter(p=>p.role==="Wicket-Keeper").length>=1)
                return true;
            return false;
        },
        "All-Rounder":()=>{
            return true;
        },
        "Bowler":(SelectedPlayers)=>{
           if(SelectedPlayers.filter(p=>p.role==="Bowler").length>=3)
                return true;
            return false;
        },
        "Batsman":(SelectedPlayers)=>{
            if(SelectedPlayers.filter(p=>p.role==="Batsman").length>=3)
                return true;
            return false;
        }
    }
    
    const addPlayerToSquad= (Player)=>{
        const Bowler = SelectedPlayers.filter(p=>p.role==="Bowler").length
        const AllRounder = SelectedPlayers.filter(p=>p.role==="All-Rounder").length
        const WicketKeeper = SelectedPlayers.filter(p=>p.role==="Wicket-Keeper").length
        const Batsman = SelectedPlayers.filter(p=>p.role==="Batsman").length

        const TeamA = SelectedPlayers.filter(p=>p.team_id===SelectedPlayers[0].team_id);
        const TeamB = SelectedPlayers.filter(p=>p.team_id!==SelectedPlayers[0].team_id);
        if (
            TeamA[0] &&
            TeamA[0].team_name === Player.team_name &&
            SelectedPlayers.length - TeamB.length >= 7
          ) {
            alert("can only select 7 players from the team");
          } else if (
            TeamB[0] &&
            TeamB[0].team_name === Player.team_name &&
            SelectedPlayers.length - TeamA.length >= 7
          ) {
            alert("can only select 7 players from the team");
          }
    if(SelectedPlayers.length<11 && Credit-Player.event_player_credit>0){
        const valid = maxValidation[Player.role](SelectedPlayers.length,Bowler,AllRounder,WicketKeeper,Batsman);
        if(valid){
            setSelectedPlayers(SelectedPlayers=>[...SelectedPlayers,Player]);
            setCredit(Credit-Player.event_player_credit);
        }
    }
    }
    const removePlayerFromSquad = (Player)=>{
        setSelectedPlayers(SelectedPlayers.filter(pid=>pid!==Player))
        setCredit(Credit+Player.event_player_credit);
    }
    return (
        <div>
            {!Proceed?(
                <div>
                    <TextDiv>
                        <Text>TotalPlayer :{SelectedPlayers.length}/11</Text>
                        <Text>Credit :{Credit}/100</Text>
                        <Text>Wicket-Keeper(1-5),All-Rounder(0-4),Batsman(3-7),Bowler(3-7) Team(player 7)</Text>
                    </TextDiv>
                    <NavBar>
                        {Catorgories.map(Roles=><Link key={Roles} Select={Roles===Selected?"green":"lightgreen"} onClick={onClickHandle}>{Roles}</Link>)}
                    </NavBar>
                    <Tab>
                        {DisplayPlayer.map(Player=><PlayersCard Team={Team} SelectedPlayers={SelectedPlayers} removePlayerFromSquad={removePlayerFromSquad} addPlayerToSquad={addPlayerToSquad} key={Player.id} Player={Player}/>)}
                    </Tab>
                    {SelectedPlayers.length===11&&<Button onClick={()=>setProceed(true)}>PROCEED</Button>}
                </div>
            ):<CaptianSelection SelectedPlayers={SelectedPlayers} EventId={EventId}/>}
        </div>
    )
}


export default DisplayPlayers;
