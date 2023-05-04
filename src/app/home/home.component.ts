import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contentArray: [];
  isLoggedIn = false;
  dateObj = new Date();
  dateObj1 = new Date();
  constructor(private router: Router, private userService: UserService, private tokenStorageService: TokenStorageService) { }
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    const input = document.querySelector('input');
    input.valueAsDate = new Date();
    let formattedDt = formatDate(new Date(), 'yyyy/MM/dd', 'en_UK');
    console.log("formattedDt " + formattedDt);
    if(this.isLoggedIn){
      this.userService.getUserBoard(formattedDt).subscribe(
        data => {
          this.contentArray = data;
        },
        err => {
          this.contentArray = JSON.parse(err.error).message;
        }
      );
    }else{
      this.router.navigate(['/login']);
    }
    
  }
  view(){
    let formattedDt = formatDate(this.dateObj, 'yyyy/MM/dd', 'en_UK');
    console.log("view date "+formattedDt);
    this.userService.getUserBoard(formattedDt).subscribe(
      data => {
        this.contentArray = data;
      },
      err => {
        this.contentArray = JSON.parse(err.error).message;
      }
    );
  }
}
