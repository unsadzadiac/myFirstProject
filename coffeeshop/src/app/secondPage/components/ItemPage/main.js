import { BeansLogoWithDelimitersBlack } from "../../../icons/BeansLogoWithDelimitersBlack";
import { SecondRectangle } from ".";
import { cart, initialData } from "../Main/constants";
import card from "../../../images/81tGmkXdGLL.jpg";

import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { styled } from "@mui/system";
export const Main = () => {
     let params = useParams();
     const [element, setElement] = useState();
     useEffect(() => {
          setElement(initialData.find((e) => e.id === Number(params.id)));
     }, [params]);

     const Img = styled("img")({
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: "0px",
          left: "0px",
     });

     let isInArray = false;
     return (
          <Grid
               marginTop={"70px"}
               marginBottom={"82px"}
               container
               direction={"row"}
               justifyContent={"center"}
               alignItems={"center"}
               columnSpacing={10}>
               <Grid item>
                    <SecondRectangle>
                         <Img src={card} />
                    </SecondRectangle>
               </Grid>
               <Grid item>
                    <Grid container item direction={"column"} rowSpacing={2}>
                         <Grid container item>
                              <Grid
                                   item
                                   container
                                   direction={"column"}
                                   justifyContent={"center"}
                                   alignItems={"center"}>
                                   <Grid item>
                                        <Typography fontFamily={"Merienda"} fontSize={"24px"}>
                                             About it
                                        </Typography>
                                   </Grid>
                                   <Grid item>
                                        <BeansLogoWithDelimitersBlack />
                                   </Grid>
                              </Grid>
                         </Grid>
                         <Grid container item direction={"column"} rowSpacing={4}>
                              <Grid item>
                                   <Typography fontFamily={"Merienda"} fontSize={"14px"}>
                                        <b>Country:</b> {element?.country ?? ""}
                                   </Typography>
                              </Grid>

                              <Grid item width={"500px"}>
                                   <Typography fontFamily={"Merienda"} fontSize={"14px"}>
                                        <b>Description:</b> {element?.Description ?? ""}
                                   </Typography>
                              </Grid>

                              <Grid item>
                                   <Grid container
                                        onClick={() => {
                                             cart.forEach((x) => {
                                                  if (x.id === element.id) isInArray = true;
                                             });
                                             if (!isInArray) cart.push(element);
                                        }}
                                        sx={{
                                             fontWeight: 0,
                                             color: "#000000",
                                             background: "#ffffff",
                                             padding: "5px 50px",
                                             border: "solid #000000 2px",
                                             boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
                                             borderRadius: "1px",
                                             transition: "1000ms",
                                             transform: 'translateY(0)',
                                             textTransform: "uppercase",
                                             justifyContent:'center',
                                             cursor:'pointer',

                                             "&:hover": {
                                                  transition: "1000ms",
                                                  padding: "10px 44px",
                                                  transform: "translateY(-0px)",
                                                  background: " #000000",
                                                  color: "#ffffff",
                                                  border: "solid 2px #ffffff",
                                             },
                                        }}>
                                        <Typography fontFamily={"Merienda"} fontSize={"18px"}>
                                             <b>Buy:</b> {element?.price ?? ""}$
                                        </Typography>
                                   </Grid>
                              </Grid>
                         </Grid>
                    </Grid>
               </Grid>
          </Grid>
     );
};
