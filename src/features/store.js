import { configureStore }from "@reduxjs/toolkit";

import matchidSlice from "./Slice/matchIdSlice";
import matchplayersSlice from "./Slice/matchplayersSlice";
import matchsquadSlice from "./Slice/matchsquadSlice";
import upcomingleagueSlice from "./Slice/upcomingleagueSlice";


export default configureStore({
    reducer:{
        upcomingleague: upcomingleagueSlice,
        matchid: matchidSlice,
        matchsquad: matchsquadSlice,
        matchplayers:matchplayersSlice
    }
})