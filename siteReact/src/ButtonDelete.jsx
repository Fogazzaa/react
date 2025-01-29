import React from "react";

function click() {
  alert("você deletou um item");
}

function ButtonDelete() {
  return (
    <div>
      <button
        style={{ marginTop:'20%', marginLeft:'44,5%', padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor:'red', color:'white', borderColor:'transparent'}}
        onClick={() => click()}
      >
        Botão que Apaga
      </button>
    </div>
  );
}

export default ButtonDelete;
