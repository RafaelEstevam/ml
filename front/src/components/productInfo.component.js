import React from 'react';
import styled from 'styled-components';
import { COLORS, SPECIFICATIONS } from '../styles/config';
import { translateStatus } from '../services/translateStatus';

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

const ProductInfo = ({ details }) => {

  return (
    <>
      <ProductInfoImg src={details?.picture} alt={details?.title} />
      <ProductInfoDetails>
        <ProductInfoTitleWrapper>
          <ProductInfoSubtitle>
            {`${translateStatus(details?.condition)} - ${details?.sold_quantity} vendidos`}
          </ProductInfoSubtitle>
          <ProductIntoTitle>
            {details?.title}
          </ProductIntoTitle>
        </ProductInfoTitleWrapper>
        <ProductInfoPrice>
          {`$ ${details?.price?.amount}`}
          {details?.price?.decimals && (
            <ProductInfoPriceDecimal>
              {`,${details?.price?.decimals}`}
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