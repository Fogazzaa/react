import React from "react";

function click() {
  alert("você criou um item");
}

function ButtonCreate() {
    return (
      <div>
        <button
          style={{ marginTop:'2%', marginLeft:'45%', padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor:'green', color:'white', borderColor:'transparent'}}
          onClick={() => click()}
        >
          Botão que Cria
        </button>
      </div>
    );
  }
  
  export default ButtonCreate;