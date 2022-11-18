import Header from '../../components/header';

const Bio = (props: any) => {
   return (
      <section className={`mt-4`}>
         <Header className={`text-light text-bold`} text={`Bio`} />
         <p className={`text-light`}>Bio</p>
      </section>
   );
};

export default Bio;
