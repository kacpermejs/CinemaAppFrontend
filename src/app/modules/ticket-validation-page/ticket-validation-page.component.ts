import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IReservation } from 'src/app/core/models/Reservation';
import { TicketDTO, TicketService } from 'src/app/core/ticket-service/ticket.service';

@Component({
  selector: 'app-ticket-validation-page',
  templateUrl: './ticket-validation-page.component.html',
  styleUrls: ['./ticket-validation-page.component.css']
})
export class TicketValidationPageComponent implements OnInit {

  ticketFormGroup = this._formBuilder.group({
    reservationIdCtrl: ['', Validators.required],
  });

  ticketData?: TicketDTO;
  success = false;

  constructor(
    private _formBuilder: FormBuilder,
    private ticketService: TicketService) { }

  ngOnInit() {
  }

  checkTicket() {
    this.ticketService.getTicket(+this.ticketFormGroup.value.reservationIdCtrl!).subscribe({
      next: res => {
        console.log(res);
        this.ticketData = res;
        this.success = true;
      },
      error: e => {
        console.error(e);
        this.success = false;
      }
    });
  }

}
