import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  photoUrl = '../assets/images/user-icon.png';

  constructor(private userService: UserService, private token: TokenStorageService) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      data => {
        this.currentUser = data;
      },
      err => {
        this.currentUser = JSON.parse(err.error).message;
      }
    );
  }
}
