import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isSlideOut=true;
    
  toggleSlideOut(){
    this.isSlideOut=!this.isSlideOut;
  }

  constructor(private router:Router) {
    
  }

  onDash(){
    this.router.navigate(['/emp/dashboard']);
  }
  onlogin(){
    this.router.navigate(['/emp/login']);
  }
  onLogout(){
    this.router.navigate(['/emp/login']);
  }
  onemp(){
    this.router.navigate(['/emp/employee']);
  }

}