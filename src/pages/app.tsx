import { Routes, Route } from 'react-router-dom';

import Banner from '../components/banner';
import Container from '../components/container';
import Message from '../components/message';

import NotFound from './not-found';

const App = () => {
   return (
      <Container className={`sm mt-4`}>
         <Banner />
         <Message />
         <Routes>
            <Route path={`/`} />
            <Route path={`/*`} element={<NotFound />} />
         </Routes>
      </Container>
   );
};

export default App;
