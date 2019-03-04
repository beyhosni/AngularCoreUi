import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNewUser() {
    this.router.navigateByUrl('utilisateurs/nouveau-utilisateur');
  }

  onUpdateUser() {

  }

  onDeleteUser() {

  }

}
