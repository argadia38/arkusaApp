import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.page.html',
  styleUrls: ['./get-started.page.scss'],
})
export class GetStartedPage {

  constructor(private router: Router) {}

  continue() {
    // Tambahkan logika yang diperlukan saat pengguna melanjutkan
    this.router.navigate(['/home']); // Redirect ke halaman home atau halaman lainnya
  }
}
