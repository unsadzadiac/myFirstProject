import { Grid, Typography } from "@mui/material";
import { styleelements } from "./style";
export const AboutUsText = () => {
     return (
          <Grid container item {...styleelements.stylegrid}>
               <Grid item>
                    <Typography {...styleelements.style}>{styleelements.firsttext}</Typography>
               </Grid>
               <Grid item>
                    <Typography {...styleelements.style}>{styleelements.secondtext}</Typography>
               </Grid>
          </Grid>
     );
};
