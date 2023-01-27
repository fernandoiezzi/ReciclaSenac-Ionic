import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { __values } from 'tslib';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private API_URL = 'http://localhost:3000/users/'
  
  constructor(public http: HttpClient) { }

  createAccount(nome: string, email:string, senha: string){
    return new Promise((resolve, reject) => {
      var data = {
        nome: nome,
        email: email,
        senha: senha
      }
      this.http.post(this.API_URL, data).subscribe((result:any) => {
        resolve(result.json())},
      (error: any) => {reject(error.json)}); 
     
    });
  }

  login(nome: string, email: string, senha: string){
    return new Promise((resolve, reject) => {
      var data = {
        nome: nome,
        senha: senha
      }

      this.http.post(this.API_URL + 'login', data).subscribe((result: any) => {
        resolve(result.json())},
      (error: any) => {reject(error.json)});
    });
  }

  getAll(page: number){
    return new Promise((resolve, reject) => {
    
    let url = this.API_URL + 'users/?per_page=10&page=' + page;

    this.http.get(url)
    .subscribe((result: any) => {
      resolve(result.json())
    },
    (error:any) => {
     reject(error.json)
    
    });
    })
  }

  getId(id: number){
    return new Promise((resolve, reject) => {
    
      let url = this.API_URL + 'users/' + id;
  
      this.http.get(url)
      .subscribe((result: any) => {
        resolve(result.json())
      },
      (error:any) => {
       reject(error.json)
      
      });
      })
  }

  insert(user: any){
    return new Promise((resolve, reject) => {
    
      
  
      this.http.post(this.API_URL + 'users/', user)
      .subscribe((result: any) => {
        resolve(result.json())
      },
      (error:any) => {
       reject(error.json)
      
      });
      })
  }
}
