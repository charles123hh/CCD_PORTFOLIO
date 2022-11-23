import './bio.css';
import { Header } from '../../components/header';

const Bio = () => {
   return (
      <section className={`mt-4`}>
         <Header className={`text-light`} text={`Bio`} />
         <p className={`text-light`}>
            <span>Charles Dalisay</span>
            <br />
            Developer / Designer
         </p>
         <p className={`text-warning`}>@ Work</p>
         <p className={`text-light`}>
            Charles is a freelance and full-stack developer. He has a background
            in everything from web design to app development, and he's always on
            the lookout for ways to solve problems with his work.
         </p>
         <p className={`text-light`}>
            If you're looking for someone to help you make your ideas come to
            life, reach out.
         </p>
         <p className={`text-warning`}>@ Timeline</p>
         <p className={`text-light grid-container`}>
            <span>1997</span>
            <span>~</span>
            <span>Born in Cabuyao City Laguna, Philippines.</span>
            <span>2021</span>
            <span>~</span>
            <span>
               Earned a Bachelor of Science degree in Information Technology at
               Pamantasan ng Cabuyao.
            </span>
            <span>&nbsp;</span>
            <span>~</span>
            <span>Web Developer Intern at Visionaire Software Solution.</span>
            <span>&nbsp;</span>
            <span>~</span>
            <span>
               Back-End developer at&nbsp;
               <a
                  className={`link text-info`}
                  href={`https://collabera.ph`}
                  target={`_blank`}
               >
                  Collabera PH
               </a>
            </span>
            <span>2022</span>
            <span>~</span>
            <span>
               Full-Stack developer at&nbsp;
               <a
                  className={`link text-info`}
                  href={`https://xurpasenterprise.com`}
                  target={`_blank`}
               >
                  Xurpas Inc
               </a>
            </span>
         </p>
      </section>
   );
};

export default Bio;
