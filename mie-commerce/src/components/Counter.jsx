function Counter({ counter, handleChange, handleAdd }) {
  return (
    <div>
      <input
        type="number"
        placeholder="Unidades"
        min="1"
        value={counter}
        onChange={handleChange}
      />

      <button onClick={handleAdd}>Agregar al carrito</button>
    </div>
  );
}

export default Counter;
