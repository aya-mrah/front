import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserServiceService } from './../user-service.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
//users: User[] = [];
// users: Observable<User[]>;
//users:User=new User(0 ," "," "," "," ");
message:any;
users: any;
constructor(private service:UserServiceService,private http: HttpClient) {


}


  ngOnInit(): void {
 //this.users =this.service.getUsersList();
   let resp=this.service.getUsersList();
     resp.subscribe ((data)=>this.users=data);
  }


}


