import React from 'react';
import { Grid, Box } from '@mui/material';
// import GridOverlay from './gridOverlay.component';

const GridComponent = ({ children }) => {
  return (
    <>
      {/* <GridOverlay /> */}
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10} >
          <Box style={{ paddingRight: '20px' }}>
            {children}
          </Box>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </>

  )
}

export { GridComponent };