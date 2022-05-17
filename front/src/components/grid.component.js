import React from 'react';
import { Grid, Box } from '@mui/material';
import styled from 'styled-components';
import Layout from './layout.component';

const CustomGridOverlay = styled(Grid)`
  position: absolute;
  height: calc(100vh - 56px);
  left: 0px;
  width: 100%;
`

const CustomGridItem = styled(Grid)`
  background: #ffcc0010;
  height: 100%;
  border-right: 20px solid #ffffff30
`

const GridOverlay = ({ children }) => {
  return (
    <CustomGridOverlay>
      <Layout style={{ height: '100%' }}>
        <Grid container style={{ height: '100%' }}>
          <CustomGridItem item xs={1}>
            1
          </CustomGridItem>
          <CustomGridItem item xs={1}>
            2
          </CustomGridItem>
          <CustomGridItem item xs={1}>
            3
          </CustomGridItem>
          <CustomGridItem item xs={1}>
            4
          </CustomGridItem>
          <CustomGridItem item xs={1}>
            5
          </CustomGridItem>
          <CustomGridItem item xs={1}>
            6
          </CustomGridItem>
          <CustomGridItem item xs={1}>
            7
          </CustomGridItem>
          <CustomGridItem item xs={1}>
            8
          </CustomGridItem>
          <CustomGridItem item xs={1}>
            9
          </CustomGridItem>
          <CustomGridItem item xs={1}>
            10
          </CustomGridItem>
          <CustomGridItem item xs={1}>
            11
          </CustomGridItem>
          <CustomGridItem item md={1} style={{ maxWidth: 'calc(8.33% - 20px)', borderRight: 'none' }}>
            12
          </CustomGridItem>
        </Grid>
      </Layout>
    </CustomGridOverlay>
  )
}

const GridComponent = ({ children }) => {
  return (
    <>
      <GridOverlay />
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