import { Component, OnInit, Input, Output } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() navbartoggle: boolean = false

  toggleNav(): void {
    if(this.navbartoggle){
      this.navbartoggle = false
    } else {
      this.navbartoggle = true
    }
    console.log(this.navbartoggle)
  }

  constructor() { 
  
  }

  ngOnInit(): void {

  }

}
