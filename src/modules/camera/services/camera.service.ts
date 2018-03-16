export abstract class CameraService {
  public abstract getPicture(dim:object): Promise<string>;
  public abstract getPreview(dim:object);
}
