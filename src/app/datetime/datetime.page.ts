import { Component, OnInit } from '@angular/core';
import { parseISO } from 'date-fns';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  myDate: any;

  todayInMilliseconds: any;
  todayDate;
  todayDay;
  todayMonth;
  todayYear;

  cleanTimeInMilliseconds = 0;
  cleanTimeDate;
  cleanDay;
  cleanMonth;
  cleanYear;
  cleanTimeInDays = 0;
  cleanTimeInYears = 0;
  cleanTimeInWeeks = 0;

  tag;
  keytagImage;

  constructor() {
    // today:
    this.todayDate = new Date();
    this.todayDate.setHours(0, 0, 0, 0);

    this.todayInMilliseconds = Date.parse(this.todayDate);
    this.todayDay = this.todayDate.getDate();
    this.todayMonth = this.todayDate.getMonth();
    this.todayYear = this.todayDate.getFullYear();

    // Initial display of the date picker
    this.myDate = new Date().toISOString();

    this.tag = 'none';
  }

  getCleanTime() {
    const oneDay = 1000 * 60 * 60 * 24;
    const oneWeek = oneDay * 7;
    const oneYear = oneDay * 365;

    this.myDate = this.myDate.substring(0, 10);

    const cleanDateInMilliseconds = Date.parse(this.myDate);

    this.cleanTimeDate = new Date(cleanDateInMilliseconds);
    this.cleanDay = this.cleanTimeDate.getDate();
    this.cleanMonth = this.cleanTimeDate.getMonth();
    this.cleanYear = this.cleanTimeDate.getFullYear();

    this.cleanTimeInMilliseconds = (this.todayInMilliseconds - cleanDateInMilliseconds) + oneDay; // ??
    this.cleanTimeInDays = Math.floor(this.cleanTimeInMilliseconds / oneDay);
    this.cleanTimeInWeeks = Math.floor(this.cleanTimeInMilliseconds / oneWeek);
    this.cleanTimeInYears = Math.floor(this.cleanTimeInMilliseconds / oneYear);

    if (this.cleanTimeInDays !== 0) {
      this.cleanTimeTag();
    }
    return this.cleanTimeInDays;

  }

  cleanTimeTag() {

    console.group('cleanTimeTag');
    console.log('todayDay : ', this.todayDay);
    console.log('cleanDay : ', this.cleanDay);
    console.log('todayMonth : ', this.todayMonth);
    console.log('cleanMonth : ', this.cleanMonth);
    console.log('todayYear : ', this.todayYear);
    console.log('cleanYear : ', this.cleanYear);
    console.groupEnd();

    // One day
    if (this.cleanTimeInDays === 1) {
      this.tag = 'One day clean';
      this.keytagImage = './assets/keytags/1-day.png';

      // 30 days
    } else if (this.cleanTimeInDays === 30) {
      this.tag = '30 days clean';
      this.keytagImage = './assets/keytags/30-days.png';

      // 60 days
    } else if (this.cleanTimeInDays === 60) {
      this.tag = '60 days clean';
      this.keytagImage = './assets/keytags/60-days.png';

      // 90 days
    } else if (this.cleanTimeInDays === 90) {
      this.tag = '90 days clean';
      this.keytagImage = './assets/keytags/90-days.png';

      // 6 months
      // TODO: FIX THIS
    } else if (this.cleanTimeInDays === 182) {
      this.tag = '6 months clean';
      this.keytagImage = './assets/keytags/6-months.png';

      // 9 months
      // TODO: FIX THIS
    } else if (this.cleanTimeInDays === 274) {
      this.tag = '9 months clean';
      this.keytagImage = './assets/keytags/9-months.png';

      // 1 year
    } else if ((this.todayDay === this.cleanDay) &&
      (this.todayMonth === this.cleanMonth) &&
      ((this.todayYear - 1) === this.cleanYear)) {
      this.tag = '1 Year clean';
      this.keytagImage = './assets/keytags/1-year.png';

      // 18 months
      // TODO: Fix this
    } else if (this.cleanTimeInDays === 547) {
      this.tag = '18 Months clean';
      this.keytagImage = './assets/keytags/18-months.png';

      // Multiple years
    } else if ((this.todayDay === this.cleanDay) &&
      (this.todayMonth === this.cleanMonth) &&
      (this.cleanYear !== this.todayYear) &&
      ((this.todayYear - this.cleanYear) > 1)) {
      this.tag = this.cleanTimeInYears + ' years clean';
      this.keytagImage = './assets/keytags/x-years.png';

    } else {
      // Not a clean time anniversary today
      this.tag = 'none';
    }
    return this.tag;
  }

  ngOnInit() {
  }

}
