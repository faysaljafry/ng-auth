import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationPersonService } from './authentication-person.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements OnInit {
  user = '1';
  constructor(
    private authenticationPersonService: AuthenticationPersonService,
    private router: Router
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOninit() {
    localStorage.setItem('session', this.user);
  }

  canActivate(): boolean {
    if (!this.authenticationPersonService.gettoken()) {
      this.router.navigateByUrl('/login');
    }
    return this.authenticationPersonService.gettoken();
  }
}
