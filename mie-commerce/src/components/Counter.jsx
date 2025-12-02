function Counter({ counter, addProd }) {
  return (
    <div>
      <p id="parrafo">Unidades:{counter}</p>
      <button onClick={addProd}>+</button>
    </div>
  );
}

export default Counter;
