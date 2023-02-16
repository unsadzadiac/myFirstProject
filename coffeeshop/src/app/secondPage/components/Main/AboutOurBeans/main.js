import { Grid } from "@mui/material";
import { Line } from "./line";
import { Image } from "./second-rectangle";
import { Text } from "./text";

export const MainAboutOurBeans = () => {
     return (
          <Grid container justifyContent={'center'} rowSpacing={6} >
               <Grid
                    container
                    item
                    direction={"row"}
                    alignItems={"center"}
                    marginTop={"70px"}
                    marginLeft={"10px"}
                    justifyContent={"center"}>
                    <Grid>
                         <Image />
                    </Grid>
                    <Grid>
                         <Text />
                    </Grid>
               </Grid>
               <Grid item>
                    <Line/>
               </Grid>
          </Grid>
     );
};
