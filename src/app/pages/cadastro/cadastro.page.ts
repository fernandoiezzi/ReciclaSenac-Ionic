import { Component, OnInit } from '@angular/core';
import { NavController, ToastController} from '@ionic/angular';

import { UsersService } from 'src/app/users.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {

  model: User

  constructor(public nacCtrl: NavController, private toast: ToastController,
  private usersService: UsersService) {
    
    this.model = new User();
    this.model.nome = 'Fernando';
    this.model.email = 'fernando@bol.com.br';
    this.model.senha = '123456'
   }

   createAccount(){
    this.usersService.createAccount(this.model.nome, this.model.email, this.model.senha)
    .then((result:any) => {
      this.toast.create({message: 'Usuário foi cadastrado com sucesso: ' + result.token, position: 'bottom', 
      duration: 3000})
    })

    .catch((error:any) => {
      this.toast.create({ message: 'Erro ao criar usuário. Erro: ' + error.error, position:'bottom', duration:3000})
    });
    }
}



export class User{
    nome: string = '';
    email: string = '';
    senha: string = ''
}
