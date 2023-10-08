import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import BuyButton from "../buyButton";
import RentButton from "../rentButton";
import baseurl from "../../App";

const ProductDescription = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if(loading){
            fetchProduct();
        }
    }, [loading]);

    const fetchProduct = async () => {
        axios.get(`http://localhost:3001/api/v1/products/${id}`).then((response) => response.data).then((data) => {
            setProduct(data.data);
            setLoading(false);
        });
    }

    return(
        
        <>
            {loading && <p className="text-center">Loading...</p>}

            {!loading && product.length === 0 && (  
                <p className="text-center text-gray-600 text-2xl">
                    No products available
                </p>
                )

            }


            <article className="group m-20">
                <img
                    alt="Lava"
                    src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                />

                <div className="p-4">
                    <a href="#">
                    <h3 className="text-lg font-medium text-gray-900">
                        {product?.attributes?.title}
                    </h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                        {product?.attributes?.description}
                    </p>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                        Price: {product?.attributes?.price}
                    </p>
                </div>

                <BuyButton data={product} />
                <RentButton data={product} />
            </article>
        </>
    )
}

export default ProductDescription;