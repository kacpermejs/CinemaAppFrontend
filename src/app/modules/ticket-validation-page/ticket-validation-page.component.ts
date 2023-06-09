import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket-validation-page',
  templateUrl: './ticket-validation-page.component.html',
  styleUrls: ['./ticket-validation-page.component.css']
})
export class TicketValidationPageComponent implements OnInit {

  ticketFormGroup = this._formBuilder.group({
    reservationIdCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  checkTicket() {

  }

}
