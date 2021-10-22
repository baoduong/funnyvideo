import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserManagementService } from 'src/app/@services/user-management.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  isAuthenticated$ = new BehaviorSubject<boolean>(false);
  constructor(private userService: UserManagementService) {
    this.userService.isAuthentication.subscribe(value => {
      this.isAuthenticated$.next(value)
    })
  }

  ngOnInit(): void {
  }
}
