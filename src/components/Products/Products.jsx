import React from "react";
import { Grid } from '@material-ui/core';

import Product from "./Product/Product";

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/6362ebb8-ad24-428c-9b2b-293e99410f42/go-flyease-shoes-V7n8cS.png' },
    {id: 2, name: 'Macbook', description: 'Apple Macbook.', price: '$10', image: 'https://www.thunderbolttechnology.net/sites/default/files/MBP15RD-TB-2016-PT-Open105-Svr-SCREEN.png' },
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map( (product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;