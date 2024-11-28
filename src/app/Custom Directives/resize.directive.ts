import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appResize]',
  standalone: true,
})
export class ResizeDirective {
  private element: ElementRef = inject(ElementRef);
  private renderer: Renderer2 = inject(Renderer2);

  private resizing = false;
  private startX = 0;
  private startWidth = 0;

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    this.resizing = true;
    this.startX = event.clientX;
    this.startWidth = this.element.nativeElement.offsetWidth;
    event.preventDefault();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.resizing) {
      const deltaX = event.clientX - this.startX;
      const newWidth = this.startWidth + deltaX;
      this.renderer.setStyle(
        this.element.nativeElement,
        'width',
        `${newWidth}px`
      );
      this.renderer.addClass(this.element.nativeElement, 'grabbing');
    }
  }

  @HostListener('mouseup')
  onMouseUp(): void {
    this.resizing = false;
    this.renderer.removeClass(this.element.nativeElement, 'grabbing');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.resizing = false;
    this.renderer.removeClass(this.element.nativeElement, 'grabbing');
  }
}
