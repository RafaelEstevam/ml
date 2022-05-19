import React from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';
import { CustomProductList, CustomCard } from '../../components/components';
import { SPECIFICATIONS } from '../../styles/config';
import Breadcrumb from '../../components/breadcrumb.component';
import ProductInfo from '../../components/productInfo.component';
import ProductDescription from '../../components/productDescription.component';
import DetailsHooks from '../../hooks/details.hooks';
import { getCategoriesOfLocaStorage } from '../../services/localStorage';

const CustomProductInfo = styled(CustomProductList)`
  display: block;
`;

const CustomProductInfoCard = styled(CustomCard)`
  flex-direction: row;
  gap: 20px;
  padding-right: ${SPECIFICATIONS.marginPadding32};
`

const Details = () => {

  const { details, product, isLoading } = DetailsHooks();
  const categories = product.categories || getCategoriesOfLocaStorage();

  return !isLoading && (
    <>
      <Box>
        <Breadcrumb {...{ categories }} />
        <CustomProductInfo>
          <CustomProductInfoCard>
            <ProductInfo {...{ details: details.item }} />
          </CustomProductInfoCard>
          <CustomProductInfoCard>
            <ProductDescription {...{ details: details.item }} />
          </CustomProductInfoCard>
        </CustomProductInfo>
      </Box>
    </>
  );
}

export default Details;