import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { useState } from "react";
import { MainAboutOurBeans } from "./Main/AboutOurBeans/main";
import { FilterBox } from "./Main/FilterAndInput/filter/filter";
import { Grid } from "@mui/material";
import { Items } from "./Main/Item/items";
import { Searchh } from "./Main/FilterAndInput/input/input";
import { initialData } from "./Main/constants";

export const SecondPage = () => {
     const [data, setData] = useState(initialData);


     const handleSearch = (str) => {
          if (str && str.length !== 0) {
               setData(data.filter((x) => x.title.toLowerCase().includes(str.toLowerCase())));
          } else {
               setData(initialData);
          }
     };

     const handleFilter = (filter) => {
          setData(filterPost(filter));
     };

     const filterPost = (filter) => {
          if (filter === "Remove") {
               return initialData;
          }

          return initialData.filter((item) => item.country === filter);
     };

     return (
          <>
               <Header title={'Our coffee'} />
               <MainAboutOurBeans />
               <Grid
                    container
                    sx={{ justifyContent: "center", marginTop: "60px", marginBottom: "60px" }}
                    columnSpacing={8}>
                    <Grid item>
                         <Searchh handleSearch={handleSearch} />
                    </Grid>
                    <Grid item>
                         <FilterBox handleFilter={handleFilter} />
                    </Grid>
               </Grid>
               <Items items={data}  />
               <Footer />
          </>
     );
};
