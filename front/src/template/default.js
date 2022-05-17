import React from "react";
import styled from "styled-components";
import { GridComponent } from "../components/grid.component";
import Header from "../components/header.component";
import Layout from "../components/layout.component";
import { COLORS } from "../styles/config";

const CustomMain = styled('main')`
  background-color: ${COLORS.light};
  height: 100%;
  min-height: calc(100vh - 56px);
`

const Default = ({ children }) => {
  return (
    <>
      <Header />
      <CustomMain>
        <Layout>
          <GridComponent>
            {children}
          </GridComponent>
        </Layout>
      </CustomMain>
    </>
  )
};

export default Default;