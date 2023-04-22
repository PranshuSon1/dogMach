import React from 'react'
import RecipeReviewCard from './RecipeReviewCard'
import { Grid } from '@mui/material'


const home = () => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={0} direction="Row"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}
    >
    <Grid item xs={2}>
      <RecipeReviewCard></RecipeReviewCard>
    </Grid>
    <Grid item xs={2}>
      <RecipeReviewCard></RecipeReviewCard>
    </Grid>
  </Grid>
  )
}

export default home