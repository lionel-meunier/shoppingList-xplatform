
import {Article} from './article.model';

describe(' article model', () => {

  let myInstance: Article;
  beforeEach(() => { myInstance = new Article(); });

  it('parse data and set id', () => {
    myInstance.parseData('testId',{
      name : 'testName',
      pictureUrl : 'testPictureUrl'
    });

    expect(myInstance.id).toBe('testId');
    expect(myInstance.name).toBe('testName');
    expect(myInstance.pictureUrl).toBe('testPictureUrl');
  });

  it('export data return object', () => {
    myInstance.parseData('testId',{
      name : 'testName',
      pictureUrl : 'testPictureUrl'
    });

    const data = myInstance.exportData();
    expect(data.name).toBe('testName');
    expect(data.pictureUrl).toBe('testPictureUrl');
  });

});
