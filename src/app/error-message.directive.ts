import { Directive, inject, Signal, signal, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appErrorMessage]',
  standalone: true
})
export class ErrorMessageDirective {
  isColorValid!: Signal<boolean>; 
  private _templateRef: TemplateRef<any> = inject(TemplateRef);
  private _viewContainer: ViewContainerRef = inject(ViewContainerRef);



}
