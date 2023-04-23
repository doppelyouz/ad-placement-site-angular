import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from '../../services/auth.service';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { login } from '../../store/actions/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  onSubmit() {
    if (this.myForm.valid) {
      const request: LoginRequestInterface = {
        ...this.myForm.value
      }

      this.store.dispatch(login({loginRequest: request}))
      this.router.navigate(['/'])
      this.myForm.reset();
    }
  }
}
