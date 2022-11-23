import './menu.css';
import { Header } from '../../components/header';

import CV from '../../assets/CV.pdf';
import useMenu from '../../hooks/useMenu';

const Menu = () => {
   const { setMenu } = useMenu();

   return (
      <section className="mt-4">
         <Header className={`text-light`} text={`Menu`} />
         <p className={`text-light`}>
            [1]&nbsp;
            <a className={`link`} onClick={() => setMenu(1)}>
               Bio
            </a>
            <br />
            [2]&nbsp;
            <a className={`link`} onClick={() => setMenu(2)}>
               Project
            </a>
            <br />
            [3]&nbsp;
            <a className={`link`} onClick={() => setMenu(3)}>
               I <small className="text-danger">❤</small>
            </a>
            <br />
            [4]&nbsp;
            <a className={`link`} onClick={() => setMenu(4)}>
               Contact
            </a>
            <br />
            [5]&nbsp;
            <a className={`link text-light`} href={CV} target={`_blank`}>
               CV
            </a>
         </p>
      </section>
   );
};

export default Menu;
