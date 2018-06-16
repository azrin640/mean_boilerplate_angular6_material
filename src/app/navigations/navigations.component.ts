import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.scss']
})


export class NavigationsComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  

}
