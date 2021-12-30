import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customers: Customer [] = [];

  constructor() {
  }

  ngOnInit() {
  }

  register(customer) {
    // @ts-ignore
    this.customers.push(customer.value);
  }
}
