import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from '../../services/auth.service';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { login, register } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store, private authService: AuthService) {}

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
      this.myForm.reset();
    }
  }
}
