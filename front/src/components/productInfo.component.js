import React, {useContext} from 'react';
import styled from 'styled-components';
import { COLORS, SPECIFICATIONS } from '../styles/config';
import { translateStatus } from '../services/translateStatus';

import { DetailsContext } from '../views/Details';

const ProductInfoImg = styled('img')`
  background: ${COLORS.gray};
  max-height: ${SPECIFICATIONS.length680};
  max-width: ${SPECIFICATIONS.length680};
  min-height: ${SPECIFICATIONS.length680};
  min-width: ${SPECIFICATIONS.length680};
`

const ProductInfoDetails = styled('div')`
  display: flex;
  flex-direction: column;
  padding-top: ${SPECIFICATIONS.marginPadding16};
  gap: ${SPECIFICATIONS.marginPadding32};
`;

const ProductInfoTitleWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${SPECIFICATIONS.marginPadding16};
`

const ProductInfoSubtitle = styled('span')`
  font-size: ${SPECIFICATIONS.fontSize14};
  color: ${COLORS.dark0};
`;

const ProductIntoTitle = styled('h1')`
  font-size: ${SPECIFICATIONS.fontSize24};
  color: ${COLORS.dark0};
`;

const ProductInfoPrice = styled('p')`
  font-size: ${SPECIFICATIONS.fontSize46};
  display: flex;
  align-items: start;
  gap: 10px;
`;

const ProductInfoPriceDecimal = styled('span')`
  font-size: ${SPECIFICATIONS.fontSize24};
`

const ProductForm = styled('form')`
  width: 100%;
`
const ProductButton = styled('button')`
  border: 0px;
  background: ${COLORS.secondary};
  color: ${COLORS.white};
  width: 100%;
  padding: 10px 10px;
  border-radius: ${SPECIFICATIONS.borderRadius4};
`

const ProductInfo = () => {
  
  const {item} = useContext(DetailsContext).details;

  return (
    <>
      <ProductInfoImg src={item?.picture} alt={item?.title} />
      <ProductInfoDetails>
        <ProductInfoTitleWrapper>
          <ProductInfoSubtitle>
            {`${translateStatus(item?.condition)} - ${item?.sold_quantity} vendidos`}
          </ProductInfoSubtitle>
          <ProductIntoTitle>
            {item?.title}
          </ProductIntoTitle>
        </ProductInfoTitleWrapper>
        <ProductInfoPrice>
          {`$ ${item?.price?.amount}`}
          {item?.price?.decimals && (
            <ProductInfoPriceDecimal>
              {`,${item?.price?.decimals}`}
            </ProductInfoPriceDecimal>
          )}
        </ProductInfoPrice>
        <ProductForm>
          <ProductButton type='submit'>
            Comprar
          </ProductButton>
        </ProductForm>
      </ProductInfoDetails>
    </>
  )
};
export default ProductInfo;