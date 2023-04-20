import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { logOut } from 'src/app/auth/store/actions/auth.actions';
import { selectUser } from 'src/app/auth/store/auth.selector';
import { UserInterface } from 'src/app/shared/types/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user: UserInterface | undefined

  constructor(private store: Store, private router: Router) {}

  logOut() {
    this.store.dispatch(logOut())
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
    this.store.pipe(select(selectUser)).subscribe((user: UserInterface | null) => {
      if (user !== null) {
        this.user = user;
      }
    });
  }
}
