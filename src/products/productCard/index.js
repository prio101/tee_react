import React from "react";

const ProductCard = ({ data }) => {
    console.log(data);
    return (
        <>
            <a key={data.id} href="#" className="group block">
                <img
                    src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt=""
                    className="h-[350px] w-full object-cover sm:h-[450px]"
                />

                <div className="mt-3 flex justify-between text-sm">
                    <div>
                    <h3
                        className="text-gray-900 group-hover:underline group-hover:underline-offset-4"
                    >
                        {data.title}
                    </h3>

                    <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                        {data.description}
                    </p>
                    </div>

                    <p className="text-gray-900">{data.price}</p>
                </div>
            </a>
        </>
    )
}

export default ProductCard;