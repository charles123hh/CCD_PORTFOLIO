import './header.css';

const Header = (props: any) => {
   return (
      <section className={`header border-color-light`}>
         <span className={`${props.className}`}>{props.text}</span>
      </section>
   );
};
export default Header;
