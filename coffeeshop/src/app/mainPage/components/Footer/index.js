import {Grid, Typography} from "@mui/material";




export const BackgroundHeader = ({ children }) => {
    return (
         <Grid
              container
              item
              sx={{
                   width: "100%",
                   height: "150px",
                   padding: "0px",
                   overflow: "hidden",
                   position: "relative",
                   marginTop: "40.85px"
              }}>
              {children}
         </Grid>
    );
};


export const LogoText = ({beans}) => {
    return (
         <Grid container item direction={"row"} alignItems={'flex-end'}>
              <Grid item >
                   {beans}
              </Grid>
              <Block text={'Our coffee'}/>
         </Grid>
    );
};

export const Block = ({onClickHandler, text}) => {
    return(
        <Grid item onClick={onClickHandler} sx={{ cursor: "pointer" }}>
        <Typography fontFamily='Merienda'>
             {text}
        </Typography>
   </Grid>
    )
}