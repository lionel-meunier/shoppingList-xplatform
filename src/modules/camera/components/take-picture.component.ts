import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {CameraService} from '../services';
import {AngularFireStorage} from 'angularfire2/storage';

@Component({
  selector: 'app-take-picture',
  templateUrl: 'take-picture.component.html',
  styleUrls: ['take-picture.component.scss'],
})
export class TakePictureComponent implements OnInit {
  public imageSrc: Promise<string>;
  public displayPreview: boolean;

  constructor(private _cameraService: CameraService,
              private _myElement: ElementRef,
              private storage: AngularFireStorage) {
  }

  ngOnInit() {
    this._initPreview();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(event.target.innerWidth, this._myElement.nativeElement.width);
  }

  private _initPreview() {
    this.displayPreview = true;
    this._cameraService.getPreview({width: 600, height: 600}).then((stream) => {
      let video = this._myElement.nativeElement.querySelector('#preview');
      video.src = window.URL.createObjectURL(stream);
      video.onloadedmetadata = function (e) {
        video.play();
      };
    });
  }

  public takePhoto(): void {
    this.imageSrc = this._cameraService.getPicture({width: 600, height: 600}).then((url) => {
      this.displayPreview = false;
      return url;
    });
  }

  public deletePhoto(): void {
    this.imageSrc = null;
    this._initPreview();
  }

  public savePhoto(): void {
    this.imageSrc.then((url) => {
      console.log('save photo', url);
      fetch(url)
        .then((response) => {
          return response.blob();
        })
        .then((blob) =>{
          console.log(blob);
          let file = this._blobToFile(blob, 'test');
          this.storage.upload('filePath', file);
          // here the image is a blob
        });
    });
    //const task = this.storage.upload(filePath, file);
  }

  private _blobToFile = (theBlob: Blob, fileName:string): File => {
    var b: any = theBlob;
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;

    //Cast to a File() type
    return <File>theBlob;
  }
}
