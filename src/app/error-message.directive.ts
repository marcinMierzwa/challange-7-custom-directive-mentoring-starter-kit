import { Directive, effect, inject, input, Input, Signal, signal, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appErrorMessage]',
  standalone: true
})
export class ErrorMessageDirective {
  appErrorMessage = input()
  private _templateRef: TemplateRef<any> = inject(TemplateRef);
  private _viewContainer: ViewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
  if (this.appErrorMessage()){
    this._viewContainer.createEmbeddedView(this._templateRef)
  } else {
    this._viewContainer.clear();
  }

    })
  }
  
 sendIsColorValid(isColorValid: boolean) {
  console.log(isColorValid);
  
 }


}
