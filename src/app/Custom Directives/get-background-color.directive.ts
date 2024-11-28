import { Directive, HostListener, inject } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { ResponseSendBackground } from '../Models/send-background-api-response';

@Directive({
  selector: '[appGetBackgroundColor]',
  standalone: true,
})
export class GetBackgroundColorDirective {
  apiService: ApiService = inject(ApiService);

  @HostListener('dblclick', ['$event'])
  getBackgroudColor(event: Event) {
    const element = event.target as HTMLElement;
    const backgroundRgbColor = element.style.backgroundColor;
    this.apiService.createBackground(backgroundRgbColor).subscribe({
      next: (res: ResponseSendBackground[]) => {
        alert(
          `Background Color: ${backgroundRgbColor} succesfully created!`
        );
      },
      error: (err) => alert(`Something went wrong! Backgroud Color not sent! ${err.message}`),
    });
  }
}
