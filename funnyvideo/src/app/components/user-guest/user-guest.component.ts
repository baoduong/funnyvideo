import { Component, OnInit, } from '@angular/core';
import { UserManagementService } from 'src/app/@services/user-management.service';

@Component({
  selector: 'app-user-guest',
  templateUrl: './user-guest.component.html',
  styleUrls: ['./user-guest.component.scss'],
})
export class UserGuestComponent implements OnInit {

  constructor(private userService: UserManagementService) { }

  user = {
    email: '',
    password: ''
  }

  ngOnInit(): void {
  }

  auth() {
    this.userService.auth(this.user.email, this.user.password).subscribe(data => {
      this.userService.isAuthentication.next(true);
      this.userService.currentUser.next(data);
    });
  }

  register() { }
}
