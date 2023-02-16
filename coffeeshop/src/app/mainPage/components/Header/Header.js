import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { LogoText } from ".";
import { Block } from ".";
import bg from "../../../images/zerna.jpg";

export const Header = () => {
     let navigate = useNavigate();

     const navigateSecondPage = () => {
          navigate("/our_coffee");
     };
     const navigateThirdPage = () => {
          navigate("/for_your_pleasure");
     };
     const navigateCart = () => {
          navigate("/cart");
     };

     return (
          <>
               <Grid container height='40px'>
                    <Grid
                         container
                         item
                         columnSpacing={6}
                         sx={{
                              direction: "row",
                              alignItems: "flex-end",
                              marginTop: "40px",
                              marginLeft: "165px",
                              
                         }}>
                         <Grid item sx={{ cursor: "pointer" }}>
                              <LogoText />
                         </Grid>
                         <Block onClickHandler={navigateSecondPage} text={"Our coffee"} />
                         <Block onClickHandler={navigateThirdPage} text={"For your pleasure"} />
                         <Block onClickHandler={navigateCart} text={"Cart"} />
                    </Grid>
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
          </>
     );
};
