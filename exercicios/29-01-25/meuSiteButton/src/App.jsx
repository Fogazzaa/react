function App() {
  return (
    <div>
      <h1>Bem vindo ao React</h1>
      <p>Exemplo 2 de componentização</p>
      <Button></Button>
    </div>
  );
}

function Button() {

  function click() {
    alert("voce clicou no botão");
  }
  return (
    <div>
      <button
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        onClick={() => click()}
      >
        Clique!
      </button>
    </div>
  );
}

export default App;
