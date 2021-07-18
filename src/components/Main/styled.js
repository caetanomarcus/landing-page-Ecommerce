import styled from 'styled-components';
import bg from '../../assets/gamer.jpg';



export const Container = styled.div `
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;
    width: 100%;
    height: 35vw;
    min-height: 50vh;
    margin: 0 auto;
    border-radius: 0 0 .25rem .25rem;
    display: flex;
    justify-content: center;
    align-items: center;
   
`
 

export const TitleContainer= styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #fff;
    border-radius: .25rem;
    padding: 1rem;
    animation: changecolor 5s infinite ease-in-out both;
    

    @keyframes changecolor{
        0%{
            background: #000;
            
        }
        
        100%{
            background: #fc8c14;
           
          
        }
    }
`

export const Title = styled.h2 `
    color: #fff;
    font-size: 3rem;
    text-shadow: 2px 0 7px #fc8c14, 0 0 5px #000;
`

export const GamesContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const Game = styled.div `
    width: 300px;
    height: 400px;
    background-image: url(${props => props.bg});
    background-size: 100%;
    background-repeat: no-repeat;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        
    }
`

export const Cover = styled.img `
    width: 100%;
    height: 88%;

    &:hover {
        transform: scale(1.1);
    }
 `

export const Name = styled.p `
    margin: .5rem;
    padding: .5rem;
`

 export const OldPrince = styled.p `
    text-decoration: line-through;
    font-size: .9rem;
 `

 export const Price = styled. p `
    margin: .5rem;
    text-shadow: 0 0 3px #fc8c14;
 `