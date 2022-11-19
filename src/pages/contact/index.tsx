import './contact.css';
import Header from '../../components/header';

const Contact = () => {
   return (
      <section className={`mt-4`}>
         <Header className={`text-light`} text={`Contact`} />
         <p className={`text-light`}>
            <span>Let's Talk</span>
            <br />
            We can't solve your problem if you don't talk about it.
         </p>
         <p className={`text-warning`}>@ On the web</p>
         <p className={`text-light `}>
            <span>~ </span>
            <a
               className={`link text-light`}
               href={`https://www.facebook.com/charles123h`}
               target={'_blank'}
            >
               facebook/charles123h
            </a>
            <br />
            <span>~ </span>
            <a
               className={`link text-light`}
               href={`https://www.linkedin.com/in/charles123h`}
               target={'_blank'}
            >
               linkedin/charles123h
            </a>
            <br />
            <span>~ </span>
            <a
               className={`link text-light`}
               href={`https://github.com/charles123hh`}
               target={'_blank'}
            >
               github/charles123h
            </a>
            <br />
         </p>
         <p className={`text-warning`}>@ Direct</p>
         <p className={`text-light `}>
            <span>~ </span>
            <span>0995-657-6240</span>
            <br />
            <span>~ </span>
            <span>charlesdalisay004@gmail.com</span>
            <br />
         </p>
      </section>
   );
};

export default Contact;
