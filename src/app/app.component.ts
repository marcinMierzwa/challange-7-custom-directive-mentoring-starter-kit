import { Component, signal } from '@angular/core';
import { ResizeDirective } from './Custom Directives/resize.directive';
import { ValidateColorDirective } from './Custom Directives/validate-color.directive';
import { ErrorMessageDirective } from './Custom Directives/error-message.directive';
import { FormsModule } from '@angular/forms';
import { GetBackgroundColorDirective } from './Custom Directives/get-background-color.directive';
import { ShowModalIfDirective } from './Custom Directives/show-modal-if.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ResizeDirective, ValidateColorDirective, ErrorMessageDirective, GetBackgroundColorDirective, ShowModalIfDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-program-starter-kit';
  inputColorPicker = '#0000ff' 
  isHelpSectionOpen = signal(false); 


}
