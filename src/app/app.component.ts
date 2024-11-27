import { Component, signal, WritableSignal } from '@angular/core';
import { ResizeDirective } from './resize.directive';
import { ValidateColorDirective } from './validate-color.directive';
import { ErrorMessageDirective } from './error-message.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ResizeDirective, ValidateColorDirective, ErrorMessageDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-program-starter-kit';
  isColorValid = signal(false);

  handleColorValidation(isColorValid: boolean) {
    this.isColorValid.set(isColorValid);
    
  }
  



}
