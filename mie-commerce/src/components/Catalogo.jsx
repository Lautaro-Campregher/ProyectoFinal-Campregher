
import { useEffect,useState } from 'react'
import Button from './Button';
import Counter from './Counter';


function Catalogo() {
    
    const [productos,setProductos] = useState([]);
    
    useEffect(()=>{
    fetch('https://fakestoreapi.com/products'​)
    .then(res =>res.json())
    .then(data=>setProductos(data))
    .catch(error=> console.error(error));
    },[])

    const [counter, setCounter] = useState(0);

    const resetCounter = () => setCounter(0);
    const addProd =()=> setCounter(counter + 1);

    
    return(
        <>
        <div className='container'>
         <div className='catalogo'>
            {productos.map(producto=>(
                <div key={producto.id} className='card'>
                    <h3>{producto.title}</h3>
                    <img src={producto.image} alt={producto.title}/>
                    <p>{producto.price}</p>
                    <Counter  counter={counter} addProd={addProd}/>
                    <Button resetCounter={resetCounter}/>
                </div>
            ))}
         </div>
        </div>
        </>
    );
}
   

export default Catalogo;