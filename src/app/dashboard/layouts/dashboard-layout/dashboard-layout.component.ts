import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {

  private authService = inject( AuthService );

  public user = computed( () => this.authService.currentUser() );

  // get user() {
  //   return this.authService.currentUser();
  // }

}
