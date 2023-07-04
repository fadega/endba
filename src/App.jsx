import React, { useState } from "react";
import { Typography, Button, IconButton, InputAdornment, Box, TextField,  Card,  CardContent,  CardMedia,  CardActions,  AppBar, CssBaseline, Grid, Toolbar, Container,} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import TranslateIcon from "@mui/icons-material/Translate";
import SearchIcon from "@mui/icons-material/Search";
import { CustomLink, CustomH1, CustomTranslateIcon} from "./App.Styles";
import SearchForm from "./components/SearchForm/SearchForm";

//custom styles from different file


function App() {
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = (event) => {
    setSearchText(searchText);
    console.log("search clicked");
  };

  const cards = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {/* <CssBaseline /> */}
      <AppBar position="relative" sx={{ bgcolor: "#16385b" }}>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
        >
          <Toolbar>
            <CustomTranslateIcon />
            <Typography variant="h6" sx={{ mr: 1 }}>
              Blin Dictionary |
            </Typography>
            <Typography variant="h6">ብሊና ቆላታ እንድባ</Typography>
          </Toolbar>
          <Box display="flex" alignItems="center">
            <CustomLink href="#">
              <Typography variant="body1">Contribute</Typography>
            </CustomLink>
            <CustomLink href="#">
              <Typography variant="body1" sx={{ ml: 1 }}>
                | Contact
              </Typography>
            </CustomLink>
          </Box>
        </Box>
      </AppBar>

      <main>
        <div Container sx={{ backgroundColor: "red" }}>
          <Container maxWidth="sm">
            <CustomH1
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              English to Blin Dictionary
            </CustomH1>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              ብልን ቆላታ እንድባ እንተደሊኹም እንተሓተት?
            </Typography>
            <SearchForm />
            <Box sx={{ pt: 4, pb: 3, mt: 3, mb: 3 }}>
              <Grid container spacing={2} justifyContent="center" dis>
                <Grid item>
                  <Typography>Word</Typography>
                </Grid><Grid item>
                  <Typography>Music</Typography>
                </Grid>
              </Grid>
            </Box>

            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Play Word Game
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Words by Category
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md" sx={{ mt: 5 }}>
          <Grid container spacing={4}>
            {cards.map((card) => (

                <Grid item key={card} xs ={12} sm={6} md={4} justifyContent="center">
                <Card>
                  <CardMedia

                    component="img"
                    height="240"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Heading
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div">
                     Culpa numquam officiis neque maiores enim voluptate rem id quos beatae quae praesentium aperiam corrupti atque doloribus quaerat eius, corporis, quis sequi?
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
                </Grid>

              ))}
          
          </Grid>
        </Container>
      </main>
      <footer Container sx={{mt:2, with:'80%'}}>
        <Typography variant="h6" align="center" gutterBottom sx={{m:2}}>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color='textSecondary'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui similique sed delectus error quis at laboriosam non itaque eos saepe, officiis deserunt maiores praesentium quaerat nostrum blanditiis totam aspernatur consequuntur.
        </Typography>
      </footer>
    </>
  );
}

export default App;
