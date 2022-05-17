import React from 'react';
import styled from 'styled-components';
import searchIcom from '../assets/ic_Search.png';
import { SPECIFICATIONS, COLORS } from '../styles/config';
import { Link } from 'react-router-dom';

const CustomForm = styled('form')`
  display: flex;
  alignItems: center;
  width: 100%;
`

const CustomInput = styled('input')`
  border: 0px solid;
  border-radius: ${SPECIFICATIONS.borderRadius4} 0px 0px ${SPECIFICATIONS.borderRadius4};
  padding: 10px ${SPECIFICATIONS.marginPadding16};
  font-size: ${SPECIFICATIONS.fontSize16};
  color: ${COLORS.gray};
  width: 100%;
`
const CustomButton = styled('button')`
  border: 0px;
  padding: 8px;
`
const Search = () => {
  return (
    <CustomForm>
      {/* <Link to="/">home</Link>
      <Link to="/items">list</Link>
      <Link to="/items/123">details</Link> */}
      <CustomInput placeholder='Nunca dejes de buscar' />
      <CustomButton type='submit'>
        <img src={searchIcom} alt="Search icon" />
      </CustomButton>
    </CustomForm>
  )
}

export default Search;