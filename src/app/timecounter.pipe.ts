import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timecounter'
})
export class TimecounterPipe implements PipeTransform {

  transform(completeDate: any, args?: any): number {

    let todayDate:Date = new Date();

    let todayDateWithoutTime:any = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate())

    var dateDifference = Math.abs(completeDate-todayDateWithoutTime)// difference in milliseconds

    const secondsInaDay = 86400;

    var dateDifferenceInSeconds:any = dateDifference*0.001; //difference in seconds
    var dateCounter = dateDifferenceInSeconds/secondsInaDay;

    if(dateCounter >= 1 && completeDate > todayDateWithoutTime){
      return dateCounter
    }
    else{
      return 0;
    }
  }

}
