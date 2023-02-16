import { Grid, Typography } from "@mui/material";


export const MainBlock = ({text, size}) => {
     return (
          <Grid item>
               <Typography fontFamily='Merienda' color='white' fontSize={size}>
                    {text}
               </Typography>  
          </Grid>
     );
};
