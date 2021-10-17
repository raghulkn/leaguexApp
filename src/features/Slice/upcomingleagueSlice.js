import { createSlice } from "@reduxjs/toolkit";

const upcomingleagueinitialState = [];
export const upcomingleagueSlice = createSlice({
    name:'upcomingleague',
    initialState:upcomingleagueinitialState,
    reducers:{
        UpcomingLeague: (state,payload)=>{
            const value = payload.payload.value;
            console.log(value)
            return value;
        }
    }
})
export const { UpcomingLeague } = upcomingleagueSlice.actions

export const getUpcomingLeague= ()=>async(dispatch)=>{
    const data = await fetch('http://15.206.110.130:5001/matches/upcoming-matches',{
        headers:{
            "x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQsIm1vYmlsZV9udW1iZXIiOiI4ODg5OTEyMzQ1IiwiaXNUZW1wVXNlciI6ZmFsc2UsImVtYWlsIjoicmFodWwyMDIwQGdtYWlsLmNvbSIsImlhdCI6MTYzMzkzMDYzMywiZXhwIjoxMDI3MzkzMDYzMywiYXVkIjoiNzQiLCJpc3MiOiJMZWFndWUgWCJ9.tbcot5Yetzgp7Ubak0MFLDyTcL6jT_WWqk9cTPGHbK8"
        }}).then(res=>res.json()).then(data=>data.matches.cricket);

    dispatch(UpcomingLeague({value:data}))
}

export default upcomingleagueSlice.reducer;