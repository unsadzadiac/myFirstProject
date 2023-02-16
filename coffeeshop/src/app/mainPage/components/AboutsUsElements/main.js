import { Grid } from "@mui/material";
import { AboutUs } from "./AboutUs";
import { AboutUsText } from "./AboutUsText";

export const AboutUsMain = () => {
     return (
          <Grid container direction="column" justifyContent="center" alignItems="center" rowSpacing={5} marginTop={'80px'}>
               <Grid item>
                    <AboutUs />
               </Grid>
               <Grid item>
                    <AboutUsText />
               </Grid>
          </Grid>
     );
};
