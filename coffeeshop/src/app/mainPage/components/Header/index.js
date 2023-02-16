import { Grid, Typography } from "@mui/material";
import { BeansLogo } from "../../../icons/BeansLogo";



export const LogoText = () => {
     return (
          <Grid container item direction={"row"} alignItems={'flex-end'}>
               <Grid item >
                    <BeansLogo />
               </Grid>
               <Block text={'Coffee house'} color={'#FFFFFF'}/>
          </Grid>
     );
};

export const Block = ({onClickHandler, text}) => {
    return(
        <Grid item onClick={onClickHandler}  sx={{ cursor: "pointer" }}>
        <Typography fontFamily='Merienda' color='white'>
             {text}
        </Typography>
   </Grid>
    )
}