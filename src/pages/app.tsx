import { Routes, Route } from 'react-router-dom';

import Banner from '../components/banner';
import Console from '../components/console';
import Container from '../components/container';
import Message from '../components/message';

import Menu from './menu';
import NotFound from './not-found';

const App = () => {
   return (
      <Container className={`sm mt-4`}>
         <Banner />
         <Message />
         <Routes>
            <Route path={`/`} element={<Menu />} />
            <Route path={`/*`} element={<NotFound />} />
         </Routes>
         <Console />
      </Container>
   );
};

export default App;
