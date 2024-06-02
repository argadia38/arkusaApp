import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastController: ToastController
  ) {}

  async login(form: NgForm) {
    if (form.invalid) {
      this.showToast('Please fill out all fields', 'danger', 'middle');
      return;
    }

    try {
      await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      this.router.navigate(['/get-started']); // Redirect ke halaman Get Started
      this.showToast('Login successful!', 'success', 'top'); // Show success toast at bottom
    } catch (error) {
      console.error('Error during login:', error);
      this.showToast('Login failed. Please try again.', 'danger', 'middle'); // Show error toast at bottom
    }
  }

  async showToast(message: string, color: string, position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position // Set position of the toast
    });
    toast.present();
  }
}
