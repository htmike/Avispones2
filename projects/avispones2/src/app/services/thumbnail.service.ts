import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThumbnailService {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  thumbnail: Observable<string>;

  constructor( width?: number, height?: number) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = width || 341;
    this.canvas.height = height || 256;
    this.context = this.canvas.getContext('2d');
  }

  transform( media: File ): Observable<string> {
    let file: Image;
    if ( !media.type.includes('image') ) {
      return file;
    } else {
      file = new Image();
      file.src = URL.createObjectURL(media);
      return new Observable( observer => {
        file.onload = () => {
          this.context.drawImage(file, 0, 0, 341, 256);
          observer.next( this.canvas.toDataURL() );
        }
      }
    }
  }

}

