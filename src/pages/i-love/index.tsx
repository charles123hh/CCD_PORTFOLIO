import { Header } from '../../components/header';

const ILove = () => {
   return (
      <section className={`mt-4`}>
         <Header className={`text-light`} text={`I ❤`} />
         <p className={`text-light`}>
            <span>Maybe we can be friend!</span>
            <br />I <span className={`text-danger`}>❤</span> cats, food, music,
            and learning new things. 
         </p>
         <p className={`text-warning`}>@ Hobbies</p>
         <p className={`text-light grid-container`}>
            <span>Gaming</span>
            <span>~</span>
            <span>I'm not good at it, but I play chess.</span>
            <span>Reading</span>
            <span>~</span>
            <span>I've read a lot of fantasy and sci-fi novels.</span>
            <span>Cycling</span>
            <span>~</span>
            <span>Long, short, trails ride let's go.</span>
         </p>
      </section>
   );
};

export default ILove;
