import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, startWith } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CinemaSelectionComponent } from './cinema-selection/cinema-selection.component';
import { AuthService } from '../auth-service/auth.service';
import { Router } from '@angular/router';
import { Cinema, ICinema } from '../models/Cinema';
import { CinemaServiceService } from '../cinema-service/cinema-service.service';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  selectedCinema?: ICinema;

  cinemas$: Observable<ICinema[]>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    public auth: AuthService,
    public cinemaService: CinemaServiceService,
    public router: Router) {
      this.cinemas$ = cinemaService.getCinemas();
    }

  ngOnInit(): void {

  }

  openCinemaDialog(): void {
    const dialogRef = this.dialog.open(CinemaSelectionComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Wybrane kino:', result);
      if(result)
        this.selectedCinema = result;
    });
  }

}
