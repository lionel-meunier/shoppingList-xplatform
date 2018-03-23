import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
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
  private _widthPicture: number = 600;
  private _heightPicture: number = 300;
  @Input('aqf-name') pictureName: string;
  @Output('aqf-add') addPicture = new EventEmitter();

  constructor(private _cameraService: CameraService,
              private _myElement: ElementRef,
              private storage: AngularFireStorage) {
  }

  ngOnInit() {
    this._initPreview();
  }

  private _initPreview() {
    this.displayPreview = true;
    this._cameraService.getPreview({width: this._widthPicture, height: this._heightPicture}).then((stream) => {
      let video = this._myElement.nativeElement.querySelector('#preview');
      video.src = window.URL.createObjectURL(stream);
      video.onloadedmetadata = function (e) {
        video.play();
      };
    });
  }

  public takePhoto(): void {
    this.imageSrc = this._cameraService.getPicture({width: this._widthPicture, height: this._heightPicture}).then((url) => {
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
      fetch(url)
        .then((response) => {
          return response.blob();
        })
        .then((blob) => {
          const file = this._blobToFile(blob, 'test');
          const filePath = 'images/' + this.pictureName;
          this.storage.upload(filePath, file).then((result) => {
            this.addPicture.emit(result.downloadURL);
          });
        });
    });
  }

  private _blobToFile = (theBlob: Blob, fileName: string): File => {
    var b: any = theBlob;
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;

    //Cast to a File() type
    return <File>theBlob;
  };
}
