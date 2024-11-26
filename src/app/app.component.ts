import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResizeDirective } from './resize.directive';
import { ValidateColorDirective } from './validate-color.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResizeDirective, ValidateColorDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-program-starter-kit';
  // selectedColor = signal('#0000ff');

  // onColorChange(event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   this.selectedColor.set(input.value); 
  //   console.log('Selected color:', this.selectedColor());
  // }    
  



}
