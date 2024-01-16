import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2'


@Component({
  standalone: true,
  templateUrl: './login-pages.component.html',
  imports: [ ReactiveFormsModule ],

  styleUrls: ['./login-pages.component.css']
})
export class LoginPagesComponent {

  private fb = inject( FormBuilder );
  private authService= inject( AuthService );

  public myForm: FormGroup = this.fb.group({
    email: ['fernando@google.com', [ Validators.required, Validators.email ]],
    password: ['1234567', [ Validators.required, Validators.minLength(6) ]],

  });

  login() {
    const { email, password } = this.myForm.value;
    this.authService.login( email, password )
    .subscribe( {
      next: () => console.log('Todo bien!'),
      error: (message) => {
        Swal.fire( 'Error', message, 'error' )
      }
    })


  }

}
