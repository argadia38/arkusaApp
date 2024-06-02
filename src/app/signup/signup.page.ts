import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  email: string = '';
  password: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastController: ToastController
  ) {}

  async signUp(form: NgForm) {
    if (form.invalid) {
      this.showToast('Please fill out all fields correctly', 'danger', 'bottom');
      return;
    }

    try {
      await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
      this.router.navigate(['/get-started']); // Redirect ke halaman Get Started
      this.showToast('Sign up successful!', 'success', 'bottom'); // Show success toast at bottom
    } catch (error) {
      console.error('Error during sign up:', error);
      this.showToast('Sign up failed. Please try again.', 'danger', 'bottom'); // Show error toast at bottom
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
