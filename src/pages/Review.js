import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { ProductContext } from '../context/ProductContext';



export default function Review() {
    const {basket,adress,card} = React.useContext(ProductContext);
    console.log(adress)
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {basket?.map((product) => (
          <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.title} secondary={product.category} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {`$${basket.length>0 ? basket?.map((item)=>item.price*item.quantity).reduce((x,y)=>(x)+(y)):0}`}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{adress.firstName} {adress.lastName}</Typography>
          <Typography gutterBottom>{adress.city}/{adress.country}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            
              <React.Fragment>
                <Grid item xs={12}>
                  <Typography gutterBottom>{card.cardName}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom>{card.cardNumber}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{card.expDate}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{card.cvv}</Typography>
                </Grid>
              </React.Fragment>
            
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}