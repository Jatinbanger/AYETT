import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { Router } from '@angular/router';
import { PreviousAdjustmentResponse, EditTeachers } from '../../app-interface';

@Component({
  selector: 'app-view-adjustments',
  templateUrl: './view-adjustments.component.html',
  styleUrls: ['./view-adjustments.component.css']
})
export class ViewAdjustmentsComponent implements OnInit {

  public absentExceptionData: PreviousAdjustmentResponse = new PreviousAdjustmentResponse();
  public absentList: EditTeachers[] = [];
  public exceptionList: EditTeachers[] = [];
  public listToEdit = [];
  public loadAdjustmentFlag = false;
  public editGrid = '';
  public editAbsentList = [];
  public editExceptionList = [];
  constructor(public serviceObj: ServiceService,public router: Router) { }

  ngOnInit() {

    this.serviceObj.getPreviousAdjustments().subscribe((previousAdjustmentData: PreviousAdjustmentResponse) => {

      this.serviceObj.previousAdjustment = previousAdjustmentData;
      let adjustedAdjustmentMap = [];
      let failedAdjustmentMap = [];
      if (this.serviceObj.previousAdjustment) {
        this.serviceObj.haveAdjustments = true;
        if (this.serviceObj.previousAdjustment.adjustmentList) {
          const  adjustmentList = this.serviceObj.previousAdjustment.adjustmentList;
          adjustedAdjustmentMap = adjustmentList
          let adjustedKeyList = Object.keys(adjustedAdjustmentMap);
          for (let j= 0 ; j < adjustedKeyList.length ; j++) {
    
          let adjustedTeacher = adjustedAdjustmentMap[adjustedKeyList[j]];
          for (let h = 0 ; h < adjustedTeacher.length ; h++) {
    
            this.serviceObj.successfullAdjustments.push(adjustedTeacher[h]);
    
          }
    
          }
    
          }
          if (this.serviceObj.previousAdjustment.failedAdjustmentList) {
            const  failedAdjustmentList = this.serviceObj.previousAdjustment.failedAdjustmentList;
            failedAdjustmentMap = failedAdjustmentList;
            let failedKeyList = Object.keys(failedAdjustmentMap);
            for (let j= 0 ; j < failedKeyList.length ; j++) {
      
            let failedTeacher = failedAdjustmentMap[failedKeyList[j]];
            for (let h = 0 ; h < failedTeacher.length ; h++) {
      
              this.serviceObj.failedAdjustments.push(failedTeacher[h]);
      
            }
      
            }
      
            }
  
        }
    });

    


    }

    navigateToEditAdjustments() {

      this.router.navigate(['home','editAdjustments']);

    }

  }


