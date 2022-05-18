import styled from 'styled-components';
import { SPECIFICATIONS, COLORS } from '../styles/config';

export const CustomProductList = styled('div')`
  border-radius: ${SPECIFICATIONS.borderRadius4};
  overflow: hidden;
  margin-bottom: 100px;
`
export const CustomCard = styled('div')`
  padding: ${SPECIFICATIONS.marginPadding16};
  padding-bottom: 0px;
  background: ${COLORS.white};
  display: flex;
  flex-direction: column;
  gap: ${SPECIFICATIONS.marginPadding16};
`;
