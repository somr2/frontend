import React from 'react'
import { Redirect } from "react-router-dom";
import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    justify-content: space-around;
`

const Wrapper = styled.div`
   display: block;
`

const Img = styled.img`
   max-width: 100%;
   height: auto;
   display: block;
`

/**
 * Product component
 * @param {function} onClick
 * @param {function} onRedirect
 * @param {array}    products
 * @param {boolean}  redirect
 * @param {string}   whereTo
 */

class ProductListing extends React.Component{
    componentWillUnmount(){
        const {onRedirect} = this.props
        onRedirect()
        
    }
    render(){
        const {products, onClick, redirect, whereTo} = this.props
        console.log(redirect, whereTo)
        if (redirect) {
            return <Redirect push to={`/necklace/${whereTo}`} />;
        }
        return (
            <Container>
                {products.map((product,i)=>(
                    <Wrapper key={i} onClick={() => onClick(product.id)}>
                        <Img src={product.src} alt="product"/>
                    </Wrapper>
                ))}
            </Container>
        )
    }
}

export default ProductListing