import React,{useState} from "react";
import { Box, Grid, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchTextField} from "../../App.Styles";


export default function SearchForm() {
    const [searchText, setSearchText] = useState("");

    const searchTextChangeHandler = (event) => {
      console.log("text on change first- ", event.target.value);
      setSearchText(event.target.value);
      console.log("text on change - ", searchText);
  };
  const handleSearchClick = (event) => {
    setSearchText((prevState) => {
      console.log("prev state onclick - ", prevState);
      return {...prevState, searchText: event.target.value};
    });
  };
    return (
        <div>
              <Box sx={{ pt: 4, pb: 3, mt: 3, mb: 3 }}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <SearchTextField
                    onChange={searchTextChangeHandler}
                    id="outlined-basic"
                    label="English - Blin"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="search"
                            onClick={handleSearchClick}
                          >
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
        
        </div>
    )
    }