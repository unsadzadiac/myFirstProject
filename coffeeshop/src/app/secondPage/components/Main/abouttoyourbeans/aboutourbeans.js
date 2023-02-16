import { Grid, Typography} from "@mui/material";
import {BeansLogoWithDelimitersBlack} from "../../../../icons/BeansLogoWithDelimitersBlack";


export const AboutOurBeans = () => {
    return(
    <Grid item sx={{
       textAlign: 'center',
       height: '80px',

       
    }}>
                <Typography color='#000000' fontFamily='Merienda' mt={'10px'}  fontSize='25px'>
                    About our beans
                </Typography>
                <BeansLogoWithDelimitersBlack/>
     </Grid>
 )
}
