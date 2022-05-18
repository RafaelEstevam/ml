import React from 'react';
import styled from 'styled-components';
import { COLORS, SPECIFICATIONS } from '../styles/config';

const ProductInfoImg = styled('img')`
  max-height: fit-content;
  max-width: ${SPECIFICATIONS.length680};
  background: ${COLORS.gray};
  height: auto;
  width: 100%
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
`;

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

const ProductInfo = ({ mockProductInfo }) => {

  return (
    <>
      <ProductInfoImg src="data:image/jpeg;base64,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" />
      <ProductInfoDetails>
        <ProductInfoTitleWrapper>
          <ProductInfoSubtitle>
            {`${mockProductInfo.status} - ${mockProductInfo.sellered} vendidos`}
          </ProductInfoSubtitle>
          <ProductIntoTitle>
            {mockProductInfo.title}
          </ProductIntoTitle>
        </ProductInfoTitleWrapper>
        <ProductInfoPrice>
          {`$ ${mockProductInfo.price}`}
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