import React,{useState} from "react";
import { Box, Grid, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchTextField} from "../../App.Styles";


export default function SearchInput({onSearch}) {
    const [input, setInput] = useState("");

    const handleInputChange  = (event) => {
      setInput(event.target.value);

    };
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("search clicked");
      onSearch(input);
    };

    return (
        <div>
              <Box sx={{ pt: 4, pb: 3, mt: 3, mb: 3 }}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <form onSubmit={handleSubmit}>
                  <SearchTextField
                    id="outlined-basic"
                    label="English - Blin"
                    variant="outlined"
                    value={input}
                    onChange={handleInputChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            type="submit"
                            aria-label="search"
                            // onClick={handleSubmit}
                          >
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  </form>
                </Grid>
              </Grid>
            </Box>
        
        </div>
    )
    }