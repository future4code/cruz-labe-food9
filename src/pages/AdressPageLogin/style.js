import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center; 
    flex-direction:column;
    width:100vw;
    
    @media(max-width:800px){
        display:flex;
        margin-top:100px;
    }
`

export const Form = styled.form`
    width:20vw;
    
    @media(max-width:800px){
        width:50vw;
    }
`