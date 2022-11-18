import './message.css';

const Message = () => {
   const calculateAge = (dateString: string) => {
      var birthday = +new Date(dateString);
      return ~~((Date.now() - birthday) / 31557600000);
   };

   return (
      <section>
         <p className={`text-light`}>
            Hello, I'm Charles, an app developer based in the Philippines.
         </p>
         <p className={`text-light`}>
            CCD&nbsp;
            <a
               className={`text-light version`}
               href={`https://github.com/charles123hh/CCD_PORTFOLIO`}
               target={`_blank`}
            >
               [Version 06.10.1997.{calculateAge('1997-06-10')}]
            </a>
            <br />© {new Date().getFullYear()} All Rights Reserved.
         </p>
      </section>
   );
};

export default Message;
