import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserManagementService } from 'src/app/@services/user-management.service';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSignInComponent implements OnInit {

  currentUser$ = new BehaviorSubject<any>(undefined);

  constructor(private userService: UserManagementService, private router: Router) {
    this.userService.currentUser.subscribe(data => {
      this.currentUser$.next(data)
    })
  }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout()
  }

  share() {
    this.router.navigate(['share-link'])
  }
}
