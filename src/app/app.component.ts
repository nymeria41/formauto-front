import { Component } from '@angular/core';
import {RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  standalone: true,
  imports: [RouterModule]
})
export class AppComponent {
  title = 'formauto-front';
}
