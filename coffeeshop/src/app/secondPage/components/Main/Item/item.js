import { Grid, Typography } from "@mui/material";
import card from "../../../../images/71qBQnpQFYL.png";
import { useNavigate } from "react-router-dom";

const Item = (props) => {
     let navigate = useNavigate();

     const navigateItemsPage = (id) => {
          navigate("/item_page/" + id);
     };
     return (
          <Grid
          
               onClick={() => navigateItemsPage(props.item.id)}
               container
               item
               sx={{
                    width: "220px",
                    height: "260px",
                    marginBottom: "60px",
                    marginRight: "35px",
                    marginLeft: "35px",
                    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.25)",
                    cursor: "pointer",
                    "&:hover": {
                         transform: "scale(1.1)",
                    },
               }}>
               <Grid
                    container
                    item
                    direction={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    rowSpacing={1}>
                    <Grid item>
                         <img src={card}></img>
                    </Grid>
                    <Grid item>
                         <Typography fontFamily={"Merienda"} fontSize={"14px"}>
                              {props.item.title}
                         </Typography>
                    </Grid>
               </Grid>
               <Grid
                    container
                    item
                    direction={"column"}
                    alignItems={"flex-end"}
                    width="92%"
                    rowSpacing={2}>
                    <Grid item>
                         <Typography fontFamily={"Merienda"} fontSize={"14px"}>
                              {props.item.country}
                         </Typography>
                    </Grid>
                    <Grid item>
                         <Typography fontFamily="Merienda" fontSize="14px">
                              {props.item.price}$
                         </Typography>
                    </Grid>
               </Grid>
          </Grid>
     );
};

export default Item;
