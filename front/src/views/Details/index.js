import React from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';
import { CustomProductList, CustomCard } from '../../components/components';
import { SPECIFICATIONS } from '../../styles/config';
import Breadcrumb from '../../components/breadcrumb.component';
import ProductInfo from '../../components/productInfo.component';
import ProductDescription from '../../components/productDescription.component';

const CustomProductInfo = styled(CustomProductList)`
  display: block;
`;

const CustomProductInfoCard = styled(CustomCard)`
  flex-direction: row;
  gap: 20px;
  padding-right: ${SPECIFICATIONS.marginPadding32};
`

const mockProductInfo = {
  title: "Deco Reverse Sombrero Oxford",
  status: "NEW",
  sellered: "234",
  price: "1.980",
  subtitle: "Descripción del producto",
  description: "The Scarpe di Bianco Italian footwear collection was founded by Bill White in 2009. Di Bianco offers classic handmade men's shoes with a modern twist. The combination of timeless models and details with contemporary colors and styling, results in decidedly current, yet, elegant models. The aim of the Scarpe di Bianco company is to offer men a custom shoe buying experience through a multitude of models, last, soles, leathers, and color options."
}

const Details = () => {
  return (
    <>
      <Box>
        <Breadcrumb />
        <CustomProductInfo>
          <CustomProductInfoCard>
            <ProductInfo {...{ mockProductInfo }} />
          </CustomProductInfoCard>
          <CustomProductInfoCard>
            <ProductDescription {...{ mockProductInfo }} />
          </CustomProductInfoCard>
        </CustomProductInfo>
      </Box>
    </>
  );
}

export default Details;