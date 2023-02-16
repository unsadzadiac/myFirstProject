import { Grid } from "@mui/material";


export const BackgroundHeader = ({ children }) => {
     return (
          <Grid
               container
               item
               sx={{
                    width: "100%",
                    height: "640px",
                    padding: "0px",
                    overflow: "hidden",
                    position: "relative",
               }}>
               {children}
          </Grid>
     );
};
