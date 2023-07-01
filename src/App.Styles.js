import styled from '@emotion/styled';
import { Typography,Button, Box,Link, TextField, Card, CardContent, CardMedia,CardActions,AppBar,CssBaseline,Grid, Toolbar,Container } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';

export const CustomContainer = styled(Container)`
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #f5f5f5;
    padding:them.spacing(8,0,6);

`;
export const CustomH1 = styled(Typography)`
    margin:15px;
    `;
export const CustomTranslateIcon = styled(TranslateIcon) `
    margin-right: 30px;
    
`;


export const CustomTypography = styled(Typography)`
    flex-grow: 1;
`;

export const CustomLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    font-size: 1rem; 
    &:hover {
        color: #ff0000; 
    }
    &:active {
        color: #00ff00;
      }
`;

export const SearchTextField = styled(TextField)({
    height: '36px',
    width: '400px',
    '& .MuiOutlinedInput-input': {
        // padding: '15px 10px',
    }
})
export const CustomSearchButton = styled(Button)`
    height: 40px;
`;


