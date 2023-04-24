import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/users.service';
import { UserInterface } from 'src/app/shared/types/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user: UserInterface | undefined

  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userService.getUsersById(params['id']).subscribe(user => {
        this.user = user;
      })
    });
  }
}
