import React,{useState,useEffect} from 'react'
import axios from 'axios'

const ProductList = () => {
  const [products,SetProducts] = useState([])
  const [product,setProduct]= useState({_id:"",name:"",description:"",price:"",category:""})
  const productHandler = (e) => {
    const {name,value} = e.target;
    setProduct({...product, [name]:value})
  }
  const fetchProducts = async () => {
    try{
      const response = await axios.get('http://localhost:5000/readAllProducts')
      SetProducts(response.data)
    }catch (error) {
      console.log(error)
    }
  }
  const deleteHandler = async(id)=>{
    try{
      const response = await axios.delete(`http://localhost:5000/delete/${id}`)
      console.log(response)
      fetchProducts();
    } catch (error){
      console.log(error)
    }
    
  }

  useEffect(() =>{
    fetchProducts()
  },[])

  const updateProduct = (id,name,description,price,category)=>{
    setProduct({
      _id:id,name:name,description:description,price:price,category:category
    })
  }

  const submitupdatedProduct = async (id) =>{
    try{
      const response = await axios.put(`http://localhost:5000/update/${id}`,product)
      console.log(response)
      fetchProducts()
    }catch (error){
      console.log(error)
    }
  }

  return (
    <>

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

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


  <button type="submit" onClick={()=>{submitupdatedProduct(product._id)}} data-bs-dismiss="modal" aria-label="Close" style={{width:'250px'}} className="btn btn-success">Submit</button>

      </div>
      
    </div>
  </div>
</div>
    <div className='mt-3'>
      <h1>Product List</h1>
      <ul className='list-group'>
      {
        products.map((product)=>{
          return <li key={product._id} className="list-group-item list-group-item-success"> product:{product.description}  ,  price:{product.price} <i className="fa-regular fa-pen-to-square" onClick={()=>{updateProduct(product._id,product.name,product.description,product.price,product.category)}} data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i> <i className="fa-solid fa-trash" onClick={()=>{deleteHandler(product._id)}}></i></li>
        })
      }
    </ul>
    </div>
    </>
  )
}

export default ProductList
