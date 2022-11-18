import { Routes, Route } from 'react-router-dom';

import Banner from '../components/banner';
import Console from '../components/console';
import Container from '../components/container';
import Message from '../components/message';

import Menu from './menu';
import NotFound from './not-found';
import Bio from './bio';
import Project from './project';
import ILove from './i-love';
import Contact from './contact';

const App = () => {
   return (
      <Container className={`sm p-5`}>
         <Banner />
         <Message />
         <Routes>
            <Route path={`/`} element={<Menu />} />
            <Route path={`/*`} element={<NotFound />} />
            <Route path={`/bio`} element={<Bio />} />
            <Route path={`/project`} element={<Project />} />
            <Route path={`/i/love`} element={<ILove />} />
            <Route path={`/contact`} element={<Contact />} />
         </Routes>
         <Console />
      </Container>
   );
};

export default App;
