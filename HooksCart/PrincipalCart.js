import React, { useReducer } from 'react';
import CartContext from './ContextCart';
import data from './data';
import ProductList from './ProductList';
import RedCart from './RedCart';
import { Header,Icon,Segment} from 'semantic-ui-react'

function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return {...state, cart: [...state.cart,action.payload]}
        case 'REMOVE':
            return {...state, info: [...state.info,action.payload]}
        default:
        throw new Error();
    }
  }

const PrincipalCart = ()=>{

    let initialState = {info: data, cart:[]}

    const [state, dispatch] = useReducer(reducer, initialState);


    return(
        <div>
            <br></br>
            <Header as='h1' color="red"><Icon name='cart' />CART LIST</Header>
            
            <Segment.Group horizontal>
            <CartContext.Provider value={{state, dispatch}}>
                <Segment>
                    <ProductList/>
                </Segment>
                
                <Segment>
                    <RedCart/>
                </Segment>
            </CartContext.Provider>
            </Segment.Group>
               
            
        </div>
    )
}
export default PrincipalCart