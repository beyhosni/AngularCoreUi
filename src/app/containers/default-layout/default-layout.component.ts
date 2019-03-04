import { AuthenticationService } from './../../auth-module/services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems, navItemsUser } from './../../_nav';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = navItems;
  public navItemsUser = navItemsUser;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;

  constructor(private route: Router,
              private authservice: AuthenticationService ,
              @Inject(DOCUMENT) _document?: any) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.authservice.isAuth = false;
    this.route.navigateByUrl('/login');
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }

  isAdmin() {
    return this.authservice.isAdmin();
  }

}
