import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async logout() {
    try {
      await this.afAuth.signOut();
      this.router.navigate(['/welcome']); // Redirect ke halaman welcome setelah logout
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }
}
