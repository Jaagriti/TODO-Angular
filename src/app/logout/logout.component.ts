import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenService } from '../service/hardcoded-authen.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public hardcode:  HardcodedAuthenService) { }

  ngOnInit(): void {
    this.hardcode.logout();
  }

}
