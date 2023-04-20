import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
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
  user$!: Observable<UserInterface | null>
  id: string | undefined

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

      this.user$.subscribe(user => {
        this.id = user?.id
      })

      this.adService.createAd(this.id!, request).subscribe((ad => {
        console.log(ad);
      }));

      this.myForm.reset();
    }
  }

  ngOnInit() {
    this.user$ = this.store.pipe(select(selectUser))
  }
}
