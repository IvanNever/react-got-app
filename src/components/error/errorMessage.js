import React from 'react';
import styled from 'styled-components';
import img from './error-img.jpg'

const ImgError = styled.img`
    width: 100%
`

const ErrorMessage = () => {
    return (
        <>
            <ImgError src={img} alt="error"/>
            <span>Something goes wrong...</span>
        </>
    )
}

export default ErrorMessage;