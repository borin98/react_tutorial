import React from 'react';
import './App.css';
import ButtonCustom from "./componets/ButtonCustom";
import Modal from "./componets/Modal";
import Backdrop from "./componets/Backdrop";

/**
 *
 * @constructor
 * @return
 */
function App() {
  return (
    <div>
      <h1>My todos</h1>
        <ButtonCustom textMsg={"Titulo maneiro"}/>
        <ButtonCustom textMsg={"Titulo mais maneiro"}/>
        <Modal/>
        <Backdrop/>
    </div>
  );
}

export default App;
