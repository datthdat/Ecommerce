import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import UseStyles from './styles'

const product = ({ product, onAddToCart }) => {

    const classes = UseStyles();

    // console.log("product", product);

    return (
        <Card className={classes.root} >
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" >
                        {product.price.formatted_with_symbol}VNĐ
                    </Typography>
                </div>
                {/* <Typography variant="bod2" color="textSecondary" >
                    {product.description}
                </Typography> */}
                <Typography dangerouslySetInnerHtml={{ __html: product.description }} variant="bod2" color="textSecondary" />

            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}  >
                <IconButton aria-label="Add to cart"
                    // onClick={() => console.log(product.id, product.name)}
                    onClick={() => onAddToCart(product.id, 1)}
                >
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default product
