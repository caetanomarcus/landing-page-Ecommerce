import React,{useState} from 'react';
import * as S from './styled'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

export default function Email (){
    const [send, setSend] = useState(false);
    const [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [msg, setMsg] = useState('')
    

    const handleUser = (e) =>{
        let _user = e.target.value;
        setUser( _user);
        
       
    }

    const handleMail = (e) =>{
        let _email = e.target.value
        setEmail(_email);
        
       
    }

    const handleClick = (e)=> {
        e.preventDefault();
        if(user && email){
            let _data = {name: user, email: email}
        localStorage.setItem('userData', JSON.stringify(_data));
        setSend(true);

        setMsg(`Enviando.... Aguarde um momento.`)

        const regex = user.substring(0, user.indexOf(' '))

        setTimeout(()=> {setMsg(`Pronto, ${regex || user}, agora é só aproveitar as promoções que iremos enviar por email!`)}, 2500)
        }
        
        
        
        
    }
    return(
        <S.Container>
            <S.Title>Cadastre seu email para receber mais promoções</S.Title>
           {send ? 
           <S.AltMsg>{msg}</S.AltMsg>
           :
           <S.FormContainer required>
           <S.Label>
               <S.Text>Nome:</S.Text> 
               <S.Input required='true' name='name' onChange={handleUser}  value={user} ></S.Input>
           </S.Label>
           <S.Label>
               <S.Text>Email:</S.Text> 
             <S.Input required='true' name='email'  onChange={handleMail}  value={email}></S.Input>
           </S.Label>
           <S.Btn onClick={handleClick} >Quero Receber</S.Btn>
           </S.FormContainer>
           }
           <S.LastContainer>
               <S.LastMsg>Criado por Marcus Caetano</S.LastMsg>
           </S.LastContainer>
           <S.Figures>
           <a href='https://github.com/caetanomarcus'target='_blank' rel='noreferrer' ><S.Contact src={github}/></a>
           <a href='https://www.linkedin.com/in/marcus-caetano-8827a4208/' target='_blank' rel='noreferrer' ><S.Contact src={linkedin}/></a>
           </S.Figures>
        </S.Container>
    )
}