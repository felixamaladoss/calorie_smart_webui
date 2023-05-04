import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  contentArray: [];
  isLoggedIn = false;
  
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public mbarChartLabels:string[] = ['4-May', '3-May', '2-May', '1-May', '30-Apr', '29-Apr', '28-Apr'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartColors:Array<any> = [
  {
    backgroundColor: 'rgba(105,159,177,0.2)',
    borderColor: 'rgba(105,159,177,1)',
    pointBackgroundColor: 'rgba(105,159,177,1)',
    pointBorderColor: '#fafafa',
    pointHoverBackgroundColor: '#fafafa',
    pointHoverBorderColor: 'rgba(105,159,177)'
  },
  { 
    backgroundColor: 'rgba(77,20,96,0.3)',
    borderColor: 'rgba(77,20,96,1)',
    pointBackgroundColor: 'rgba(77,20,96,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(77,20,96,1)'
  }
];
  public barChartData:any[] = [
    {data: [100, 135, 75, 200, 34, 78, 90], label: 'Carbs'},
    {data: [80, 120, 160, 179, 126, 207, 90], label: 'Protien'}
  ];

  constructor(private router: Router, private userService: UserService, private tokenStorageService: TokenStorageService) { }
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if(this.isLoggedIn){
      this.userService.getUserBoard('').subscribe(
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
 
}
