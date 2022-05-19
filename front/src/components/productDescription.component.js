import React from 'react';
import styled from 'styled-components';
import { COLORS, SPECIFICATIONS } from '../styles/config';

const ProductDescriptionWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  padding-left: ${SPECIFICATIONS.marginPadding16};
  padding-bottom: ${SPECIFICATIONS.marginPadding32};
  gap: ${SPECIFICATIONS.marginPadding32};
  max-width: ${SPECIFICATIONS.length680};
`

const ProductDescriptionTitle = styled('h2')`
  font-size: ${SPECIFICATIONS.fontSize28};
  font-weight: normal;
  color: ${COLORS.dark0};
`;

const ProductDescriptionDescription = styled('p')`
  color: ${COLORS.gray};
  font-size: ${SPECIFICATIONS.fontSize16};
`

const ProductDescription = ({ details }) => {
  return (
    <ProductDescriptionWrapper>
      <ProductDescriptionTitle>
        {details?.subtitle}
      </ProductDescriptionTitle>
      <ProductDescriptionDescription>
        {details?.description}
      </ProductDescriptionDescription>
    </ProductDescriptionWrapper>
  )
};
export default ProductDescription;