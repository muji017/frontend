import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent {

  constructor(private router:Router){}

  onLogout(){
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminId')
    this.router.navigate(['/auth/admin'])

  }
}
