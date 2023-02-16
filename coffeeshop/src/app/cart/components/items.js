import { Grid, Typography } from "@mui/material";
import card from "../../images/81tGmkXdGLL.jpg";

export const Items = (props) => {
     return (
          <Grid container justifyContent="center" padding="20px">
               <Grid
                    item
                    container
                    sx={{
                         borderTop: '1px solid white',
                         borderBottom:'1px solid white',
                         height: "200px",
                         width: "550px",
                         
                    }}>
                    <Grid
                         container
                         item
                         justifyContent="center"
                         direction="row"
                         columnSpacing={5}
                         alignItems="center">
                         <Grid item>
                              <Grid
                                   container
                                   item
                                   sx={{
                                        width: "150px",
                                        height: "150px",
                                        backgroundColor: "rgba(255, 255, 255, 0)",
                                        padding: "0px",
                                        overflow: "hidden",
                                        position: "relative",
                                   }}>
                                   <img
                                        src={card}
                                        style={{
                                             width: "100%",
                                             height: "100%",
                                             objectFit: "cover",
                                             position: "absolute",
                                             top: "0px",
                                             left: "0px",
                                        }}></img>
                              </Grid>
                         </Grid>
                         <Grid item>
                              <Grid
                                   container
                                   item
                                   direction="column"
                                   rowSpacing={1.5}
                                   alignItems="center">
                                   <Grid item>
                                        <Typography
                                             fontFamily="Merienda"
                                             fontSize="20px"
                                             color="white">
                                             {props.item.title}
                                        </Typography>
                                   </Grid>
                                   <Grid item>
                                        <Typography
                                             fontFamily="Merienda"
                                             fontSize="20px"
                                             color="white">
                                             {props.item.country}
                                        </Typography>
                                   </Grid>
                                   <Grid item>
                                        <Typography
                                             fontFamily="Merienda"
                                             fontSize="24px"
                                             color="white">
                                             {props.item.price}$
                                        </Typography>
                                   </Grid>
                              </Grid>
                         </Grid>
                    </Grid>
               </Grid>
          </Grid>
     );
};
