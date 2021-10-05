import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  dataRex = /^(?=[\w\s-+.])\s*[-+.'\w]+@[-.\w]+\.[-.\w]+\s*$/
  logindetails:any = [];
  userData:any = [];
  showPwd = "password";
  itemChecked = true;
  event1: any;
  constructor(private formbuilder:FormBuilder,
             private  router:Router) { }

  ngOnInit(): void {
    this.createloginForm();
    this.logindetails =  JSON.parse(localStorage.getItem('Userdata') as any);  
     console.log('login Details' ,this.logindetails);
  }
  checkbox(event:any)
  {
    const event1 = event
    localStorage.setItem('rememberMe' , event1.srcElement.checked);
    // console.log('checkbox Value',  event1.srcElement.checked);
  }
  
 createloginForm(){
    this.loginForm = this.formbuilder.group({
      email:['', [Validators.required, Validators.email , Validators.pattern(this.dataRex)]],
      password:['' ,[Validators.required]]
    })
  }

  login()
  {
    if(this.loginForm.value.email == this.logindetails.email  &&
      this.loginForm.value.password == this.logindetails.password)
     {
      this.router.navigate(['/afterlogin']);
     
     }
    else
    {
      
    }
  }
}
