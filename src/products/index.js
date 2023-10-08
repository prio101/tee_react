import React, { useEffect, useState } from 'react';
import ProductCard from './productCard';
import axios from 'axios';
const baseurl = "http://localhost:3001/api/v1/";
const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchProducts();
    }
    , []);

    const fetchProducts = async () => {
        await axios.get(`${baseurl}products`).then((response) => response.data).then((data) => { 
            setProducts(data); 
            setLoading(false) 
        });
        console.log("Show Data",products);
    }


    return (
        <div>
            <h2 className='text-xl text-blue-400'>Products</h2>

            {loading && <p className='text-center'>Loading...</p>}

            {!loading && products.length === 0 && <p className='text-center text-gray-600 text-2xl'>No products available</p>}

            <div className='mt-4'></div>

            <div className='m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {!loading && products.map((product) => (
                    <ProductCard key={product.id} data={product}/>
                  ))    
                }
            </div>


            
        </div>
    );
}


export default Products;