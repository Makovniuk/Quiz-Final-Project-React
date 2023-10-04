import { Grid, styled, Typography } from '@mui/material';

export const MainWrapper = styled(Grid)(() => ({
  height: '100vh',
  width: '100vw',
  fontFamily: 'Poppins',
}));

export const TextLogo = styled(Typography)(() => ({
  color: '#fff',
}));

export const Item = styled('div')(() => ({
  textAlign: 'center',
  padding: '0',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
}));

export const HeaderGrid = styled(Grid)(() => ({
  backgroundColor: '#80add7',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const SideBarGrid = styled(Grid)(() => ({
  backgroundColor: '#03353E',
  width: '200px',
  height: '100vh',
  minHeight: '900px',
  boxShadow: '1px 1px 5px 0px grey',
  position: 'sticky',
  opacity: '0.8',
}));

export const MainGrid = styled(Grid)(() => ({
  padding: '20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  height: 'auto',
  margin: '0 auto',
  paddingLeft: '60px',
  marginBottom: '30px',
}));

export const FooterGrid = styled(Grid)(() => ({
  backgroundColor: '#36383F',
  display: 'flex',
  height: '50px',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
}));
