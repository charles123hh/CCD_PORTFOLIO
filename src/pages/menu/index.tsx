import './menu.css';

import Header from '../../components/header';

const Menu = () => {
   return (
      <section className="mt-4">
         <Header className={`text-light text-bold`} text={`Menu`} />
         <p className={`text-light`}>
            [1]&nbsp;
            <a className={`link`} onClick={() => alert('Bio')}>
               Bio
            </a>
            <br />
            [2]&nbsp;
            <a className={`link`} onClick={() => alert('Project')}>
               Project
            </a>
            <br />
            [3]&nbsp;
            <a className={`link`} onClick={() => alert('I ❤')}>
               I <small className="text-danger">❤</small>
            </a>
            <br />
            [4]&nbsp;
            <a className={`link`} onClick={() => alert('CV')}>
               CV
            </a>
            <br />
            [5]&nbsp;
            <a className={`link`} onClick={() => alert('Contact')}>
               Contact
            </a>
         </p>
      </section>
   );
};

export default Menu;
