import { Grid } from "@mui/material";
import { BeansLogoWithDelimitersWhite } from "../../../icons/BeansLogoWithDelimitersWhite";

import { MainBlock } from ".";


export const MainText = () => {
     return (
       <Grid container  >
               <Grid
                    container
                    
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    textAlign="center"
                    rowSpacing={2}>
                    <Grid item>
                         <MainBlock text={'Everything You Love About Coffee'} size={"40px"} />
                         <BeansLogoWithDelimitersWhite />
                    </Grid>
                    <Grid item>
                         <MainBlock text={'We makes every day full of energy and taste'} size={"24px"} />
                    </Grid>
                    <Grid item>
                         <MainBlock text={'Want to try our beans?'} size={"24px"}  />
                    </Grid>
               </Grid>
               </Grid>
     );
};
