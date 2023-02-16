import { Grid, Typography } from "@mui/material";
import { BeansLogoWithDelimitersBlack } from "../../../../icons/BeansLogoWithDelimitersBlack";

export const Text = () => {
     return (
          <Grid
               container
               item
               alignItems={'center'}
               justifyContent={'center'}
               sx={{ direction: "column"  }}>
               <Grid
                    container
                    item
                    direction={"column"}
                    alignItems={'center'}
                    >
                    <Grid item>
                         <Typography fontFamily={"Merienda"} fontSize={"24px"}>
                              About our goods
                         </Typography>
                    </Grid>
                    <Grid item>
                         <BeansLogoWithDelimitersBlack />
                    </Grid>
               </Grid>
               <Grid
                    container
                    item
                    rowSpacing={4}
                    sx={{
                         width: "350px",
                         height: "100%",
                         direction: "column",
                         textAlign: "center",
                    }}>
                    <Grid item>
                         <TypographyWithStyle
                              text={
                                   "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible."
                              }
                         />
                    </Grid>
                    <Grid item>
                         <TypographyWithStyle
                              text={
                                   "Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improvean. Last ask him cold feel met spot shy want. Children me laughing we  prospect answered followed. At it went is song that held help face."
                              }
                         />
                    </Grid>
               </Grid>
          </Grid>
     );
};

const TypographyWithStyle = ({ text }) => {
     return (
          <Typography fontFamily={"Merienda"} fontSize={"14px"}>
               {text}
          </Typography>
     );
};
