import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  userData:any = [];
  logindetails:any = [];
  showPwd = 'password';
  showPwdCon = 'password';
  dataRex = /^(?=[\w\s-+.])\s*[-+.'\w]+@[-.\w]+\.[-.\w]+\s*$/
  constructor(private formbuilder:FormBuilder,
           private router:Router) { }

           
  ngOnInit(): void {
    this.createsignupForm();
    console.log(this.createsignupForm());
  }
  
  createsignupForm()
  {
    this.signupForm = this.formbuilder.group({
      name:['' ,[Validators.required]],
      email:['', [Validators.required, Validators.email , Validators.pattern(this.dataRex)]],
      password:['' ,[Validators.required]],
      confirmPassword:['' ,[Validators.required]]
    })
  }
  register()
  {
    if(this.signupForm.value.password === this.signupForm.value.confirmPassword)
    {
      this.userData.unshift(this.signupForm.value);    
      const user = this.signupForm.value;
      localStorage.setItem('Userdata', JSON.stringify(user));
     
      this.router.navigate(['/login']);
      
    }
    else{
      // this.toastr.error('Password and Confirm Password Should be Same');
      alert('wrong User')
    }
 
  }

}

