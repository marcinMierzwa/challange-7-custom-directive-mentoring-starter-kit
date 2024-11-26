import { Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appValidateColor]',
  standalone: true
})
export class ValidateColorDirective {
  @Input('appValidateColor') selectedColor: string = '';

  // You can use the value property anywhere in the directive
  ngOnChanges(): void {
    console.log('Directive received value:', this.value);
  }

  
}
