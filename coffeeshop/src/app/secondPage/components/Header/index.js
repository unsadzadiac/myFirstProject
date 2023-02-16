import { Grid, Typography } from "@mui/material";
import { BeansLogo } from "../../../icons/BeansLogo";


export const LogoText = ({ onClickHandler, text , color }) => {
     return (
          <Grid container item direction={"row"} alignItems={"flex-end"}>
               <Grid item>
                    <BeansLogo />
               </Grid>
               <Grid item onClick={onClickHandler} sx={{ cursor: "pointer" }}>
                    <Typography fontFamily='Merienda' color='white'>
                         {text}
                    </Typography>
               </Grid>
          </Grid>
     );
};

export const Block = ({ onClickHandler, text, color }) => {
     return (
          <Grid item onClick={onClickHandler} sx={{ cursor: "pointer" }}>
               <Typography fontFamily='Merienda' color='white'>
                    {text}
               </Typography>
          </Grid>
     );
};
