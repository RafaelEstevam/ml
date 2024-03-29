import React, {createContext} from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';
import { CustomProductList, CustomCard } from '../../components/components';
import { SPECIFICATIONS } from '../../styles/config';
import Breadcrumb from '../../components/breadcrumb.component';
import ProductInfo from '../../components/productInfo.component';
import ProductDescription from '../../components/productDescription.component';
import useDetailsHooks from '../../hooks/details.hooks';
import { DetailsContext } from '../../services/context';

const CustomProductInfo = styled(CustomProductList)`
  display: block;
`;

const CustomProductInfoCard = styled(CustomCard)`
  flex-direction: row;
  gap: 20px;
  padding-right: ${SPECIFICATIONS.marginPadding32};
`

const Details = () => {

  const { details } = useDetailsHooks();

  return details?.item && (
    <DetailsContext.Provider value={{details}}>
      <Box>
        <Breadcrumb />
        <CustomProductInfo>
          <CustomProductInfoCard>
            <ProductInfo />
          </CustomProductInfoCard>
          <CustomProductInfoCard>
            {details?.item?.description && (
              <ProductDescription />
            )}
          </CustomProductInfoCard>
        </CustomProductInfo>
      </Box>
    </DetailsContext.Provider>
  );
}

export default Details;