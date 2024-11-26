import { Directive, HostListener, inject, Renderer2, signal} from '@angular/core';

export interface RGBFormat {
  RR: number;
  GG: number;
  BB: number;
}

@Directive({
  selector: '[appValidateColor]',
  standalone: true
})
export class ValidateColorDirective {
  private renderer: Renderer2 = inject(Renderer2);
  selectedColor = signal('');
  isColorValid = signal(false); 

  @HostListener('input', ['$event'])
  onColorChange(event: Event): void {
    const element = event.target as HTMLInputElement;
    this.selectedColor.set(element.value);
    this.validateColor()
  }

  hexToRgb(color: string): RGBFormat {
    const hex = color.replace(/^#/, '');
    const RGB: RGBFormat = {
      RR: parseInt(hex.charAt(0) + hex.charAt(0), 16),
      GG: parseInt(hex.charAt(1) + hex.charAt(1), 16),
      BB: parseInt(hex.charAt(2) + hex.charAt(2), 16)
    }
    return RGB
  }

  validateColor() {
    const colorToValidate: RGBFormat = this.hexToRgb(this.selectedColor());
    const {RR, GG, BB} = colorToValidate;
    const blueRectangle = document.querySelector('.blue-rectangle');

    if (RR > BB + GG) {
      this.renderer.setStyle(blueRectangle, 'backgroundColor', this.selectedColor());
    }  
    else {
      this.renderer.setStyle(document.querySelector('.blue-rectangle'), 'backgroundColor', '#0000ff');
      this.isColorValid.update(isValid => !isValid);
    }  
  }

  
}
