import { Injectable } from '@angular/core';

export interface RGB {
  r: number;
  g: number;
  b: number;
}

@Injectable({
  providedIn: 'root',
})
export class RectangleService {
  
  hexToRgb(hexColor: string): RGB {
    const bigint = parseInt(hexColor.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }
}