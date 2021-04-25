import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:string; 
  password:string;
  authRequest:any;
  message:string;

  response:any;


  constructor(private service:LoginService) { }

  ngOnInit(): void {
   
   
  }
  
  public getAccessToken( ){
    this.authRequest={
      "username":this.login,
      "password":this.password
    }
    localStorage.setItem('login',this.login)
    console.log(this.authRequest)
    let resp=this.service.generateToken(this.authRequest);
    resp.subscribe(data=>{this.accesApi(JSON.parse(data+"").jwt+"")
    localStorage.setItem('token',JSON.parse(data+"").jwt+"");
    this.service.welcomeA();
  }
    //data=>console.log(JSON.parse(data+"").jwt+"")
    )

  }
  public accesApi(token){
    let resp=this.service.welcome(token);
    resp.subscribe(data=>this.response=data)
  }

  doLogin(){
   let resp= this.service.login(this.login,this.password);
    resp.subscribe(data=>{
      console.log(data);  
    })
  }
}
