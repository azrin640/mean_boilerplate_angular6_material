import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon( 'coding', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/coding.svg'));
    iconRegistry.addSvgIcon( 'development', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/development.svg'));
    iconRegistry.addSvgIcon( 'design', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/design.svg'));
    iconRegistry.addSvgIcon( 'ui', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ui.svg'));
    iconRegistry.addSvgIcon( 'devices', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/devices.svg'));
    iconRegistry.addSvgIcon( 'payment', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/payment.svg'));
  }

  ngOnInit() {
  }

}
