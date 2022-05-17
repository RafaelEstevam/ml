import React from 'react';
import styled from 'styled-components';
import { SPECIFICATIONS, COLORS } from '../styles/config';

const CustomList = styled('ol')`
  list-style: none;
  display: flex;
  padding: ${SPECIFICATIONS.marginPadding16} 0px;
  gap: 7px;
`;

const CustomListItem = styled('li')`
  color: ${COLORS.gray};
  font-size: ${SPECIFICATIONS.fontSize14};
  display: flex;
  align-items: center;
  gap: 6px;
  :after {
    content: '';
    width: 6px;
    height: 6px;
    display: block;
    border-right: 1px solid ${COLORS.gray};
    border-bottom: 1px solid ${COLORS.gray};
    transform: rotateZ(-45deg);
  }
  :last-child{
    font-weight: bold;
    :after{
      display: none;
    }
  }
`

const mockBreadcrumb = [
  { link: "/", label: "Electrônica, Audio y Video" },
  { link: "/", label: "iPod" },
  { link: "/", label: "Reproductores" },
  { link: "/", label: "iPod touch" },
  { link: "/", label: "32 GB" }
]

const Breadcrumb = ({ listNavigation }) => {
  return (
    <>
      <nav>
        <CustomList>
          {mockBreadcrumb.map((item) => (
            <CustomListItem key={item.label}>{item.label}</CustomListItem>
          ))}
        </CustomList>
      </nav>
    </>
  );
}

export default Breadcrumb;