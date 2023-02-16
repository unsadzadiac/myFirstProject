import React from "react";
import Carousel from "react-material-ui-carousel";
import slider from "../../../../helper/slider.json";
import { Grid, Typography } from "@mui/material";

function Example() {
     return (
          <Carousel navButtonsAlwaysVisible sx={{ marginTop: "80px", background: "black" }}>
               {slider.map((item) => (
                    <Grid container direction="column" rowSpacing={2} height="300px" justifyContent='center'>
                         <Grid container item justifyContent="center">
                              <Typography
                                   sx={{
                                        color: "white",
                                        fontFamily: "Merienda",
                                        fontSize: "28px",
                                   }}>
                                   {item.title}
                              </Typography>
                         </Grid>
                         <Grid container item justifyContent="center" alignItems="center">
                              <Typography
                                   sx={{
                                        color: "white",
                                        fontFamily: "Merienda",
                                        fontSize: "22px",
                                   }}>
                                   {item.aftor}
                              </Typography>
                         </Grid>
                    </Grid>
               ))}
          </Carousel>
     );
}
export default Example;
