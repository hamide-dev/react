import { useState } from 'react';
import './App.css';
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {

 
  const [check , setcheck] = useState(false)
  const [value_input , setValue_input] = useState('')
  const visible  = PRODUCTS.filter(product =>{
    if(check && !product.stocked) {
      return false ;
    }

    if(  value_input && !product.name.toLocaleLowerCase().includes(value_input.toLocaleLowerCase())) {
      return false ;
    }

    return true
  })
  return (<>
      <div>
        <Searchbar 
          checke = {check} 
          text_value={value_input}
          scheck = {setcheck} 
          setv ={setValue_input}
          label ='selectionnez uniquement que les produit disponibles en stock'
      />
      </div>
      <div><Product products={visible}/></div>
      </>);
}



function Product({products}){

  const rows = [] 
  let lastcategories = null ;
  products.forEach((product) => {
    if(product.category !== lastcategories){
      rows.push(<Tablescategory category={product.category}  key={product.category}/>)
    }
    rows.push(<Productitems product={product} key={product.name}/>)
    lastcategories = product.category
  });
 return (<table  className='table'>
  <thead>
    <tr>
      <td style={{color:"white"}} className='text-center'>Product name</td>
      <td style={{color:"white"}} className='text-center'>Product price</td>
    </tr>
  </thead>
  <tbody >
    {rows}
    </tbody>
 </table>)
}

function Tablescategory ({category}) {
  return (<>
  <tr><th style={{color:"white"}}>{category}</th></tr>
  </>)
}
function Productitems ({product}) {
  const style = product.stocked ?'green' : 'red'
  const c = 'white'
  return (<>
  <tr>
    <td style={{color:style}} className='text-center'>{product.name}</td>
    <td className='text-center' style={{color:c}}>{product.price}</td>
  </tr>
  </>)
}


function Searchbar({checke ,text_value ,scheck ,setv ,label}) {
  

   return <>
   
   <div className='mt-2'>
      <input type='text' value={text_value} onChange = {(e)=>setv(e.target.value)} placeholder='search....' className='form-control'/>
   </div>
   <div className='mt-3'>
      <label><input type='checkbox' checked={checke} onChange = {(e)=>scheck(e.target.checked)} className='form-check-input'/>{label}</label>
   </div>

   </>
}

export default App;


