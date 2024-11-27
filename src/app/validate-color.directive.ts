import { Directive, EventEmitter, HostListener, inject, input, Output, Renderer2, signal} from '@angular/core';
import { RectangleService } from './rectangle.service';


@Directive({
  selector: '[appValidateColor]',
  standalone: true
})
export class ValidateColorDirective {
  @Output() emitColorValidation = new EventEmitter();
  renderer: Renderer2 = inject(Renderer2);
  rectangleService: RectangleService = inject(RectangleService);
  // selectedColor = signal('');
  // isColorValid = signal(false); 

  @HostListener('input', ['$event'])
  validateColor(event: Event): void {
    const input = event.target as HTMLInputElement;
    const color = input.value;
    const blueRectangle = document.querySelector('.blue-rectangle');
    const rGB = this.rectangleService.hexToRgb(color);
    console.log(rGB);
    

  //   if (blueRectangle) {
  //     this.renderer.setStyle(blueRectangle, 'backgroundColor', );
  //     this.emitColorValidation.emit(this.isColorValid());
  //   }  
  //   else {
  //     this.renderer.setStyle(document.querySelector('.blue-rectangle'), 'backgroundColor', '#0000ff');
  //     // this.isColorValid.update(isValid => !isValid);
     
  // }
  }
  
}
