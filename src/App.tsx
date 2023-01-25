import React, { useState, useContext } from 'react'
import { CreateProduct } from './components/createProduct';
import { ErrorMessage } from './components/errorMessage';
import { Loader } from './components/loader';
import { Modal } from './components/modal';
import { Product } from './components/product';
import { ModalContext } from './context/modalContext';
import { useProducts } from './hooks/products';
import { IProduct } from './modules';

function App() {
  const { loading, products, error, addProduct } = useProducts()
  const {modal, open: openModal, close: closeModal} = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    closeModal()
    addProduct(product)
  }

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map(product => <Product product={product} key={product.id} />)}

      {modal && <Modal title='Create new product' onClose={() => closeModal()}>
        <CreateProduct onCreate={createHandler}/>
      </Modal>}

      <button 
        className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
        onClick={()=>openModal()}
      >+</button>
    </div>
  )
}

export default App;

