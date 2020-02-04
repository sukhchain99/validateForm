import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(userForm: NgForm) {
    if(!userForm || (userForm && !userForm.valid))
      return;
    alert("It works!");
  }

}
