import { createSlice } from "@reduxjs/toolkit";

const matchIdinitialState = "";
export const matchidSlice = createSlice({
    name:'matchid',
    initialState:matchIdinitialState,
    reducers:{
        setMatchId: (state,payload)=>{
            const matchid = payload.payload.matchid;
            console.log(matchid)
            return matchid
        }
    }
})
export const { setMatchId } = matchidSlice.actions


export default matchidSlice.reducer;