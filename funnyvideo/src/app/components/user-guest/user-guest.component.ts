import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-guest',
  templateUrl: './user-guest.component.html',
  styleUrls: ['./user-guest.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserGuestComponent implements OnInit {

  constructor() { }

  user = {
    username: '',
    password: ''
  }

  ngOnInit(): void {
  }

  login() { }
}
