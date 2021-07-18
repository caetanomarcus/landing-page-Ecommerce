import React, {useState} from 'react';
import * as S from './styleds'
import login from '../../assets/login.png'
import lupa from '../../assets/loupe.png'



export default function Header(){
    const [menu, setMenu] = useState(['Home', 'Jogos Novos', 'Jogos Velhos', 'Sobre'])

    return(
        <S.Container>
            <S.SecondContainer>
                <S.Title>PsxGames</S.Title>
                <S.Label>
                    <S.Searcher placeholder="O que você busca?"  />
                    <S.HeaderIMG src={lupa} largura='30px' />
                </S.Label>
                <S.LoginContainer>
                    <S.HeaderIMG src={login} alt='Entrar' largura='40px' />
                    <S.TitleParagraph>Entrar</S.TitleParagraph>
                </S.LoginContainer>
            </S.SecondContainer>
            <S.ThirdContainer>
                <S.Menu>
                    {menu.map(item => 
                        <S.ItemsMenu>{item}</S.ItemsMenu>
                    )}
                </S.Menu>
            </S.ThirdContainer>
        </S.Container>
    )
}