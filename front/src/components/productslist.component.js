import React from 'react';
import styled from 'styled-components';
import { SPECIFICATIONS, COLORS } from '../styles/config';

const CustomProductList = styled('div')`
  border-radius: ${SPECIFICATIONS.borderRadius4};
  overflow: hidden;
`

const CustomCard = styled('div')`
  padding: ${SPECIFICATIONS.marginPadding16};
  background: ${COLORS.white};
  display: flex;
  gap: ${SPECIFICATIONS.marginPadding16};
`;

const ImgCard = styled('img')`
  display: block;
  min-width: ${SPECIFICATIONS.length180};
  width: ${SPECIFICATIONS.length180};
  min-height: ${SPECIFICATIONS.length180};
  height: ${SPECIFICATIONS.length180};
  background: ${COLORS.light};
  border-radius: ${SPECIFICATIONS.borderRadius4};
`

const CardWrapper = styled('div')`
  display: flex;
  // justify-content: space-between;
  padding-top: ${SPECIFICATIONS.marginPadding16};
  width: 100%;
`

const CardContent = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${SPECIFICATIONS.marginPadding16};
  height: fit-content;
  width: 60%;
`;

const CardPrice = styled(`span`)`
  font-size: ${SPECIFICATIONS.fontSize24};
`;

const CardTitle = styled(`h2`)`
  font-size: ${SPECIFICATIONS.fontSize18};
  color: ${COLORS.dark0};
  font-weight: normal;
`;

const CardSeller = styled('p')`
  font-size: ${SPECIFICATIONS.fontSize12};
  color: ${COLORS.gray};
  width: 33%;
  display: flex;
  justify-content: center;
  height: 40px;
`

const CardBox = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  width: 100%;
`

const mockProductsList = [
  { title: "Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!", price: "1.980", seller: "Capital Federal", delivery: true, image: "http://teste.com" },
  { title: "Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!", price: "1.980", seller: "Capital Federal", delivery: false, image: "http://teste.com" },
  { title: "Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!", price: "1.980", seller: "Mendoza", delivery: true, image: "http://teste.com" },
  { title: "Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!", price: "1.980", seller: "Capital Federal", delivery: false, image: "http://teste.com" }
]

const ProductsList = ({ lastItem }) => {
  return (
    <CustomProductList>
      {
        mockProductsList.map((item) => (
          <CustomCard>
            <ImgCard src={item.image} alt={item.title} />
            <CardWrapper>
              <CardBox>
                <CardContent>
                  <CardPrice>
                    {`$ ${item.price}`}
                  </CardPrice>
                  <CardTitle>
                    {item.title}
                  </CardTitle>
                </CardContent>
                <CardSeller>
                  {item.seller}
                </CardSeller>
              </CardBox>
            </CardWrapper>
          </CustomCard>
        ))
      }
    </CustomProductList>
  )
};

export default ProductsList;