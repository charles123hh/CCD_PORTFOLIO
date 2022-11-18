import './container.css';

const Container = (props: any) => {
   return (
      <>
         <main className={`container`}>
            <div className={`container-body ${props.maxW}`}>
               {props.children}
            </div>
         </main>
      </>
   );
};

export default Container;
