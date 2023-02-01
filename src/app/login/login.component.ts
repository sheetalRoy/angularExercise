import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    
    console.log('hello'); 
  }

  login(){
    const body = { 
      username: 'kminchelle',
      password: '0lelplR',
    // expiresInMins: 60, // optional
    } 
    //this.http.post('https://dummyjson.com/auth/login', body)
    this.http.get('https://api.instantwebtools.net/v2/airlines')
    .subscribe((res)=> {
      console.log(res,'fff');
    })
  }
}
