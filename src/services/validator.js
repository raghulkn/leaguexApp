export const maxValidation = {
    "Bowler":function (Player,Bowler,AllRounder,WicketKeeper,Batsman){
        if(Bowler>=7||Player-WicketKeeper>=10||Player-Batsman>=8)
            return false;
        return true;
    },
    "Batsman":function (Player,Bowler,AllRounder,WicketKeeper,Batsman){
        if(Batsman>=7||Player-WicketKeeper>=10||Player-Bowler>=8)
            return false;
        return true;
    },
    "All-Rounder":function (Player,Bowler,AllRounder,WicketKeeper,Batsman){
        if(AllRounder>=4||Player-WicketKeeper>=10||Player-Bowler>=8||Player-Batsman>=8)
            return false;
        return true
    },
    "Wicket-Keeper":function (Player,Bowler,AllRounder,WicketKeeper,Batsman){
        if(WicketKeeper>=4||Player-Batsman>=8||Player-Bowler>=8)
            return false;
        return true;
    }
};

