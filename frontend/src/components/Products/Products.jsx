import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'
import useStyles from './styles'

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running shoes.',
    price: 'R$ 5',
    image:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSRGTgp31lCG6KPcZ4Xy2KHMXWNXsnkNn3EAGr5_vEhHGudSj4M&usqp=CAE',
  },
  {
    id: 2,
    name: 'Macbook',
    description: 'Apple Mac.',
    price: 'R$ 10',
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSpu2NZMhmOVBQDCg7B-89JVav2AfqCBRSeyO_MnHORvOa6rcLlcughbFecOa9-PPEgO7x8SlJqLps&usqp=CAE',
  },
]

const Products = () => {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products
