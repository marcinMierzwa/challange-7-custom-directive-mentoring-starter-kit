import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseSendBackground } from '../Models/send-background-api-response';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpClient: HttpClient = inject(HttpClient);

  createBackground(
    backgroundRgbColor: string
  ): Observable<ResponseSendBackground[]> {
    return this.httpClient.post<ResponseSendBackground[]>(
      'https://643a957dbd3623f1b9b6accc.mockapi.io/colors',
      { value: backgroundRgbColor }
    );
  }
}
