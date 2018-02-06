import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subscription,Observer } from 'rxjs/Rx';
import { OnDestroy } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  ngOnDestroy():void{
    console.log("home module distroy")
  }
//myFirstSubscription : Subscription;
  constructor() { }

  ngOnInit() {
    /*let myFirstObserver:Observable<number>=Observable.interval(1000);
    this.myFirstSubscription = myFirstObserver.subscribe(
      (data:number)=>{
        console.log("your normal data is data",data)
      },
      (error)=>{
        console.log("error is error")
      },
      ()=>{
        console.log("obserevtable is done")
      }
    )
    myFirstObserver.subscribe(
      (data:number)=>{
        console.log("your normal data is",data)
      },
      ()=>{
        console.log("observable is done")
      }
    )*/

    

    let myFirstObservable : Observable<string> = Observable.create((observer:Observer<string>)=>{

      setTimeout(()=>{
        observer.next("first next is called")
      },1000)

      setTimeout(()=>{

        observer.next("second next is called")
      },4000)

      setTimeout(()=>{
        observer.next("third next is called")
      },6000)
      setTimeout(()=>{
        observer.error("second error is called")
      },12000)
      setTimeout(()=>{
        observer.complete()
      },13000)
    })
      myFirstObservable.subscribe(
        (data:string) => {
          console.log("Normal Data handler", data)
        },
        (error)=>{
          console.log("error",error)
        },
        ()=>{
          console.log("Process is completed")
        
        }
      )
    
     
  }

}  


