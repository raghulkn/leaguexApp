import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { getmatchplayers } from '../features/Slice/matchplayersSlice';



const Link = styled.div`
width:30vw;
padding:1em;
background-color:blue;
text-align:center;
margin:0.3em 0;
&:hover{
    background-color:lightblue;
}
`
const AddLink = styled.div`
width:30vw;
padding:1em;
margin:0.2em 0;
text-align:center;
background-color:green;
&:hover{
    background-color:lightgreen;
}
`
const Title = styled.h2`
background-image:linear-gradient(to right,red,blue);
width:100%;
text-align:center;
color:white;
padding:0.2em 0;
`
const Container = styled.div`
width:100%;
margin:auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

const CrudSquad = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const matchid = useSelector(props=>props.matchid);
    const matchsquad = useSelector(props=>props.matchsquad)

    const onClickHandle = (e)=>{
        history.push(`/selectsquad/${e.target.id}`)
        dispatch(getmatchplayers(matchid))
    }
    const onSubmitHandle =(e)=>{
        history.push(`/selectsquad/${matchsquad.length+1}`)
        dispatch(getmatchplayers(matchid))
    }
    
    return (
        <>
            <Title>Crud Squad</Title>
            <Container>
                {matchsquad.length&&matchsquad.map((m,i)=><Link key={i} id={i} onClick={onClickHandle}>Squad {i+1}</Link>)}
                {matchsquad.length<10&&<AddLink onClick={onSubmitHandle}>Add new Squad</AddLink>}
            </Container>
        </>
    )
}

export default CrudSquad
