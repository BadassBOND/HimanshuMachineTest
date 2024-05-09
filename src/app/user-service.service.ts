import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceService {

  public data:any;
  public url: any;
  
  set profileData(value:any) {
    this.data = value
  }

  get profileData():any {
    return this.data;
  }

  set profilePhoto(value:any){
    this.url = value
  }

  get profilePhoto():any{
    return this.url
  }

}