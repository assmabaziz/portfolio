import { CommonModule } from '@angular/common';
import { TitleServiceService } from './../shared/services/title-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  title$ = this.titleService.title$;
constructor(private titleService: TitleServiceService){}



}
