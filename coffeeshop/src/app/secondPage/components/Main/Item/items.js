import { Grid } from "@mui/material";
import Item from "./item";

export const Items = (props) => {
     return (
          <>
               {props.items && (
                    <Grid
                         item
                         sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              flexWrap: "wrap",
                              marginLeft: "20%",
                              marginRight: "20%",
                         }}>
                         {props.items.map((el) => (
                              <Item key={el.id} item={el}   />
                         ))}
                    </Grid>
               )}
          </>
     );
};
