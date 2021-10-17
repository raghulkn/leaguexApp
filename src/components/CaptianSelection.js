import React,{useState} from 'react';
import styled from 'styled-components';
import { useSelector,useDispatch } from 'react-redux';
import { setmatchsquad } from '../features/Slice/matchsquadSlice';
import { useHistory } from 'react-router';

const Text = styled.p`
font-size:1em;
`
const TextDiv = styled.div`
width:50vw;
display:flex;
justify-content:space-around;
`
const CapButton = styled.div`
width:10vw;
background-color:${props=>props.Select?"green":"lightgreen"};
color:white;
padding:0.5em;
&:hover{
    background-color:gray;
}
`
const ViceButton = styled.div`
width:10vw;
background-color:${props=>props.Select?"blue":"lightblue"};
color:white;
padding:0.5em;
&:hover{
    background-color:gray;
}
`
const Button = styled.div`
background-color:black;
width:200px;
color:white;
padding:0.5em;
&:hover{
    background-color:gray;
}
`

const CaptianSelection = ({SelectedPlayers,EventId}) => {
    const [ViceCaptian, setViceCaptian] = useState(0);
    const [Captian, setCaptian] = useState(0);
    console.log(SelectedPlayers);
    const matchid = useSelector(props=>props.matchid);
    const dispatch = useDispatch()
    const history = useHistory();
    const onClickHandle=()=>{
        const squad = SelectedPlayers.map(p=>p.id)
        const payload = {
            "squad":squad,
            "captain_id":Captian,
            "vice_captain_id":ViceCaptian,
            "match_id":matchid.toString(),
            "event_id":parseInt(EventId)
        }
        dispatch(setmatchsquad(payload))
        history.push("/");
    }
    return (
        <div>
            {SelectedPlayers.map(Player=><TextDiv>
            <Text>{Player.name}</Text>
            <CapButton Select={Player.id===ViceCaptian} onClick={()=>setViceCaptian(Player.id)}>VICECAPTIAN</CapButton>
            <ViceButton Select={Player.id===Captian} onClick={()=>setCaptian(Player.id)}>CAPTIAN</ViceButton>
            </TextDiv>)}
            <Button onClick={onClickHandle}>Submit</Button>
        </div>
    )
}

export default CaptianSelection
