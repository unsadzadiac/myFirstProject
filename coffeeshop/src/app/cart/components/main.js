import { Grid, Typography } from "@mui/material";
import { cart } from "../../secondPage/components/Main/constants";
import { Items } from "./items";

const showCart = () => {
     let summa = 0;
     cart.forEach((x) => (summa += Number.parseFloat(x.price)));
     return (
          <>
               {cart.map((x) => (
                    <Items key={x.id} item={x}></Items>
               ))}
               <Grid container justifyContent="center">
                    <Typography color="white" fontFamily="Merienda" fontSize="30px">
                         Total: {summa}$
                    </Typography>
               </Grid>
          </>
     );
};
const showNothing = () => {
     return (
          <Grid container justifyContent={"center"}>
               <Typography color="white" fontFamily="Merienda" fontSize="30px">
                    No products
               </Typography>
          </Grid>
     );
};

export const Main = () => {
     return (
          <Grid container justifyContent="center">
               <Grid item sx={{ background: "black", width: "80%", marginTop: "100px" }}>
                    {cart.length > 0 ? showCart() : showNothing()}
               </Grid>
          </Grid>
     );
};
