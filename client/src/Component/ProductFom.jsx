import React,{useState}  from 'react'
import axios from 'axios'

const ProductFom = () => {
  const [product,setProduct]= useState({name:"",description:"",price:"",category:""})
  const productHandler = (e) => {
    const {name,value} = e.target;
    setProduct({...product, [name]:value})
  }

  const insertProduct = async () => {
    try{
      const response = await axios.post('http://localhost:5000/addproduct',product)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={insertProduct}>
        <h1  className='mt-3'>Add Product</h1>
  <div className="mb-3 mt-3">
     <input type="text" className="form-control" name='name' value={product.name} onChange={productHandler} placeholder='Enter Product Name'/>
  </div>
  <div className="mb-3 mt-3">
     <input type="text" className="form-control" name='description' value={product.description} onChange={productHandler} placeholder='Enter Product Description'/>
  </div>
  <div className="mb-3 mt-3">
     <input type="Number" className="form-control" name='price' value={product.price} onChange={productHandler} placeholder='Enter Product Price'/>
  </div> 
  <div className="mb-3 mt-3">
     <input type="text" className="form-control" name='category' value={product.category} onChange={productHandler} placeholder='Enter Product Category'/>
  </div>


  <button type="submit" style={{width:'250px'}} className="btn btn-success">Submit</button>
</form>
    </div>
  )
}

export default ProductFom
