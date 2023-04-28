import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  selectedGender = '';
  selectedActivity ='';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSelectedGender(value:string): void {
    console.log(` value  ${value}`);
		this.selectedGender = value;
    console.log(`gender value  ${this.selectedGender}`);
	}

  onSelectedActivity(value:string): void {
    console.log(` value on onSelectedActivity ${value}`);
		this.selectedActivity = value;
	}

  onSubmit() {
    console.log(`gender value  ${this.selectedGender}`);
    console.log(`activity value  ${this.selectedActivity}`);
    this.authService.register(this.form, this.selectedGender, this.selectedActivity).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
