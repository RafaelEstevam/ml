import React, {useContext} from 'react';
import styled from 'styled-components';
import { COLORS, SPECIFICATIONS } from '../styles/config';

import { DetailsContext } from '../services/context';

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

const ProductDescription = () => {

  const {item} = useContext(DetailsContext).details;

  return (
    <ProductDescriptionWrapper>
      <ProductDescriptionTitle>
        Descrição do produto
      </ProductDescriptionTitle>
      <ProductDescriptionDescription>
        {item?.description}
      </ProductDescriptionDescription>
    </ProductDescriptionWrapper>
  )
};
export default ProductDescription;