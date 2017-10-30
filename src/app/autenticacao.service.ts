import { Usuario } from './acesso/usuario.model';

import * as firebase from 'firebase';

export class Autenticacao {

    public cadastrarUsuario(usuario: Usuario): void {
        console.log('Chegamos ate o serviço: ', usuario);

        firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any) => {
                // console.log(resposta);

                // remove a senha do atributo senha do objeto
                delete usuario.senha;

                //registrando dados complementares do usuario no path email na base64 
                firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
                    .set(usuario)

            })
        .catch((error: Error) => {
                console.log(error); 
            })
    }

    public autenticar(email: string, senha: string): void {
        console.log('email: ', email);
        console.log('senha: ', senha);
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((resposta: any) => console.log(resposta))
            .catch((error: Error) => console.log(error))
    }
}