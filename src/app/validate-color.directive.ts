import {
  Directive,
  EventEmitter,
  HostListener,
  inject,
  Output,
  Renderer2,
  signal,
} from '@angular/core';
import { RectangleService } from './rectangle.service';

@Directive({
  selector: '[appValidateColor]',
  standalone: true,
})
export class ValidateColorDirective {
  @Output() emitIsColorValid = new EventEmitter();
  renderer: Renderer2 = inject(Renderer2);
  rectangleService: RectangleService = inject(RectangleService);
  isColorValid = signal(false);

  @HostListener('input', ['$event'])
  validateColor(event: Event): void {
    const input = event.target as HTMLInputElement;
    const color = input.value;
    const rectangle = document.querySelector('.rectangle');
    const rgb = this.rectangleService.hexToRgb(color);
    const { r, g, b } = rgb;

    if (r > g + b) {
      this.renderer.setStyle(rectangle, 'background-color', color);
      this.isColorValid.set(false);
    } else {
      this.renderer.setStyle(
        document.querySelector('.rectangle'),
        'backgroundColor',
        '#0000ff'
      );
      this.isColorValid.set(true);
    }
    this.emitIsColorValid.emit(this.isColorValid());
  }
}
