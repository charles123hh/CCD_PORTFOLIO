import './console.css';

const Console = (props: any) => {
   return (
      <div>
         <p>
            <span className={'text-light'}>
               Select an option to continue 1 ~ 5
            </span>
            <br />
            <span className={`green`}>charles@dalisay</span>
            <span className={`text-light`}>:</span>
            <span className={`blue`}>/ccd/menu$</span>
            <input
               type={`text`}
               className={`console-input text-light ml-2`}
               placeholder={`ex. 1`}
            />
         </p>
      </div>
   );
};

export default Console;
