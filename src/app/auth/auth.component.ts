import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./authResponse";

@Component({
    selector: "duo-auth",
    templateUrl: "auth.component.html"
})
export class AuthComponent{
    public buttonClicked!:string;
    private authObservable!: Observable<AuthResponse>;

    
    
    constructor(private authService: AuthService){

    }
    public onSubmit(data: NgForm){
        console.log("Button Clicked = "+this.buttonClicked);
        console.log(data.value);

        if(this.buttonClicked=='SignUp'){
            this.authObservable = this.authService.signup(data.value.email, data.value.password);
        }
        if(this.buttonClicked=='Login'){
            this.authObservable = this.authService.login(data.value.email, data.value.password);
        }
        
        this.authObservable.subscribe(
            (data:AuthResponse) =>{
                console.log(data);
                if(this.buttonClicked=='SignUp'){
                    document.write("Successful Sign Up")
                }
                if(this.buttonClicked=='Login'){
                    document.write("Successful Login")
                }
                
                
            },
            error=>{
                console.log(error.error);
                if(this.buttonClicked=='SignUp'){
                    document.write("Unsuccessful Sign Up: Invalid email or email already exists")
                }
                if(this.buttonClicked=='Login'){
                    document.write("Unsuccessful Login: Email does not exist or incorrect password")
                }
            }
        )
        data.reset();
    }

}