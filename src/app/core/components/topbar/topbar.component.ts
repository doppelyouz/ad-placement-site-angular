import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectError, selectLoading, selectUser } from 'src/app/auth/store/auth.selector';
import { UserInterface } from 'src/app/shared/types/user.interface';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  user$!: Observable<UserInterface | null>
  loading$!: Observable<boolean>
  error$!: Observable<string | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(selectUser))
    this.loading$ = this.store.pipe(select(selectLoading))
    this.error$ = this.store.pipe(select(selectError))
  }
}
