import React from 'react';
import {Fragment} from 'react'
import Header from './Componentes/Header';
import Content from './Componentes/Content';
import Inputs from './Componentes/Inputs';

function App() {
  return (
    <Fragment>
      {/* <Header/> */}
      <Content/>
   
      <Inputs
        titulo = "TITULO"
      />
    </Fragment>
  );
}

export default App;
