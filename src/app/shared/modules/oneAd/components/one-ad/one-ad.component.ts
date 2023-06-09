
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { updateUser } from 'src/app/auth/store/actions/auth.actions';
import { selectUser } from 'src/app/auth/store/auth.selector';
import { AdService } from 'src/app/shared/services/ads.service';
import { UserService } from 'src/app/shared/services/users.service';
import { AdInterface } from 'src/app/shared/types/ad.interface';
import { UserInterface } from 'src/app/shared/types/user.interface';
import {AuthorInterface} from 'src/app/shared/types/author.interface'

@Component({
  selector: 'app-one-ad',
  templateUrl: './one-ad.component.html',
  styleUrls: ['./one-ad.component.scss']
})
export class OneAdComponent implements OnInit {
  id!: string
  user!: UserInterface
  ad: AdInterface | undefined;
  yourAd = false
  isFavorited = false
  isEditing = false
  newAbout = ''
  newTitle = ''
  author: AuthorInterface | undefined
  comment: string = '';

  constructor(private route: ActivatedRoute, private store: Store, private router: Router, private adService: AdService, private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.store.pipe(select(selectUser)).subscribe((user: UserInterface | null) => {
      if (user !== null) {
        this.user = user;
      }
    });

    this.adService.getAdById(this.id).subscribe(ad => {
      this.ad = ad;
      this.yourAd = ad.userId === this.user.id
      this.isFavorited = !!this.user.favorites.find(f => f === this.id)
      this.newAbout = ad.text
      this.newTitle = ad.title
      this.userService.getUsersById(ad.userId).subscribe(author => {
        this.author = {
          avatar: author.avatar,
          username: author.username,
          id: author.id
        }
      })
    })
  }

  editSwitcher() {
    this.isEditing = !this.isEditing
  }

  onEdit() {
    const newAd: AdInterface = {
      ...this.ad!,
      title: this.newTitle,
      text: this.newAbout
    }

    this.adService.updateAd(this.id, newAd).subscribe(
      () => {
        this.isEditing = false
        return this.router.navigate(['/profile'])
      },
      error => console.log('Edited error:', error)
    );
  }

  onDelete() {
    this.adService.deleteAd(this.id).subscribe(
      () => this.router.navigate(['/profile']),
      error => console.log('Delete error:', error)
    );
  }

  onFavorite() {
    const updatedUser:UserInterface = {
        ...this.user,
        favorites: [...this.user.favorites, this.id]
    };

    this.store.dispatch(updateUser({ user: updatedUser }));
    this.router.navigate(['/profile']);
  }

  onRemoveFromFavorite() {
    const updatedUser:UserInterface = {
        ...this.user,
        favorites: this.user.favorites.filter(f => f !== this.id)
    };

    this.store.dispatch(updateUser({ user: updatedUser }));
    this.router.navigate(['/profile']);
  }

  submitComment() {
    if (this.ad) {
      const newAd: AdInterface = {
        ...this.ad,
        comments: [
          ...this.ad.comments,
          {
            commentAbout: this.comment,
            user: {
              username: this.user.username,
              avatar: this.user.avatar,
              id: this.user.id
            }
        }]
      }

      this.adService.updateAd(this.id, newAd).subscribe(
        () => {
          this.isEditing = false
          return this.router.navigate(['/profile'])
        },
        error => console.log('Edited error:', error)
      );

      this.comment = '';
    }
  }
}
