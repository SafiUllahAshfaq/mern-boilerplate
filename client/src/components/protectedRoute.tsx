import React, {Component} from "react";
import { Navigate, Route } from "react-router-dom";


export const ProtectedRoute = ({ component: Component, ...restOfProps }: any ) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  // const isAuthenticated =false;
  console.log("this", isAuthenticated);

  if (isAuthenticated) {

    return <Component  />;
   
  } else {
     return <Navigate to ='/login'/>

}
  // return (
  //   <Route
  //     {...restOfProps}
  //     render={(props: any) =>
  //       isAuthenticated ? <Component {...props} /> : <Navigate to="/signin" />
  //     }
  //   />
  // );
}

