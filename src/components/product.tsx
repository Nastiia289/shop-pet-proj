import React, { useState } from 'react';
import { isPropertyDeclaration } from 'typescript';
import { IProduct } from '../modules';

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {
    const [details, setDatails] = useState(false);

    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400';
    const btnClasses = ['py-2 px-4 border rounded', btnBgClassName]

    return (
        <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
            <img src={product.image} className='w-1/6' alt={product.title} />
            <p>{product.title}</p>
            <p className='font-bold'>{product.price}</p>
            <button
                className={btnClasses.join(' ')}
                onClick={() => setDatails(prev => !prev)}>
                {details ? 'Hide details' : 'Show details'}
            </button>

            {details && <div>
                <p>{product.description}</p>
                <p>Rate: 
                    <span style={{fontWeight:'bold', marginLeft:'5px'}}>{product?.rating?.rate}</span>
                </p>
            </div>}
        </div>
    )
}