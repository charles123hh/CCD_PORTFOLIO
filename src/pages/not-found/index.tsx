import Header from '../../components/header';

const NotFound = () => {
   return (
      <section>
         <Header className={`bg-dark text-danger text-bold`} text={`404`} />
         <p
            className={`text-danger text-align-center text-uppercase text-bold`}
         >
            Page Not Found
         </p>
      </section>
   );
};

export default NotFound;
