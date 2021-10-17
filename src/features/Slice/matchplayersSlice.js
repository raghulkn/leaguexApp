import { createSlice } from "@reduxjs/toolkit";

const matchplayersinitialState = [];
export const matchplayersSlice = createSlice({
    name:'matchplayers',
    initialState:matchplayersinitialState,
    reducers:{
        matchsquad: (state,payload)=>{
            const value = payload.payload.value;
            console.log(value)
            return value;
        }
    }
})
export const { matchsquad } = matchplayersSlice.actions

export const getmatchplayers= (matchid)=>async(dispatch)=>{
    const data = await fetch(`http://15.206.110.130:5001/squad/players?match_id=${matchid}`,{
        headers:{
            "x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQsIm1vYmlsZV9udW1iZXIiOiI4ODg5OTEyMzQ1IiwiaXNUZW1wVXNlciI6ZmFsc2UsImVtYWlsIjoicmFodWwyMDIwQGdtYWlsLmNvbSIsImlhdCI6MTYzMzkzMDYzMywiZXhwIjoxMDI3MzkzMDYzMywiYXVkIjoiNzQiLCJpc3MiOiJMZWFndWUgWCJ9.tbcot5Yetzgp7Ubak0MFLDyTcL6jT_WWqk9cTPGHbK8"
        }}).then(res=>res.json()).then(data=>data).catch(err=>console.error(err.message));

    dispatch(matchsquad({value:data}))
}

export default matchplayersSlice.reducer;