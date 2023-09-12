import * as React from 'react';
import QuizMain from './pages/QuizMain/QuizMain';
import { 
MainWrapper, 
TextLogo, 
HeaderGrid, 
Item, 
MainGrid, 
SideBarGrid, 
FooterGrid,  
} from './styled.js';

export default function App() {
  
  return (
    <div className="App">
      <MainWrapper container >
        <HeaderGrid item lg={12}>
          <Item>
          <TextLogo variant="h4" component="h4">QUIZ GAME</TextLogo>
          </Item>
        </HeaderGrid>
        <SideBarGrid item lg={2}>
          <Item>SIDEBAR</Item>
        </SideBarGrid>
        <MainGrid item lg={10}>
          <Item>
          <QuizMain />
          </Item>
        </MainGrid>
        <FooterGrid item lg={12}>
          <Item>FOOTER</Item>
        </FooterGrid>
      </MainWrapper>
    </div>
  );
}
