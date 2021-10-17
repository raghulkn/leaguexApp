import { createSlice } from "@reduxjs/toolkit";

const matchsquadinitialState = [];
export const matchsquadSlice = createSlice({
    name:'matchsquad',
    initialState:matchsquadinitialState,
    reducers:{
        matchsquad: (state,payload)=>{
            const value = payload.payload.value;
            console.log(value)
            return value;
        },
        setsquad:(state,payload)=>{
            const value = payload.payload.value;
            state = state.push(value)
        }
    }
})
export const { matchsquad,setsquad } = matchsquadSlice.actions

export const getmatchsquad= (matchid)=>async(dispatch)=>{
    const data = await fetch(`http://15.206.110.130:5001/squad?match_id=${matchid}`,{
        headers:{
            "x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQsIm1vYmlsZV9udW1iZXIiOiI4ODg5OTEyMzQ1IiwiaXNUZW1wVXNlciI6ZmFsc2UsImVtYWlsIjoicmFodWwyMDIwQGdtYWlsLmNvbSIsImlhdCI6MTYzMzkzMDYzMywiZXhwIjoxMDI3MzkzMDYzMywiYXVkIjoiNzQiLCJpc3MiOiJMZWFndWUgWCJ9.tbcot5Yetzgp7Ubak0MFLDyTcL6jT_WWqk9cTPGHbK8"
        }}).then(res=>res.json()).then(data=>data).catch(err=>console.error(err.message));

    dispatch(matchsquad({value:data}))
}
export const setmatchsquad= (payload)=>async(dispatch)=>{
    const data = await fetch(`http://15.206.110.130:5001/squad`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQsIm1vYmlsZV9udW1iZXIiOiI4ODg5OTEyMzQ1IiwiaXNUZW1wVXNlciI6ZmFsc2UsImVtYWlsIjoicmFodWwyMDIwQGdtYWlsLmNvbSIsImlhdCI6MTYzMzkzMDYzMywiZXhwIjoxMDI3MzkzMDYzMywiYXVkIjoiNzQiLCJpc3MiOiJMZWFndWUgWCJ9.tbcot5Yetzgp7Ubak0MFLDyTcL6jT_WWqk9cTPGHbK8"
        },
        body:JSON.stringify(payload)
    }).then(res=>res.json()).then(data=>data).catch(err=>console.error(err.message));
    console.log(data);
    dispatch(setsquad({value:data}))
}

export default matchsquadSlice.reducer;