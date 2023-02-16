import { Grid } from "@mui/material";
import { BeansLogoWithDelimitersBlack } from "../../../icons/BeansLogoWithDelimitersBlack";
import { useNavigate } from "react-router-dom";
import { BackgroundHeader } from ".";
import { Block } from ".";


export const Footer = () => {
     let navigate = useNavigate();

     const navigateThirdPage = () => {
          navigate("/for_your_pleasure");
     };
     const navigateFirstPage = () => {
          navigate("/");
     };
     const navigateSecondPage = () => {
          navigate("/our_coffee");
     }
     return (
          <BackgroundHeader>
               <Grid
                    container
                    item
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    rowSpacing={3}>
                    <Grid
                         container
                         item
                         direction={"row"}
                         alignItems="flex-end"
                         justifyContent={"center"}
                         columnSpacing={3}>
                         <Block onClickHandler={navigateFirstPage} text={'Coffee house'} />
                         <Block text={'Our coffee'} onClickHandler={navigateSecondPage} />
                         <Block text={'For your pleasure'} onClickHandler={navigateThirdPage} />
                    </Grid>
                    <Grid item>
                         <BeansLogoWithDelimitersBlack />
                    </Grid>
               </Grid>
          </BackgroundHeader>
     );
};
