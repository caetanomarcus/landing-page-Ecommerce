import React,{useState} from 'react';
import * as S from './styled'

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
        let _data = {name: user, email: email}
        localStorage.setItem('userData', JSON.stringify(_data));
        setSend(true);

        setMsg(`Enviando.... Aguarde um momento.`)

        const regex = user.substring(0, user.indexOf(' '))

        setTimeout(()=> {setMsg(`Pronto, ${regex}, agora é só aproveitar as promoções que iremos enviar por email!`)}, 2500)
        
        
        
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
        </S.Container>
    )
}