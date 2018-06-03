import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    justify-content: flex-end;
`

const Wrapper = styled.div`
   display: flex;
   margin-right: 10rem;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
    padding: 1rem 2rem;
    color: #777;
`

/**
 * Header navigation component
 * @param {array} links 
 */

const HeaderNav = ({links}) => {
    return (
        <Container>
            <Wrapper>
                {links.map((link, index)=>(
                    <div key={index}>
                        <StyledLink to={`/${link.url}`}>{link.title}</StyledLink>
                    </div>
                ))}
            </Wrapper>
        </Container>
    )
}

export default HeaderNav