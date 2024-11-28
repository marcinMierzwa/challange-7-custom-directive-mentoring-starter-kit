import { Injectable } from '@angular/core';
import { RGB } from '../Models/rgb-model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  hexToRgb(hex: string): RGB {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }
}
