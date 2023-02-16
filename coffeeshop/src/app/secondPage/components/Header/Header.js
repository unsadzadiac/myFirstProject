import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LogoText } from ".";
import { Block } from ".";
import bg from "../../../images/coffee-shop-1209863_1920.png";


export const Header = ({title}) => {
     let navigate = useNavigate();

     const navigateFirstPage = () => {
          navigate("/");
     };
     const navigateThirdPage = () => {
          navigate("/for_your_pleasure");
     };
     const navigateSecondPage = () => {
          navigate("/our_coffee");
     };
     const navigateCart = () => {
          navigate("/cart");
     };

     return (
          <Grid
               container
               item
               sx={{
                    width: "100%",
                    height: "260px",
                    padding: "0px",
                    overflow: "hidden",
                    position: "relative",
               }}>
               <Grid>
                    <Grid
                         container
                         item
                         columnSpacing={6}
                         sx={{
                              direction: "row",
                              alignItems: "flex-end",
                              marginTop: "41px",
                              marginLeft: "165px",
                         }}>
                         <Grid item sx={{ cursor: "pointer" }}>
                              <LogoText
                                   onClickHandler={navigateFirstPage}
                                   text={'Coffee house'}
                                   
                              />
                         </Grid>
                         <Block
                              text={'Our coffee'}
                              onClickHandler={navigateSecondPage}
                              
                         />
                         <Block
                              onClickHandler={navigateThirdPage}
                              text={'For your pleasure'}
                              
                         />
                         <Block onClickHandler={navigateCart}
                          text={'Cart'}/>

                    </Grid>
               </Grid>
               <Grid
                    container
                    item
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"flex-end"}
                    marginBottom="84px">
                    <Typography sx={{ fontSize: "36px", color: "#FFFFFF", fontFamily: "Merienda" }}>
                         {title}
                    </Typography>
               </Grid>
               <img
                    src={bg}
                    style={{
                         width: "100%",
                         height: "100%",
                         objectFit: "cover",
                         position: "absolute",
                         top: "0px",
                         left: "0px",
                         zIndex: "-99999",
                    }}></img>
          </Grid>
     );
};
