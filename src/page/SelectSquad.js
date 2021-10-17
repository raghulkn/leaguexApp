import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import DisplayPlayers from '../components/DisplayPlayers';

const SelectSquad = () => {
    const {squadno} = useParams();
    const matchsquad = useSelector(props=>props.matchsquad)
    const matchplayers = useSelector(props=>props.matchplayers)
    const SelectedPlayers = matchsquad[squadno];

    return (
        <>
            <DisplayPlayers AllPlayers={matchplayers} EventId={squadno} SelectedPlayers={SelectedPlayers}/>
        </>
    )
}

export default SelectSquad;
