import { Router } from '@angular/router';
import { UserServiceService } from './../../services/user-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nouveau-user',
  templateUrl: './nouveau-user.component.html',
  styleUrls: ['./nouveau-user.component.scss']
})
export class NouveauUserComponent implements OnInit, OnDestroy {


  checkAdmin: Boolean = true;
  subscription: Subscription;
  showDeleteAlert: Boolean = false;
  role: Boolean = false;
  credentials = {
    username: '',
    email: '',
    password: '',
    confirmedPassword: '',
  };

  constructor(private userService: UserServiceService,
              private router: Router) { }

  ngOnInit() {
  }

  onChangeAdm() {
    this.checkAdmin = !this.checkAdmin;
  }

  register(user) {
  this.subscription = this.userService.add(user).subscribe(
    (value) => {
      this.showDeleteAlert = true;
      console.log('Subscription Ok !');
    },
    (error) => {
      console.log('An error occurred! : ' + error);
    },
    () => {
      console.log('Observable complete!');
    }
  );
  }

  onNaviguateListeUser() {
    this.router.navigateByUrl('/utilisateurs');
  }

  ngOnDestroy(): void {
    if (this.subscription !== undefined) { this.subscription.unsubscribe(); }
  }
}
