import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { updateUser } from 'src/app/auth/store/actions/auth.actions';
import { selectUser } from 'src/app/auth/store/auth.selector';
import { UserInterface } from 'src/app/shared/types/user.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  settingsForm!: FormGroup;
  user: UserInterface | undefined

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.store.pipe(select(selectUser)).subscribe((user: UserInterface | null) => {
      if (user !== null) {
        this.user = user;
      }
    });

    this.settingsForm = this.fb.group({
      username: [this.user?.username, Validators.required],
      email: [this.user?.email, Validators.required],
      avatar: [this.user?.avatar, Validators.required],
    });
  }

  onSubmit() {
    const updatedUser:UserInterface = {
        ...this.user,
        ...this.settingsForm.value
    };

    this.store.dispatch(updateUser({ user: updatedUser }));
  }
}
