import './header.css';

const Header = (props: any) => {
   return (
      <div className={`header border-color-light`}>
         <span className={`bg-dark ${props.className}`}>{props.text}</span>
      </div>
   );
};
export default Header;
