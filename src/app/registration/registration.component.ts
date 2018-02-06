import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/user.model';
import { AuthServiceImpl } from '../auth.service';
import * as Firebase from 'firebase';
import { Router } from '@angular/router';





@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 
  
  
   user: UserModel = new UserModel();

  constructor(private authService : AuthServiceImpl,private router:Router){
    
  }

private validateCredential(email,password)
{
  this.validate(email,password).then((response)=>{
    console.log(response)
    this.signUpWithEmailAndPassword(email,password)
  }).catch(function(error){
    console.log(error.message)

  }
  )
  console.log("firebase finished")

}



    private validate(email,password):Promise<any>{
      console.log("inside the validate")
      return new Promise<any>((resolve,reject)=>{
        console.log("inside call back")
        if(email="neha@neha.com"){
          reject("emailis already availabe in db")
        }
        else{
          resolve("user can perform login operation")
        }
        
      })   
    }



      signUpWithEmailAndPassword(email,password){
           console.log("mail is ",email)
          console.log("password is ",password)
          this.authService.userSignUp(email,password).subscribe((response:Firebase.User)=>{
          console.log(response)
          let currentUser:Firebase.User=Firebase.auth().currentUser
          console.log("current user email is ",currentUser.email)
          console.log("current user  name is",currentUser.displayName)
          alert("you has been successfully registered")
          this.router.navigate(['login'])

          currentUser.getIdToken(true).then((token:string)=>{
            console.log("token is ",token)
        
        }  ,(error:any)=>{
            console.log(error)

          })
          console.log("we got google firebase response")

          },error =>{
            console.log(error.message)
          alert(error.message)
          })
          
        

}


  signInWithGoogle(){
      
  }
 ngOnInit()
 {

 }

}
