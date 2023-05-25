import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      </Typography>
      
      <Typography variant="h5" component="div">
      </Typography>
      
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      </Typography>
      
      <Typography variant="body2">
      
      </Typography>
    </CardContent>
    
    <CardActions>
      <Button size="small">View</Button>
    </CardActions>
  
  </React.Fragment>
);

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function FeedCard() {
  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item></Item>
        </Grid> 
      </Grid>
    </Box>
    </> 
  );
}