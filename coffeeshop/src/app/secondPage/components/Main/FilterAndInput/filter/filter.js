import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const FilterBox = (props) => {
     const buttonData = [
          { name: "Kenya", label: "Kenya" },
          { name: "Brasil", label: "Brasil" },
          { name: "Columbia", label: "Columbia" },
          { name: "Remove", label: "All" },
     ];

     const [selectedFilter, setSelectedFilter] = useState("Remove");

     const handleChangeSelect = (name) => {
          setSelectedFilter(name);
     };

     useEffect(() => {
          props.handleFilter(selectedFilter);
     }, [selectedFilter]);

     const buttons = buttonData.map(({ name, label}) => {
          return (
               <Grid item>
                    <Grid
                         container
                         item
                         sx={{
                              borderRadius: "8px",
                              width: "75px",
                              height: "30px",
                              boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.25)",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                              "&:hover": {
                                   boxShadow: 1,
                                   color: "secondary.main",
                              },
                         }}
                         key={name}
                         onClick={() => handleChangeSelect(name)}>
    
                                   <Typography
                                        sx={{
                                             fontFamily: "Merienda",
                                             color: "000000",
                                             fontSize: name === selectedFilter ?  "16px" : "14px",
                                        }}>
                                        {label}
                                   </Typography>
                    </Grid>
               </Grid>
          );
     });

     return (
          <Grid container item direction={"row"} justifyContent={"center"} columnSpacing={4}>
               <Grid item>
                    <Typography fontFamily={"Merienda"} fontSize={"18px"}>
                         Or filter
                    </Typography>
               </Grid>
               <Grid item>
                    <Grid container columnSpacing={1}>
                         {buttons}
                    </Grid>
               </Grid>
          </Grid>
     );
};


