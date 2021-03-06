/*
============================================
; Title: NodeQuiz, LLC.
; Author: Jason Sullenger
; Date: 25 September 2019
; Description: Presentation and quiz site - MEAN stack
;===========================================
*/

import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let isAuthenticated = this.cookieService.get("isAuthenticated");

    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(["/session/login"]);
      return false;
    }
  }
}
