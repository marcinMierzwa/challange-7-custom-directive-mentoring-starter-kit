import { Directive, inject, Renderer2 } from '@angular/core';
import { SharedService } from '../Services/shared.service';
import {
  FormControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appValidateColor]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidateColorDirective,
      multi: true,
    },
  ],
})
export class ValidateColorDirective implements Validator {
  renderer: Renderer2 = inject(Renderer2);
  rectangleService: SharedService = inject(SharedService);

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
        invalidColorError: true,
      };
    }
  }
}

