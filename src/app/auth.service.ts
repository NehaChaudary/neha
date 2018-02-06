import * as Firebase from 'Firebase';
import { Observable } from 'rxjs/';
import { from } from 'rxjs/observable/from';

export interface AuthService{
 userSignUp(email,password):Observable<any>
 userSignIn(email,password):Observable<any>
 insertUserInfo(user:Firebase.User)
 }

export class AuthServiceImpl implements AuthService{
    userSignUp(email:any,password:any){
        return this.signUpWithEmailAndPassword(email,password)
    } 

    userSignIn(email:any,password:any){
        return this.signInWithEmailAndPassword(email,password)
    }
    insertUserInfo(user:Firebase.User){
       this.storeUserInfo(user)
    }
    
   private signUpWithEmailAndPassword(email,password):Observable<any>
  {
      return from(Firebase.auth().createUserWithEmailAndPassword(email,password))

    }
    private signInWithEmailAndPassword(email,password):Observable<any>
    {
return from(Firebase.auth().signInWithEmailAndPassword(email,password))
    }
private storeUserInfo(user:Firebase.User){
console.log(user)
}



    signInWithGoogle(){
         
     }
 
 }