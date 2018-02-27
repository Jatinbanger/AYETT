import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {


  public afterLogin:boolean;
  constructor() { 

    this.afterLogin = false;

  }

}
