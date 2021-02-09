import Loader from "react-loader-spinner";
import React from "react";
const LoaderComponent = ({type = 'Puff', isShow = false}) => {
        return (
           <>
               {
                   isShow ?
                       <section style={{
                           position: 'fixed',
                           display: "flex",
                           width: '100vw',
                           zIndex: 9999,
                           overflow: "hidden",
                           backgroundColor: 'rgba(0,0,0,.5)',
                           height: '100vh',
                           top: 0,
                           alignItems: "center",
                           justifyContent: 'center'}}>
                           <Loader
                               type={type}
                               color="#00BFFF"
                               height={100}
                               width={100}
                               // timeout={3000} //3 secs
                           />
                       </section>: null
               }
               </>
        );
}

export default LoaderComponent
