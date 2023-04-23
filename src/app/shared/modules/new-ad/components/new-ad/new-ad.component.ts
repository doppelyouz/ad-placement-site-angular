import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { updateUser } from 'src/app/auth/store/actions/auth.actions';
import { selectUser } from 'src/app/auth/store/auth.selector';
import { AdService } from 'src/app/shared/services/ads.service';
import { AdRequestInterface } from 'src/app/shared/types/adRequest.interface';
import { UserInterface } from 'src/app/shared/types/user.interface';

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.scss']
})
export class NewAdComponent implements OnInit {

  categories: string[] = ['Services', 'Real estate', 'Electronics', 'Sport', 'Repair'];
  myForm: FormGroup;
  user!: UserInterface

  constructor(private fb: FormBuilder, private store: Store, private adService: AdService) {
    this.myForm = this.fb.group({
      category: ['', Validators.required],
      title: ['', Validators.required],
      text: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {

      const request: AdRequestInterface = {
        ...this.myForm.value
      }

      this.adService.createAd(this.user.id, request).subscribe((ad => {
        const updatedUser: UserInterface = {
            ...this.user!,
            ads: [...this.user?.ads!, ad.id]
        };
        this.store.dispatch(updateUser({ user: updatedUser }));
        this.myForm.reset();
      }));

    }
  }

  ngOnInit() {
    this.store.pipe(select(selectUser)).subscribe((user) => {
      this.user = user as UserInterface
    })
  }
}
