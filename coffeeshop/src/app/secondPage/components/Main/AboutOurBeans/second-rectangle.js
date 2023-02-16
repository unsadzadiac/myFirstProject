import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import card from "../../../../images/girl-865304_1920.jpg"

const SecondRectangle = ({ children }) => {
     return (
          <Grid
               item
               sx={{
                    width: "272px",
                    height: "355px",
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    padding: "0px",
                    overflow: "hidden",
                    position: "relative",
               }}>
               {children}
          </Grid>
     );
};

const Img = styled("img")({
     width: "100%",
     height: "100%",
     objectFit: "cover",
     position: "absolute",
     top: "0px",
     left: "0px",
});

export const Image = () => {
   return(
      <SecondRectangle>
         <Img src={card}/>
      </SecondRectangle>
   )
}