import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "./Pagination";


function Dashboard(){

    if (localStorage.getItem("cart") == null) {
        localStorage.setItem('cart', JSON.stringify([]));
    }

    var navigate = useNavigate();

   const[products, setProducts] = useState([]);
   const[perpage, setPerpage] = useState([]);

    useEffect(()=> {
                        
        axios.get("https://fakestoreapi.com/products/").then(
            response =>{
                console.log(response);
                setProducts(response.data); setPerpage(response.data.slice(0,5));
            },
            error => {
                console.log(error);
            }, 
        )

    },[]
    )

    const navigateToProductView = (product) => {
        localStorage.setItem('currentProduct',JSON.stringify(product));
        navigate("/productview")

    }
    const pageHandler = (pageNumber) => {
        setPerpage(products.slice((pageNumber*5)-5,pageNumber*5));
      }


    const renderList = () => {

        let list = perpage.map(product => {
            var productWithUI = <div className="col">
                <div className="card" onClick={() => navigateToProductView(product)}>
                    <img width="300px" height="300px" 
                        src={product.image}
                        className="card-img-top" alt="Hollywood Sign on The Hill" />
                    <div className="card-body">
                        <h6 className="card-title">{product.title}</h6>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">price : ${product.price}</h4>
                    </div>
                </div>
            </div>
            return productWithUI;
        })
        return list;

    }
   
    
    return (
        <><br></br><br></br>
            <h1>dashboard</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">

                {products.length > 0 ? renderList()
                
               
                
                : <h1>Products Loading...</h1>}<br></br><br></br>
            </div><br></br><br></br>
            <Pagination products={products} pageHandler= {pageHandler}></Pagination><br></br><br></br><br></br>

            <h1>hello</h1>
            

     
        </>
    )
}

export default Dashboard;