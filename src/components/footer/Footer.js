import React from 'react'
import Grid from '@mui/material/Grid';
// import {useStyles} from './FooterStyles';


const Footer = () => {
    // const classes = useStyles();
  return (
    <div style={{backgroundColor:"#222831",color:"white"}}>
        <Grid container alignItems="center">
                
                <Grid item sm={1}></Grid>
            </Grid>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12}>
                    <p>Developed by Fraternity Team <small>Copyright © {new Date().getFullYear()}</small> </p>
                </Grid>
            </Grid>
    </div>
  )
}

export default Footer

