import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  myDate: any;
  cleanTimeInMilliseconds: any;
  todayInMilliseconds: any;
  cleanTimeInDays: any;
  cleanTimeInWeeks: any;
  cleanTimeInYears: any;

  constructor() {
    this.myDate = new Date().toISOString();
    this.cleanTimeInMilliseconds = Date.parse(this.myDate);
    this.todayInMilliseconds = Date.parse(this.myDate);
  }

  getCleanTime() {
    let hour, minute, seconds;

    this.cleanTimeInMilliseconds = Date.parse(this.myDate);
    this.cleanTimeInMilliseconds = this.todayInMilliseconds - this.cleanTimeInMilliseconds;

    seconds = Math.floor(this.cleanTimeInMilliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    this.cleanTimeInDays = Math.floor(hour / 24);
    hour = hour % 24;
    return this.cleanTimeInDays;

  }

  getCleanTimeWeeks() {
    this.cleanTimeInWeeks = Math.floor(this.cleanTimeInDays / 7);

    return this.cleanTimeInWeeks;
  }

  getCleanTimeYears() {
    this.cleanTimeInMilliseconds = Date.parse(this.myDate);
    this.cleanTimeInMilliseconds = this.todayInMilliseconds - this.cleanTimeInMilliseconds;

    this.cleanTimeInYears = Math.floor(this.cleanTimeInMilliseconds / 31536000000);

    return this.cleanTimeInYears;
  }


  ngOnInit() {
  }

}
