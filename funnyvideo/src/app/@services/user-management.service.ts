import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserManagementService {

  constructor(private httpClient: HttpClient) { }

  public isAuthentication = new BehaviorSubject<boolean>(false);
  public currentUser = new BehaviorSubject<any>(undefined);

  auth(email: string, password: string) {
    return this.httpClient.post(`${environment.api}/auth`, {
      email: email,
      password: password
    }).pipe(
      filter(data => !!data),
      tap(data => {
        this.isAuthentication.next(true);
        this.currentUser.next(data);
        sessionStorage.setItem('USER', JSON.stringify(data));
        sessionStorage.setItem('IS_AUTHENTICATION', 'AUTHENTICATED');
      })
    );
  }

  logout() {
    sessionStorage.clear();
    this.isAuthentication.next(false);
    this.currentUser.next(undefined)
  }
}
