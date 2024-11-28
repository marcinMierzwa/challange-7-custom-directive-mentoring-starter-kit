import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowModalIf]',
  standalone: true
})
export class ShowModalIfDirective {
  private _templateRef: TemplateRef<any> = inject(TemplateRef);
  private _viewContainer: ViewContainerRef = inject(ViewContainerRef);
  appShowModalIf = input(false);

  constructor() {
    effect(() => {
      if (this.appShowModalIf()) {
        this._viewContainer.createEmbeddedView(this._templateRef)
      } else {
        this._viewContainer.clear();
      }
    
        })
      }
    }
