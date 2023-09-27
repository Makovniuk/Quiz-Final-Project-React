import { Typography } from '@mui/material';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import {
  MainWrapper,
  // TextLogo,
  // HeaderGrid,
  Item,
  MainGrid,
  SideBarGrid,
  FooterGrid,
} from '../../styled';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

export default function Template() {
  return (
    <div className="App">
      <MainWrapper container >
        <Header />
        <SideBarGrid item lg={2}>
        <Sidebar />
        </SideBarGrid>
        <MainGrid item lg={10}>
          <Item>
          <Outlet />
          </Item>
        </MainGrid>
        <FooterGrid item lg={12}>
        <Typography variant='h6'>©2023. All rights Reserved</Typography>
        </FooterGrid>
      </MainWrapper>
    </div>
  );
}
