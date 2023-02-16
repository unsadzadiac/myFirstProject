import { Grid, Typography } from "@mui/material";
import { BeansLogoWithDelimitersBlack } from "../../../icons/BeansLogoWithDelimitersBlack";
import { useNavigate } from "react-router-dom";
import { BackgroundHeader, LogoText } from ".";
import { Block } from ".";
import { BeansLogoBlack } from "../../../icons/BeansLogoBlack";

export const Footer = () => {
     let navigate = useNavigate();

     const navigateSecondPage = () => {
          navigate("/our_coffee");
     };
     const navigateThirdPage = () => {
          navigate("/for_your_pleasure");
     };
     return (
          <BackgroundHeader>
               <Grid container item direction={'column'} justifyContent={'center'} alignItems={'center'} rowSpacing={3} >
                    <Grid container item direction={"row"} alignItems="flex-end" justifyContent={'center'} columnSpacing={3}>
                         <Grid item sx={{ cursor: "pointer" }}>
                              <LogoText beans={<BeansLogoBlack/>}/>
                         </Grid>
                         <Block
                              onClickHandler={navigateSecondPage}
                              text={'Our coffee'}
                         />
                         <Block onClickHandler={navigateThirdPage} text={'For your pleasure'} />
                    </Grid>
                    <Grid item>
                         <BeansLogoWithDelimitersBlack />
                    </Grid>
               </Grid>
          </BackgroundHeader>
     );
};
