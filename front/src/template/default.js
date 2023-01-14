import React, { useReducer } from "react";

import styled from "styled-components";
import { GridComponent } from "../components/grid.component";
import Header from "../components/header.component";
import Layout from "../components/layout.component";
import { COLORS } from "../styles/config";

import { DefaultContext } from "../services/context";
import {loadingReducer} from "../services/reducer";

const CustomMain = styled('main')`
  background-color: ${COLORS.light};
  height: 100%;
  min-height: calc(100vh - 56px);
`;

const defaultLoading = false;

const Default = ({ children }) => {

  const [loading, setLoading] = useReducer(loadingReducer, defaultLoading);

  return (
    <DefaultContext.Provider value={{loading, setLoading}}>
      <Header />
      <CustomMain>
        <Layout>
          <GridComponent>
            {children}
          </GridComponent>
        </Layout>
      </CustomMain>
    </DefaultContext.Provider>

  )
};

export default Default;