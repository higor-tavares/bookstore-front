import React from 'react'
import ListProducts from './ListProducts'
import Alert from 'react-bootstrap/Alert'
import { useSelector } from 'react-redux'

const Home = () => {

  const showSuccessMessage = useSelector((state)=>{return state.messages.successMessage});

  return (
    <div>
        {
        showSuccessMessage == true?
                <Alert key='success' variant='success'>Produto adicionado ao carrinho com sucesso!</Alert>
            : null
        }
      <ListProducts />
    </div>
  );
}
export default Home
