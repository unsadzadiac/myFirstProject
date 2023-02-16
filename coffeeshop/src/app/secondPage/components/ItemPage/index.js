import { Grid } from "@mui/material";


export const SecondRectangle = ({ children }) => {
    return (
         <Grid
              item
              sx={{
                   width: "392px",
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



