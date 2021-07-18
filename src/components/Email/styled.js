import styled from 'styled-components'

export const Container = styled.div `
    background: #000;
    color: white;
    height: 40vh;
    min-height: 350px;
    width: 100%;
    border-radius: .25rem .25rem 0 0; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const Title = styled.h2 `
    color: #fff;
    text-transform: uppercase;
    margin-top: 3rem;
`
export const FormContainer = styled.form `
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    jusfity-content: center;
    height: 40vh;
   
`
export const AltMsg= styled.h3 `
    height: 40%;
    text-align: center;
    margin-top: 4rem;
    color: #fc8c14;
`

export const Label = styled.label `
    border: #fc8c14 solid 1px;
    width: 20rem;
    margin-top: .7rem;
    display: flex;
    justify-content: space-between;
    border-radius: .25rem;


`

export const Input = styled.input `
    width: 16.6rem;
    border-radius: .25rem 0 0 .25rem;

&:focus,
&:active{
    outline: none;
    box-shadow: none;
}

`
export const Text = styled.p `
    cursor: pointer;
`

export const Btn = styled.button `
    background: #fc8c14;
    border-style: none;
    width: 10rem;
    height: 3rem;
    margin-top: 2rem;
    border-radius: .25rem;
    font-size: 1.2rem;
    color: #fff;
    text-shadow: 2px 2px 2px #000;
    

    &:hover{
        cursor: pointer;
    }

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }

    &:active{
        transform: scale(0.99);
    }
`

export const LastContainer = styled.div `
    display: flex;
    align-items: flex-end;
    height: 19%;
    margin-bottom: 3rem;
`

export const LastMsg = styled.p `
    
`
export const Figures = styled.figure `
display: flex;
width: 8rem;
justify-content: space-evenly;
margin-bottom: 2rem;

`

export const Contact = styled.img `
    width: 40px;
    
    
`