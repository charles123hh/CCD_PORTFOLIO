import './container.css';

const Container = (props: any) => {
   return (
      <main className={`container`}>
         <div className={`container-body ${props.className}`}>
            {props.children}
         </div>
      </main>
   );
};

export { Container };
