import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenService } from '../service/hardcoded-authen.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 // isUserLoggedIn: boolean=false;

  constructor(public hardcode: HardcodedAuthenService) { }

  ngOnInit(): void {
    //this.isUserLoggedIn=this.hardcode.isUserLoggedIn();
  }
 
}
