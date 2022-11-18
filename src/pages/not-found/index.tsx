import Header from '../../components/header';

const NotFound = () => {
   return (
      <section className='mt-4'>
         <Header className={`text-danger text-bold`} text={`404`} />
         <p
            className={`text-danger text-align-center text-uppercase text-bold`}
         >
            Page Not Found
         </p>
      </section>
   );
};

export default NotFound;
