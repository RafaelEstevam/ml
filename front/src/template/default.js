import React, { createContext, useState } from "react";

import styled from "styled-components";
import { GridComponent } from "../components/grid.component";
import Header from "../components/header.component";
import Layout from "../components/layout.component";
import { COLORS } from "../styles/config";

export const DefaultContext = createContext();

const CustomMain = styled('main')`
  background-color: ${COLORS.light};
  height: 100%;
  min-height: calc(100vh - 56px);
`

const Default = ({ children }) => {

  const [loading, setLoading] = useState(false);

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