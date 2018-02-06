import { Component, OnInit } from '@angular/core';
import * as Firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs';
import { AuthServiceImpl } from '../auth.service';
import { UserModel } from '../model/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservices: AuthServiceImpl) { }

  user: UserModel = new UserModel();

//foe html communication
logInWithUserNameAndPassword(email,password){
  this.authservices.userSignIn(email,password).subscribe(
    data=>{
      console.log(data)
      this.storeInfoSubscriber(data)
      console.log("loginWith name and password ends")
    },
    error=>{
      console.log(error.message)
    }
  )
}  
      storeInfoObservable(user:Firebase.User):Observable<any>{
        return Observable.create((observer:Observer<any>)=>{
           

          setTimeout(()=>{
            observer.next(user)
          },5000)

        })
      }
storeInfoSubscriber(user:Firebase.User){
  console.log("inside the subscription")
  this.storeInfoObservable(user).subscribe(
    data=>{
      console.log("store info of the user data")
      this.authservices.insertUserInfo(data)
      console.log("user detail ends")
    },
    error=>{
      console.log("while subscripting user info")
    }
  )
}



  ngOnInit() {
  }

}
