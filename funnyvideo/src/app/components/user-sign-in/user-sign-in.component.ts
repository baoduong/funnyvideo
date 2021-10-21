import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  login() { }
}
