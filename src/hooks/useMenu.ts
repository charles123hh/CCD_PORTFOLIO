import { useNavigate, useLocation } from 'react-router-dom';

const useMenu = () => {
   let navigate = useNavigate();
   let location = useLocation();
   const getPath = (value: number) => {
      switch (value) {
         case 1:
            return '/bio';
         case 2:
            return '/project';
         case 3:
            return '/i/love';
         case 4:
            return '/contact';
         case 404:
            return '/404';
         default:
            return '/';
      }
   };
   const setMenu = (value: number) => {
      navigate({ pathname: getPath(value) });
   };
   const isActive = (value: number) => {
      return location.pathname === getPath(value);
   };
   const getCurrentLocation = () => {
      let str = location.pathname;
      return str.endsWith('/') ? str.slice(0, -1) : str;
   };

   return { isActive, setMenu, getCurrentLocation };
};

export default useMenu;
