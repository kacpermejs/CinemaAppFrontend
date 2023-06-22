import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, startWith } from 'rxjs/operators';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CinemaSelectionComponent } from './cinema-selection/cinema-selection.component';
import { AuthService } from '../auth-service/auth.service';
import { Router } from '@angular/router';
import { Cinema, ICinema } from '../models/Cinema';
import { CinemaServiceService } from '../cinema-service/cinema-service.service';
import { CinemaSelectionService } from '../cinema-selection-service/cinema-selection.service';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav?: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    public auth: AuthService,
    public cinemaSelectionService: CinemaSelectionService,
    public router: Router) {}

  ngOnInit(): void {

  }

  onLoginLogout() {
    this.auth.isLoggedIn() ? this.auth.logout() : this.router.navigate(['/login']);
    this.closeSidenav();
  }

  closeSidenav(): void {
    this.sidenav?.close();
  }

}
