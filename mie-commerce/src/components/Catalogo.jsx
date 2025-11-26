
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
    return(
        <>
        <div className='container'>
         <div className='catalogo'>
            {productos.map(producto=>(
                <div key={producto.id} className='card'>
                    <h3>{producto.title}</h3>
                    <img src={producto.image} alt={producto.title}/>
                    <p>{producto.price}</p>
                    <Counter />
                    <Button />
                </div>
            ))}
         </div>
        </div>
        </>
    );
}
   

export default Catalogo;