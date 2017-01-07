import { Component } from '@angular/core';

@Component({
    moduleId: module.id,// to use a relative path
  selector: 'navbar',
  templateUrl: `navbar.component.html`,
})
export class NavbarComponent  { name = 'Angular'; }
