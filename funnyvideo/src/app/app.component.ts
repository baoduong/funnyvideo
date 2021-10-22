import { Component } from '@angular/core';
import { UserManagementService } from './@services/user-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'funnyvideo';

  constructor(private userService: UserManagementService) {
    this.userService.isAuthentication.next(sessionStorage.getItem('IS_AUTHENTICATION') === 'AUTHENTICATED');
    const currentUser = sessionStorage.getItem('USER');
    if (currentUser) {
      const _user = JSON.parse(currentUser);
      this.userService.currentUser.next(_user)
    } else {
      this.userService.logout();
    }
  }
}
