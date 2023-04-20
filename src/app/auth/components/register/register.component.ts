
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from '../../services/auth.service';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { register } from '../../store/actions/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required]],
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }
  onSubmit() {
    if (this.myForm.valid) {

      const request: RegisterRequestInterface = {
        ...this.myForm.value
      }

      this.store.dispatch(register({registerRequest: request}))
      this.myForm.reset();
      this.router.navigate(['/login']);
    }
  }
}

