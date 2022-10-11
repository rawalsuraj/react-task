import 'antd/dist/antd.css';
import React, { Suspense } from "react";
import Router from './router'

function App() {
    return (
      <Suspense fallback={"Loadin...."}>
        <Router />
      </Suspense>
    );
  }
  
  export default App;