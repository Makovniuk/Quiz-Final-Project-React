import { Grid, styled, Typography} from '@mui/material';

export const MainWrapper= styled(Grid)(() => ({
    height: '100vh',
    width: '100vw'
}));


export const TextLogo= styled(Typography)(() => ({
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
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const SideBarGrid = styled(Grid)(() => ({
    backgroundColor: '#4ddca9',
    width:  '150px',
    height: 'auto'
}));

export const MainGrid = styled(Grid)(() => ({
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 'auto',
    margin: '0 auto',
    paddingLeft: '185px',    
}));
  
export const FooterGrid = styled(Grid)(() => ({
    backgroundColor: '#80add7',
    height: '50px',  
}));

