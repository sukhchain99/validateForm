import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  dates = [{value:1}, {value:2}, {value:3}, {value:4}, {value:5}, {value:6}, {value:7}, {value:8}, {value:9}, {value:10},
          {value:11}, {value:12}, {value:13}, {value:14}, {value:15}, {value:16}, {value:17}, {value:18}, {value:19}, {value:20},
          {value:21}, {value:22}, {value:23}, {value:24}, {value:25}, {value:26}, {value:27}, {value:28}, {value:29}, {value:30},
        ];
  months: string[] = ['January', 'February', 'March', 'April',
                      'May', 'June', 'July', 'August',
                      'September', 'October', 'November', 'December'];
  years: number[] = new Array((new Date()).getFullYear() - 1900);

  constructor() { }

  ngOnInit() {
    this.yearSelected();
  }

  onSubmit(userForm: NgForm) {
    if(!userForm || (userForm && !userForm.valid))
      return;
    alert("It works!");
  }

  yearSelected() {
    let year = 1900;
    let currentYear = (new Date()).getFullYear();
    for(let i=0; year!=currentYear; i++) {
      this.years[i] = year;
      year+=1;
    }
  }

}
