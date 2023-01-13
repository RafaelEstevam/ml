import React from 'react';
import styled from 'styled-components';
import searchIcom from '../assets/ic_Search.png';
import { SPECIFICATIONS, COLORS } from '../styles/config';
import SearchHooks from '../hooks/search.hooks';

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
  color: ${COLORS.dark0};
  width: 100%;
`
const CustomButton = styled('button')`
  border: 0px;
  padding: 8px 10px;
  cursor: pointer;
`
const Search = () => {

  const { search, setSearch, handleSubmit } = SearchHooks();

  return (
    <>
      <CustomForm onSubmit={handleSubmit}>
        <CustomInput placeholder='Nunca dejes de buscar' value={search} onChange={(e) => setSearch(e.target.value)} required />
        <CustomButton type='submit'>
          <img src={searchIcom} alt="Search icon" />
        </CustomButton>
      </CustomForm>
    </>
    
  )
}

export default Search;