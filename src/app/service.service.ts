import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdjustmentRecieve, PreviousAdjustmentResponse, AdjustmentSend, TeacherList, EditTeachers } from './app-interface';
import { LoaderService } from './shared/loader/loader.service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
 
@Injectable()
export class ServiceService {



  public successfullAdjustments: AdjustmentRecieve[] = [];
  public failedAdjustments: AdjustmentRecieve[] = [];
  public haveAdjustments = false;
  public previousAdjustment: PreviousAdjustmentResponse;
  public onEdit = false;
  public addAbsentList: TeacherList[] = [];
  public addExceptionList: TeacherList[] = [];
  public afterLogin:boolean;
  public absentList: EditTeachers[] = [];
  public exceptionList: EditTeachers[] = [];
  public onCatch: any;
  constructor(public http: HttpClient, public loaderService: LoaderService) { 

    this.afterLogin = false;
    
  }

  getTeachersList() {

    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('mean-token') })
    };
    return this.getRequest('fetchData/getTeacherList');
 //   return this.http.get('http://localhost:8080/fetchData/getTeacherList', httpOptions);

  }



  getReasonList() {

    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('mean-token') })
    };
    return this.getRequest('fetchData/getReasons');
  //  return this.http.get('http://localhost:8080/fetchData/getReasons', httpOptions);


  }

  initiateAdjustments(obj) {

    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('mean-token') })
    };
    return this.postRequest('adjustments/getAdjustments', obj);
  //  return this.http.post('http://localhost:8080/adjustments/getAdjustments', obj , httpOptions);


  }

  getPreviousAdjustments() {

    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('mean-token') })
    };
    return this.getRequest('edit-adjustments/fetchPreviousAdjustment');
  //  return this.http.get('http://localhost:8080/edit-adjustments/fetchPreviousAdjustment',httpOptions);
    
  }

  editAdjustments(obj) {

    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('mean-token') })
    };
    return this.postRequest('edit-adjustments/changeAdjustments', obj);
 //   return this.http.post('http://localhost:8080/edit-adjustments/changeAdjustments', obj, httpOptions);


  }

  discardAdjustments() {

    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('mean-token') })
    };
    return this.getRequest('adjustments/discardAdjustments');
 //   return this.http.get('http://localhost:8080/adjustments/discardAdjustments', httpOptions);
    

  }

  getUserData() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('mean-token') })
    };
    return this.getRequest('fetchData/getUserData');
 //   return this.http.get('http://localhost:8080/fetchData/getUserData', httpOptions);

  }


  getRequest(url: string) {
    this.showLoader();
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('mean-token') })
    };

    return this.http.get('http://localhost:8080/' + url, httpOptions).catch(this.onCatch)
            .do((res: Response) => {
                
            }, (error: any) => {
                
            })
            .finally(() => {
                this.hideLoader();
            });

  }

  postRequest(url: string, objToSend) {
    this.showLoader();
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('mean-token') })
    };

    return this.http.post('http://localhost:8080/' + url, objToSend , httpOptions).catch(this.onCatch)
            .do((res: Response) => {
                
            }, (error: any) => {
                
            })
            .finally(() => {
                this.hideLoader();
            });

  }

  private showLoader(): void {
    this.loaderService.show();
  }

  private hideLoader(): void {
    this.loaderService.hide();
  }

  
}
