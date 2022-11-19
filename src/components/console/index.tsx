import { useRef, useEffect } from 'react';
import './console.css';
import CV from '../../assets/CV.pdf';
import useMenu from '../../hooks/useMenu';

const Console = () => {
   const { isActive, setMenu, getCurrentLocation } = useMenu();
   const ref = useRef(null);

   useEffect(() => {
      const element: any = ref.current;
      const listener = () => {
         element.focus();
      };
      document.addEventListener('mousemove', listener);
      return () => {
         document.removeEventListener('mousemove', listener);
      };
   }, []);

   const handleChangeMenu = (event: any) => {
      if (+event.keyCode !== 13) {
         return;
      }
      if (+event.target.value === 5) {
         window.open(CV, '_blank');
         event.target.value = null;
         return;
      }
      if (!isActive(0)) {
         event.target.value = '';
      }
      setMenu(+event.target.value);
      event.target.value = '';
   };

   return (
      <div>
         <p>
            <span className={'text-light'}>
               {isActive(0)
                  ? 'Select an option to continue 1 ~ 5'
                  : 'Press enter key to continue...'}
            </span>
            <br />
            <span className={`green`}>charles@dalisay</span>
            <span className={`text-light`}>:</span>
            <span className={`blue`}>/ccd/menu{getCurrentLocation()}$</span>
            <input
               type={`text`}
               className={`console-input text-light ml-2`}
               placeholder={`ex. 1`}
               ref={ref}
               onKeyDown={handleChangeMenu}
            />
         </p>
      </div>
   );
};

export default Console;
