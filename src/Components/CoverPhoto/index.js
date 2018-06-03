import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
   display: block;
`

const Img = styled.img`
   max-width: 100%;
   height: auto;
   display: block;
`
/**
 * Cover Photo Component
 * @param {array} photos
 */

const CoverPhoto = ({photos}) => {
    return (
        <div>
            {photos.map((photo, index) => (
                <Wrapper key={index}>
                    <Img src={photo} alt="product"/>
                </Wrapper>
            ))}
        </div>
    )
}

export default CoverPhoto