"use strict";(self.webpackChunkCinemaAppFrontend=self.webpackChunkCinemaAppFrontend||[]).push([[461],{461:(ce,M,r)=>{r.r(M),r.d(M,{MoviesPageModule:()=>ae});var g=r(6895),c=r(4006),S=r(7974),e=r(4650),v=r(5890),x=r(1391),h=r(4144),m=r(9549),f=r(9602),u=r(9299),C=r(4859),l=r(3546);function y(i,o){if(1&i&&(e.TgZ(0,"div")(1,"span",5),e._uU(2," | "),e.qZA(),e._uU(3),e.qZA()),2&i){const t=o.$implicit;e.xp6(3),e.hij(" ",t," ")}}function T(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){const s=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.routeToBooking(p.movieData,s.id))}),e._uU(1),e._UZ(2,"br"),e.TgZ(3,"small"),e._uU(4),e.qZA()()}if(2&i){const t=o.$implicit,n=e.oxw();e.s9C("disabled",!t.available),e.xp6(1),e.hij(" ",n.getTimeString(t),""),e.xp6(3),e.AsE(" ",n.getScreenType(t.screenType),", ",t.languageType," ")}}let w=(()=>{class i{constructor(t){this.router=t,this.screenings=[]}ngOnInit(){console.log(this.screenings)}getTimeString(t){return String(t.date.getHours()).padStart(2,"0")+":"+String(t.date.getMinutes()).padStart(2,"0")}routeToBooking(t,n){this.router.navigate(["/movies/booking",t.id,n])}getScreenType(t){return Z(t)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(u.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-movie-card"]],inputs:{movieData:"movieData",screenings:"screenings"},decls:20,vars:8,consts:[[1,"my-card"],[1,"card-image"],["alt","Card Image",3,"src"],[1,"card-content"],[1,"details"],[1,"detail-spacer"],[4,"ngFor","ngForOf"],[1,"content-spacer"],[1,"screening-container"],["mat-raised-button","","color","primary","class","screening",3,"disabled","click",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"screening",3,"disabled","click"]],template:function(t,n){1&t&&(e.TgZ(0,"mat-card",0)(1,"div",1),e._UZ(2,"img",2),e.qZA(),e.TgZ(3,"div",3)(4,"mat-card-title"),e._uU(5),e.qZA(),e.TgZ(6,"mat-card-subtitle")(7,"div",4),e._uU(8),e.TgZ(9,"span",5),e._uU(10," | "),e.qZA(),e._uU(11),e.YNc(12,y,4,1,"div",6),e.qZA(),e.TgZ(13,"div"),e._uU(14),e.qZA()(),e.TgZ(15,"mat-card-content"),e._uU(16),e.qZA(),e._UZ(17,"div",7),e.TgZ(18,"div",8),e.YNc(19,T,5,4,"button",9),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("src",null==n.movieData?null:n.movieData.imageUrl,e.LSH),e.xp6(3),e.Oqu(null==n.movieData?null:n.movieData.title),e.xp6(3),e.hij(" ",null==n.movieData||null==n.movieData.date?null:n.movieData.date.getFullYear()," "),e.xp6(3),e.hij(" ",null==n.movieData?null:n.movieData.age," "),e.xp6(1),e.Q6J("ngForOf",null==n.movieData?null:n.movieData.details),e.xp6(2),e.hij(" ",null==n.movieData?null:n.movieData.durationMinutes," minut "),e.xp6(2),e.Oqu(null==n.movieData?null:n.movieData.description),e.xp6(3),e.Q6J("ngForOf",n.screenings))},dependencies:[g.sg,C.lW,l.a8,l.dn,l.$j,l.n5],styles:[".my-card[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:flex-start;width:100%;padding:20px}.card-image[_ngcontent-%COMP%]{flex:0 0 25%;max-width:25%;height:100%;display:flex;justify-content:center;align-items:center;margin-right:1rem}.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:100%;object-fit:contain}.card-content[_ngcontent-%COMP%]{flex-grow:1;display:flex;flex-direction:column}mat-card-content[_ngcontent-%COMP%]{padding:0}@media screen and (max-width: 600px){mat-card-content[_ngcontent-%COMP%]{display:none}.card-image[_ngcontent-%COMP%]{flex:0 0 auto;max-width:50%}}.content-spacer[_ngcontent-%COMP%]{flex-grow:1;flex-basis:auto}.screening-container[_ngcontent-%COMP%]{margin-top:1rem;align-self:flex-start;display:flex;flex-wrap:wrap;flex-direction:row;gap:5px}.screening[_ngcontent-%COMP%]{height:3rem!important;width:6rem!important;line-height:normal;overflow:hidden}.screening[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:8px}.details[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.detail-spacer[_ngcontent-%COMP%]{margin-left:5px;margin-right:5px}"]}),i})();function Z(i){switch(i){case"SCREEN_2D":return"2D";case"SCREEN_3D":return"3D";default:return i}}function A(i,o){if(1&i&&e._UZ(0,"app-movie-card",5),2&i){const t=o.$implicit;e.Q6J("movieData",t)("screenings",t.screenings)}}let b=(()=>{class i{constructor(t,n){this.cinemaService=t,this.cinemaSelectionService=n,this.pageSize=10,this.totalItems=0,this.currentPage=0,this.movies=[],this.selectedDate=new c.NI(new Date);const a=(new Date).getFullYear();this.minDate=new Date,this.maxDate=new Date(a+1,11,31),this.cinemaSelectionService.selectedCinema$.subscribe(s=>{this.cinemaId=s?.id,this.loadMovies(this.selectedDate.value?this.selectedDate.value:new Date)})}ngOnInit(){}loadMovies(t){console.log("CinemaId: "+this.cinemaId),null!=this.cinemaId?this.cinemaService.getMoviesWithTheirScreenings(this.cinemaId,t,100,0).subscribe(n=>this.movies=n):console.log("No cinema")}onDateChanged(){console.log(this.selectedDate.value),this.selectedDate.value&&this.loadMovies(this.selectedDate.value)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(v.r),e.Y36(x.G))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-movies-page"]],viewQuery:function(t,n){if(1&t&&e.Gf(S.NW,5),2&t){let a;e.iGM(a=e.CRH())&&(n.paginator=a.first)}},decls:11,vars:6,consts:[["matInput","",3,"min","max","matDatepicker","formControl","dateChange"],["matIconSuffix","",3,"for"],["picker",""],[1,"image-gallery"],[3,"movieData","screenings",4,"ngFor","ngForOf"],[3,"movieData","screenings"]],template:function(t,n){if(1&t&&(e.TgZ(0,"mat-form-field")(1,"mat-label"),e._uU(2,"Choose a date"),e.qZA(),e.TgZ(3,"input",0),e.NdJ("dateChange",function(){return n.onDateChanged()}),e.qZA(),e.TgZ(4,"mat-hint"),e._uU(5,"MM/DD/YYYY"),e.qZA(),e._UZ(6,"mat-datepicker-toggle",1)(7,"mat-datepicker",null,2),e.qZA(),e.TgZ(9,"div",3),e.YNc(10,A,1,2,"app-movie-card",4),e.qZA()),2&t){const a=e.MAs(8);e.xp6(3),e.Q6J("min",n.minDate)("max",n.maxDate)("matDatepicker",a)("formControl",n.selectedDate),e.xp6(3),e.Q6J("for",a),e.xp6(4),e.Q6J("ngForOf",n.movies)}},dependencies:[g.sg,h.Nt,m.KE,m.hX,m.bx,m.R9,f.Mq,f.hl,f.nW,c.Fj,c.JJ,c.oH,w],styles:[".image-gallery[_ngcontent-%COMP%]{display:flex;flex-direction:column}app-movie-card[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.image-caption[_ngcontent-%COMP%]{margin-left:10px}"]}),i})();var k=r(6127),I=r(9399),P=r(1924),D=r(2922),d=r(6257),U=r(529);let N=(()=>{class i{constructor(t){this.http=t,this.apiUrl=v.VP+"/create-reservation"}makeReservation(t){return this.http.post(this.apiUrl,t)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(U.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var F=r(7392),_=r(6338),B=r(4850),O=r(3238);const q=["stepper"];function Y(i,o){1&i&&e._uU(0,"Wyb\xf3r miejsc")}function J(i,o){1&i&&e._UZ(0,"div",30)}function Q(i,o){1&i&&(e.TgZ(0,"mat-icon",33),e._uU(1,"accessible"),e.qZA())}function j(i,o){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw(2).$implicit;e.xp6(1),e.AsE(" ",t.location.row,"-",t.location.column," ")}}const L=function(i,o,t,n,a){return{free:i,occupied:o,selected:t,"double-left":n,"double-right":a}};function R(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",31),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.seatOnClick(a))}),e.YNc(1,Q,2,0,"mat-icon",32),e.YNc(2,j,2,2,"span",11),e.qZA()}if(2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.Q6J("ngClass",e.qbA(3,L,!t.occupied,t.occupied,n.isSelected(t),n.isLoveSeat(t)&&n.isLoveSeatLeft(t),n.isLoveSeat(t)&&!n.isLoveSeatLeft(t))),e.xp6(1),e.Q6J("ngIf",n.isWheelchair(t)),e.xp6(1),e.Q6J("ngIf",!n.isWheelchair(t)&&n.isSelected(t))}}function E(i,o){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,J,1,0,"div",28),e.YNc(2,R,3,9,"div",29),e.qZA()),2&i){const t=o.$implicit,n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",n.isEmptySpace(t)),e.xp6(1),e.Q6J("ngIf",!n.isEmptySpace(t))}}function G(i,o){if(1&i&&(e.TgZ(0,"div",26)(1,"div",27)(2,"span"),e._uU(3),e.qZA()(),e.YNc(4,E,3,2,"div",24),e.qZA()),2&i){const t=o.$implicit,n=e.oxw();e.xp6(3),e.Oqu(n.getRowNum(t)),e.xp6(1),e.Q6J("ngForOf",t)}}function z(i,o){1&i&&e._uU(0,"Bilety")}function W(i,o){1&i&&(e.TgZ(0,"mat-error"),e._uU(1,"Brak wybranych miejsc!"),e.qZA())}function $(i,o){1&i&&(e.TgZ(0,"mat-icon",39),e._uU(1,"favorite"),e.qZA())}function H(i,o){1&i&&(e.TgZ(0,"mat-icon",39),e._uU(1,"accessible"),e.qZA())}function X(i,o){1&i&&(e.TgZ(0,"mat-icon",39),e._uU(1,"receipt"),e.qZA())}function K(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"mat-list-item",34),e.YNc(1,$,2,0,"mat-icon",35),e.YNc(2,H,2,0,"mat-icon",35),e.YNc(3,X,2,0,"mat-icon",35),e.TgZ(4,"div",36)(5,"span",37),e._uU(6),e.qZA(),e.TgZ(7,"button",38),e.NdJ("click",function(){const s=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.deselect(s))}),e.TgZ(8,"mat-icon"),e._uU(9,"close"),e.qZA()()()()}if(2&i){const t=o.$implicit,n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.isLoveSeat(t)),e.xp6(1),e.Q6J("ngIf",n.isWheelchair(t)),e.xp6(1),e.Q6J("ngIf",n.isRegularSeat(t)),e.xp6(3),e.HOy(" Rz\u0105d: ",t.location.row,", Miejsce: ",t.location.column,", Sekcja: ",t.section,", Id: ",t.id," ")}}function V(i,o){1&i&&e._uU(0,"Rezerwacja")}function ee(i,o){if(1&i&&(e.TgZ(0,"mat-list-item")(1,"div")(2,"mat-icon",39),e._uU(3,"receipt"),e.qZA(),e.TgZ(4,"span",37),e._uU(5),e.qZA()()()),2&i){const t=e.oxw();e.xp6(5),e.hij(" Bilet normalny: ",t.getPrice(),"z\u0142 ")}}let te=(()=>{class i{constructor(t,n,a,s,p,re,se){this._formBuilder=t,this._matStepperIntl=n,this.cinemaSelectionService=a,this.cinemaService=s,this.route=p,this.router=re,this.bookingService=se,this.selectedIds=new Set,this.seatsArray=[],this.emailFormGroup=this._formBuilder.group({firstName:["",c.kI.required],lastName:["",c.kI.required],phoneNumber:["",c.kI.required],emailCtrl:["",c.kI.required]})}ngOnInit(){this.route.params.subscribe(t=>{this.screeningId=+t.screeningId,this.movieId=+t.movieId,this.cinemaService.getHallData(this.screeningId).subscribe(n=>{console.log(n),this.hall=n;const a=Array.from({length:n.rows+1},()=>Array(n.columns+1));for(let s of n.seats)a[s.layoutLocation.row][s.layoutLocation.column]=s;this.seatsArray=a,this.cinemaService.getMovieAndScreeningDataWithId(this.screeningId).subscribe(s=>{this.movieAndScreeningData=s,console.log(s)})})})}getHour(){const t=new Date(this.movieAndScreeningData?.date);return String(t.getHours()).padStart(2,"0")+":"+String(t.getMinutes()).padStart(2,"0")}getDayOfTheWeek(){return new Date(this.movieAndScreeningData?.date).toLocaleString("pl-PL",{weekday:"long"})||""}getDate(){return new Date(this.movieAndScreeningData?.date).toLocaleDateString("pl-PL")||""}getScreenType(){const t=this.movieAndScreeningData?.film?.screenType;return Z(t)}getPrice(){return+this.movieAndScreeningData?.film?.price}getSummedPrice(){return this.selectedIds.size*this.getPrice()}get selectedSeats(){const t=[];if(this.hall?.seats)for(let n of this.hall?.seats)this.isSelected(n)&&t.push(n);return t}isRegularSeat(t){return t.type==I.E.Regular}isWheelchair(t){return t instanceof D.l}isLoveSeat(t){return t instanceof P.g}isLoveSeatLeft(t){return t.isLeft}isSelected(t){return this.selectedIds.has(t.id)}isEmptySpace(t){return!t}select(t){!this.isSelected(t)&&!t.occupied&&this.selectedIds.add(t.id)}deselect(t){return this.selectedIds.delete(t.id)}getRowNum(t){return t.find(n=>n)?.location.row}findSeatByLocationAndSection(t,n){for(const a of this.hall?.seats)if(a&&a.location.row===t.row&&a.location.column===t.column&&a.section===n)return a}seatOnClick(t){if(this.isSelected(t))if(t instanceof P.g)if(t.connected.column>t.location.column){this.deselect(t);const n=this.findSeatByLocationAndSection(t.connected,t.section);n?this.deselect(n):console.log("Seat not found")}else{const n=this.findSeatByLocationAndSection(t.connected,t.section);n?this.deselect(n):console.log("Seat not found"),this.deselect(t)}else this.deselect(t);else if(t instanceof P.g)if(t.connected.column>t.location.column){this.select(t);const n=this.findSeatByLocationAndSection(t.connected,t.section);n?this.select(n):console.log("Seat not found")}else{const n=this.findSeatByLocationAndSection(t.connected,t.section);n?this.select(n):console.log("Seat not found"),this.select(t)}else this.select(t)}checkSeatSelection(){return this.selectedIds.size>0}isStepperValid(){return this.emailFormGroup.valid&&this.checkSeatSelection()}submit(){this.emailFormGroup.valid&&this.checkSeatSelection()&&this.cinemaSelectionService.isCinemaSet&&this.makeReservation()}makeReservation(){if(console.log("Making Reservation"),this.emailFormGroup.valid){const n={contactData:{firstName:this.emailFormGroup.value.firstName,lastName:this.emailFormGroup.value.lastName,email:this.emailFormGroup.value.emailCtrl,phoneNumber:this.emailFormGroup.value.phoneNumber},programmeId:this.screeningId,reservedSeatsIds:Array.from(this.selectedIds)};console.log(n),this.bookingService.makeReservation(n).subscribe({next:a=>{console.log(a),this.router.navigate(["/movies/booking/result",a.reservationId])},error:a=>{console.error(a),this.router.navigate(["/movies/booking/result",-1],{queryParams:{errorMessage:"Co\u015b posz\u0142o nie tak!"}})}})}}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.qu),e.Y36(d.$c),e.Y36(x.G),e.Y36(v.r),e.Y36(u.gz),e.Y36(u.F0),e.Y36(N))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-booking-page"]],viewQuery:function(t,n){if(1&t&&e.Gf(q,5),2&t){let a;e.iGM(a=e.CRH())&&(n.stepper=a.first)}},decls:68,vars:17,consts:[[3,"linear"],["stepper",""],[3,"hasError"],["matStepLabel",""],[1,"seats"],[1,"wrapper"],[1,"screen"],[1,"cinema-layout-grid"],["class","cinema-row",4,"ngFor","ngForOf"],[1,"step-buttons"],["mat-raised-button","","color","accent","matStepperNext",""],[4,"ngIf"],[1,"selected-seats"],["class","ticket",4,"ngFor","ngForOf"],["mat-raised-button","","color","accent","matStepperPrevious",""],["mat-raised-button","","color","accent","matStepperNext","",3,"disabled"],["errorMessage","Uzupe\u0142nij e-mail",3,"stepControl"],[1,"final-step"],[1,"final-form",3,"formGroup"],["matInput","","formControlName","firstName","placeholder",""],["matInput","","formControlName","lastName","placeholder",""],["matInput","","formControlName","phoneNumber","placeholder","+48 123 456 789"],["matInput","","formControlName","emailCtrl","placeholder","xyz@email.com"],["mat-subheader",""],[4,"ngFor","ngForOf"],["mat-raised-button","","color","accent",3,"disabled","click"],[1,"cinema-row"],[1,"center"],["class","seat empty-space",4,"ngIf"],["class","seat",3,"ngClass","click",4,"ngIf"],[1,"seat","empty-space"],[1,"seat",3,"ngClass","click"],["class","seat-icon",4,"ngIf"],[1,"seat-icon"],[1,"ticket"],["matListItemIcon","",4,"ngIf"],[1,"list-item-content"],["mat-line",""],["mat-icon-button","",3,"click"],["matListItemIcon",""]],template:function(t,n){1&t&&(e.TgZ(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),e._uU(3),e.qZA(),e.TgZ(4,"mat-card-subtitle"),e._uU(5),e.qZA()(),e._UZ(6,"mat-card-content"),e.qZA(),e._UZ(7,"br"),e.TgZ(8,"mat-card")(9,"mat-vertical-stepper",0,1)(11,"mat-step",2),e.YNc(12,Y,1,0,"ng-template",3),e.TgZ(13,"div",4)(14,"div",5)(15,"div",6),e._uU(16,"Ekran"),e.qZA(),e.TgZ(17,"div",7),e.YNc(18,G,5,2,"div",8),e.qZA()()(),e._UZ(19,"br"),e.TgZ(20,"div",9)(21,"button",10),e._uU(22,"Dalej"),e.qZA()()(),e.TgZ(23,"mat-step"),e.YNc(24,z,1,0,"ng-template",3),e._uU(25," Bilety: "),e.YNc(26,W,2,0,"mat-error",11),e.TgZ(27,"mat-list",12),e.YNc(28,K,10,7,"mat-list-item",13),e.qZA(),e._UZ(29,"br"),e.TgZ(30,"div",9)(31,"button",14),e._uU(32,"Wr\xf3\u0107"),e.qZA(),e.TgZ(33,"button",15),e._uU(34,"Dalej"),e.qZA()()(),e.TgZ(35,"mat-step",16),e.YNc(36,V,1,0,"ng-template",3),e.TgZ(37,"div",17)(38,"form",18)(39,"mat-form-field")(40,"mat-label"),e._uU(41,"Imi\u0119"),e.qZA(),e._UZ(42,"input",19),e.qZA(),e.TgZ(43,"mat-form-field")(44,"mat-label"),e._uU(45,"Nazwisko"),e.qZA(),e._UZ(46,"input",20),e.qZA(),e.TgZ(47,"mat-form-field")(48,"mat-label"),e._uU(49,"Numer telefonu"),e.qZA(),e._UZ(50,"input",21),e.qZA(),e.TgZ(51,"mat-form-field")(52,"mat-label"),e._uU(53,"Tw\xf3j e-mail"),e.qZA(),e._UZ(54,"input",22),e.qZA()(),e.TgZ(55,"summary")(56,"mat-list")(57,"div",23),e._uU(58,"Podsumowanie:"),e.qZA(),e._UZ(59,"mat-divider"),e.YNc(60,ee,6,1,"mat-list-item",24),e._UZ(61,"mat-divider"),e.TgZ(62,"mat-list-item"),e._uU(63),e.qZA()()()(),e.TgZ(64,"div",9)(65,"button",25),e.NdJ("click",function(){return n.submit()}),e._uU(66,"Zarezerwuj"),e.qZA()()()()(),e._UZ(67,"br")),2&t&&(e.xp6(3),e.lnq("",null==n.movieAndScreeningData||null==n.movieAndScreeningData.film?null:n.movieAndScreeningData.film.name," ",n.getScreenType()," ",null==n.movieAndScreeningData||null==n.movieAndScreeningData.film?null:n.movieAndScreeningData.film.languageType,""),e.xp6(2),e.lnq("",n.getHour()," | ",n.getDayOfTheWeek()," | ",n.getDate(),""),e.xp6(4),e.Q6J("linear",!0),e.xp6(2),e.Q6J("hasError",!n.checkSeatSelection()),e.xp6(7),e.Q6J("ngForOf",n.seatsArray),e.xp6(8),e.Q6J("ngIf",!n.checkSeatSelection()),e.xp6(2),e.Q6J("ngForOf",n.selectedSeats),e.xp6(5),e.Q6J("disabled",!n.checkSeatSelection()),e.xp6(2),e.Q6J("stepControl",n.emailFormGroup),e.xp6(3),e.Q6J("formGroup",n.emailFormGroup),e.xp6(22),e.Q6J("ngForOf",n.selectedSeats),e.xp6(3),e.hij(" Razem: ",n.getSummedPrice()," "),e.xp6(2),e.Q6J("disabled",!n.isStepperValid()))},dependencies:[g.mk,g.sg,g.O5,F.Hw,C.lW,C.RK,_.i$,_.Tg,_.Yt,_.gs,B.d,h.Nt,m.KE,m.hX,m.TO,O.X2,l.a8,l.dn,l.dk,l.$j,l.n5,d.C0,d.VY,d.Vq,d.Ic,d.fd,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u],styles:[".selected-seats[_ngcontent-%COMP%]{flex:1 0 0}.order-summary[_ngcontent-%COMP%]{min-width:100%}mat-stepper[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:1rem}.seats[_ngcontent-%COMP%]{display:flex;justify-content:center}.seats[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{overflow:auto}.seats[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .screen[_ngcontent-%COMP%]{width:100%;border-top:rgb(136,136,136) 3px solid;text-align:center;margin-top:1em;margin-bottom:1em}.seats[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .cinema-layout-grid[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;overflow:auto}.seats[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .cinema-layout-grid[_ngcontent-%COMP%]   .cinema-row[_ngcontent-%COMP%]{display:flex}.seats[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .cinema-layout-grid[_ngcontent-%COMP%]   .cinema-row[_ngcontent-%COMP%]   .seat[_ngcontent-%COMP%]{min-height:40px;margin-left:2px;margin-right:2px;aspect-ratio:1/1;border-radius:5px;display:flex;justify-content:center;align-items:center;cursor:pointer}.seats[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .cinema-layout-grid[_ngcontent-%COMP%]   .cinema-row[_ngcontent-%COMP%]   .seat[_ngcontent-%COMP%]   .seat-icon[_ngcontent-%COMP%]{position:relative;opacity:.5}.seats[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .cinema-layout-grid[_ngcontent-%COMP%]   .cinema-row[_ngcontent-%COMP%]   .seat.double-left[_ngcontent-%COMP%]{aspect-ratio:unset;margin-right:0;min-width:42px;border-radius:5px 0 0 5px}.seats[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .cinema-layout-grid[_ngcontent-%COMP%]   .cinema-row[_ngcontent-%COMP%]   .seat.double-right[_ngcontent-%COMP%]{aspect-ratio:unset;margin-left:0;min-width:42px;border-radius:0 5px 5px 0}.seats[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .cinema-layout-grid[_ngcontent-%COMP%]   .cinema-row[_ngcontent-%COMP%]   .seat.empty-space[_ngcontent-%COMP%]{background-color:#0000!important;color:#0000!important;cursor:default}.seats[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .cinema-layout-grid[_ngcontent-%COMP%]   .cinema-row[_ngcontent-%COMP%]   .seat.free[_ngcontent-%COMP%]{background-color:#888}.seats[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .cinema-layout-grid[_ngcontent-%COMP%]   .cinema-row[_ngcontent-%COMP%]   .seat.occupied[_ngcontent-%COMP%]{background-color:#cd1111}.seats[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .cinema-layout-grid[_ngcontent-%COMP%]   .cinema-row[_ngcontent-%COMP%]   .seat.selected[_ngcontent-%COMP%]{background-color:#41d510}.ticket[_ngcontent-%COMP%]{margin-bottom:4px;border:2px solid rgb(34,34,34);border-radius:4px}.list-item-content[_ngcontent-%COMP%]{display:flex;align-items:center}.list-item-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex-grow:1}.step-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;gap:4px}.final-form[_ngcontent-%COMP%]{padding-top:1rem;display:flex;flex-direction:column;max-width:300px;min-width:300px}.final-step[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:1rem}.final-step[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]{min-width:300px;flex-grow:1;margin-bottom:1rem}.center[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"]}),i})();function ne(i,o){if(1&i&&(e.TgZ(0,"div",1)(1,"h2"),e._uU(2,"Tw\xf3j numer rezerwacji:"),e.qZA(),e.TgZ(3,"div",2),e._uU(4),e.qZA()()),2&i){const t=e.oxw();e.xp6(4),e.Oqu(t.reservationId)}}function ie(i,o){if(1&i&&(e.TgZ(0,"div",1)(1,"h2"),e._uU(2,"Wyst\u0105pi\u0142 b\u0142\u0105d:"),e.qZA(),e.TgZ(3,"div",2),e._uU(4),e.qZA()()),2&i){const t=e.oxw();e.xp6(4),e.Oqu(t.errorMessage)}}const oe=[{path:"",component:b},{path:"booking/result/:reservationId",component:(()=>{class i{constructor(t){this.route=t,this.isError=!1,this.errorMessage=""}ngOnInit(){this.route.params.subscribe(t=>{this.reservationId=t.reservationId,this.route.queryParams.subscribe(n=>{const a=n.errorMessage;this.isError="-1"==this.reservationId,this.errorMessage=a})})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(u.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-booking-result"]],decls:2,vars:2,consts:[["class","centring",4,"ngIf"],[1,"centring"],[1,"reservation-id"]],template:function(t,n){1&t&&(e.YNc(0,ne,5,1,"div",0),e.YNc(1,ie,5,1,"div",0)),2&t&&(e.Q6J("ngIf",!n.isError),e.xp6(1),e.Q6J("ngIf",n.isError))},dependencies:[g.O5],styles:[".reservation-id[_ngcontent-%COMP%]{font-size:50px}.centring[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}"]}),i})()},{path:"booking/:movieId/:screeningId",component:te}];let ae=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.ez,u.Bz.forChild(oe),k.m,c.UX,c.u5,m.lN,h.c,f.FA,O.XK]}),i})()}}]);