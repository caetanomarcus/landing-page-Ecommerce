import React,{useState} from 'react';
import * as S from './styled'
import Games from './Games.js'


export default function Main (){
    const [games] = useState(Games)

    return (
       <>
        <S.Container>
            <S.TitleContainer>
                <S.Title>Grande Saldão de Jullho!</S.Title>
                <S.Title>Até 60% de desconto!</S.Title>
            </S.TitleContainer>
        </S.Container>
        <S.GamesContainer>
            {games.map(game => 
                <S.Game  >
                    <S.Cover src={game.cover} />
                    <S.Name>{game.name}</S.Name>
                    <S.OldPrince>{game.oldPrice}</S.OldPrince>
                    <S.Price>{game.price}</S.Price>
                </S.Game>
            )}
        </S.GamesContainer>
       </>
    )

}