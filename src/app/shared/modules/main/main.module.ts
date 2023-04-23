import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ]
})
export class MainModule { }
