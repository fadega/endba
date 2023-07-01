import React,{useState} from 'react';
import { Typography,Button, IconButton,InputAdornment, Box, TextField, Card, CardContent, CardMedia,CardActions,AppBar,CssBaseline,Grid, Toolbar,Container } from '@mui/material';
import { PhotoCamera} from '@mui/icons-material';
import TranslateIcon from '@mui/icons-material/Translate';
import SearchIcon from '@mui/icons-material/Search';
//import { ThemeProvider,createTheme} from '@mui/material/styles';
// import styled from '@emotion/styled';

//custom styles from different file
import { CustomLink,CustomSearchButton, SearchTextField,CustomContainer,CustomBox ,CustomH1,CustomTranslateIcon} from './App.Styles';

function App() {
  const [searchText, setSearchText] = useState('');

  const handleSearchClick = (event) => {
    setSearchText(searchText);
    console.log('search clicked');
  }

  return (
    <>

      <CssBaseline />
      <AppBar position="relative" sx={{bgcolor:"#16385b"}} >
      <Box display="flex" justifyContent="space-between"  sx={{ width: "80%", marginLeft: "auto", marginRight: "auto"}}>
        <Toolbar>
          <CustomTranslateIcon />
          <Typography variant="h6" sx={{ mr: 1 }}>
            Blin Dictionary |
          </Typography>
          <Typography variant="h6">ብሊና ቆላታ እንድባ</Typography>
        </Toolbar>
        <Box display="flex" alignItems="center">
          <CustomLink href='#'>
            <Typography variant="body1" >
              Contribute
            </Typography>
          </CustomLink>
          <CustomLink href='#'>
            <Typography variant="body1" sx={{ ml: 1 }}>
              | Contact
            </Typography>
          </CustomLink>
          
        </Box>
      </Box>
    </AppBar>
      
      <main >
        <div>
          <Container maxWidth="sm" >
            <CustomH1 variant="h4" align="center" color="textPrimary" gutterBottom>
              English to Blin Dictionary
            </CustomH1>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              ብልን ቆላታ እንድባ እንተደሊኹም እንተሓተት?
            </Typography>
            <Box sx={{ pt: 4, pb: 3 }}>   
              <Grid container spacing={2} justifyContent='center'>
                 <Grid item>
                    {/* <SearchTextField id="outlined-basic" label="Search word" variant="outlined" size="small" /> */}
                    <SearchTextField
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    id="outlined-basic"
                    label="Search word"
                    variant="outlined"
                    sx={{ width: '300px' }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton aria-label="search" onClick={handleSearchClick}>
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                 
                 </Grid>

                 {/* <Grid item>
                    <CustomSearchButton variant='outlined' color='primary' size="small">
                      <SearchIcon />
                    </CustomSearchButton>
                 </Grid> */}
                
              </Grid> 
            </Box>
            <div>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant='contained' color='primary'>
                  Play Word Game
                </Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' color='primary'>
                 Words List by Category
                </Button>
              </Grid>
            </Grid>
            </div>
          </Container>
        </div>
      </main>
      
    </>
  );
}

export default App;
