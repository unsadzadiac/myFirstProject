import { Grid, InputBase, Typography } from "@mui/material";
import {useEffect, useState} from "react";

export const Searchh = (props) => {
    const [searchStr, setSearchStr] = useState('')

    const onInput = (str) => {
        setSearchStr(str.target.value)
    }

    useEffect(() => {
        props.handleSearch(searchStr)
    }, [searchStr])

    return (
        <Grid
            container
            item
            direction={"row"}
            justifyContent={"center"}
            spacing={3}>
            <Grid item>
                <Typography fontFamily={"Merienda"} fontSize={"18px"}>
                    Looking for
                </Typography>
            </Grid>
            <Grid item>
                <InputBase
                    value={searchStr}
                    onChange={onInput}
                    placeholder="start typing here..."
                    sx={{
                        height: "30px",
                        width: "180px",
                        boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.25)",
                        borderRadius: "5px",
                        fontFamily: "Merienda",
                        padding: "15px",
                    }}></InputBase>
            </Grid>
        </Grid>
    )
}


