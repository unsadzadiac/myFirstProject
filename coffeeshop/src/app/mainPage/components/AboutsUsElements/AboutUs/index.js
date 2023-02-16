import { Grid, Typography } from "@mui/material";
import { BeansLogoWithDelimitersBlack } from "../../../../icons/BeansLogoWithDelimitersBlack";

export const AboutUs = () => {
     return (
          <Grid container item direction="column" justifyContent="center" alignItems="center">
               <Grid item>
                    <Typography fontFamily="Merienda, cursive">About us</Typography>
               </Grid>
               <Grid item>
                    <BeansLogoWithDelimitersBlack />
               </Grid>
          </Grid>
     );
};
