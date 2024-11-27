import {
  Directive,
  inject,
  Renderer2,
} from '@angular/core';
import { RectangleService } from './rectangle.service';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidateColor]',
  standalone: true,
  providers: [
    { 
    provide: NG_VALIDATORS, useExisting:ValidateColorDirective, multi: true
    }],
})
export class ValidateColorDirective implements Validator {

  renderer: Renderer2 = inject(Renderer2);
  rectangleService: RectangleService = inject(RectangleService);


  validate(control: FormControl): ValidationErrors | null {
    const color = control.value;
  
    if (color != null) {
      const rectangle = document.querySelector('.rectangle');
      const rgb = this.rectangleService.hexToRgb(color);
      const { r, g, b } = rgb;
  
      if (r > g + b) {
        this.renderer.setStyle(rectangle, 'background-color', color);
        return null;
      } else {
        this.renderer.setStyle(rectangle, 'backgroundColor', '#0000ff');
        return { invalidColorError: true }; 
      }
    } else {
      return {
        invalidColorError: true
      };
    }
  }












}


// @Output() emitIsColorValid = new EventEmitter();
// renderer: Renderer2 = inject(Renderer2);
// rectangleService: RectangleService = inject(RectangleService);
// isColorValid = signal(false);

// @HostListener('input', ['$event'])
// validateColor(event: Event): void {
//   const input = event.target as HTMLInputElement;
//   const color = input.value;
//   const rectangle = document.querySelector('.rectangle');
//   const rgb = this.rectangleService.hexToRgb(color);
//   const { r, g, b } = rgb;

//   if (r > g + b) {
//     this.renderer.setStyle(rectangle, 'background-color', color);
//     this.isColorValid.set(false);
//   } else {
//     this.renderer.setStyle(
//       document.querySelector('.rectangle'),
//       'backgroundColor',
//       '#0000ff'
//     );
//     this.isColorValid.set(true);
//   }
//   this.emitIsColorValid.emit(this.isColorValid());
// }

