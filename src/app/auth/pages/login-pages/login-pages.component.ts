import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2'

import { AuthService } from '../../services/auth.service';



@Component({
  standalone: true,
  templateUrl: './login-pages.component.html',
  imports: [ ReactiveFormsModule, RouterModule ],

  styleUrls: ['./login-pages.component.css']
})
export class LoginPagesComponent {

  private fb          = inject( FormBuilder );
  private authService = inject( AuthService );
  private router      = inject( Router );

  public myForm: FormGroup = this.fb.group({
    email: ['fernando@google.com', [ Validators.required, Validators.email ]],
    password: ['123456', [ Validators.required, Validators.minLength(6) ]],

  });

  login() {
    const { email, password } = this.myForm.value;
    this.authService.login( email, password )
    .subscribe( {
      next: () => this.router.navigate(['/dashboard']),
      error: (message) => {
        Swal.fire( 'Error', message, 'error' )
      }
    })


  }

}
