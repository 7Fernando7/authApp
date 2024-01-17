import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  templateUrl: './register-pages.component.html',
  styleUrls: ['./register-pages.component.css'],
  imports: [ ReactiveFormsModule, RouterModule ],
})
export class RegisterPagesComponent {

}
