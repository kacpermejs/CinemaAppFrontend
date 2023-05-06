"use strict";(self.webpackChunkCinemaAppFrontend=self.webpackChunkCinemaAppFrontend||[]).push([[438],{7438:(M,l,o)=>{o.r(l),o.d(l,{MoviesPageModule:()=>x});var c=o(6895),e=o(4650),d=o(9197),g=o(4859),r=o(3546);function m(t,a){if(1&t&&(e.TgZ(0,"div")(1,"span",5),e._uU(2," | "),e.qZA(),e._uU(3),e.qZA()),2&t){const n=a.$implicit;e.xp6(3),e.hij(" ",n," ")}}function p(t,a){1&t&&(e.TgZ(0,"button",10),e._uU(1," 17:15"),e._UZ(2,"br"),e.TgZ(3,"small"),e._uU(4," 2D, Napisy "),e.qZA()()),2&t&&e.s9C("disabled",!a.$implicit.available)}class s{constructor(a,n){this.date=a,this.available=n}get hour(){return this.date.getHours().toString()}get minute(){return this.date.getMinutes().toString()}}let u=(()=>{class t{constructor(){this.data={imageUrl:"https://via.placeholder.com/150x200",title:"GWIEZDNE WOJNY: CZ\u0118\u015a\u0106 V - IMPERIUM KONTRATAKUJE (WERSJA ORYGINALNA)",date:new Date(1980,4,17),durationMinutes:120,age:"7+",details:["sci-fi","adventure"],rating:9.7,description:"UWAGA: Film jest wy\u015bwietlany w wersji oryginalnej bez polskich napis\xf3w. Imperator rozkazuje swojemu uczniowi Darthowi Vaderowi odnalezienie Luke'a Skywalkera, by zmusi\u0107 go do przej\u015bcia na ciemn\u0105 stron\u0119 Mocy."},this.screenings=[new s(new Date,!0),new s(new Date,!1),new s(new Date,!1)]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-movie-card"]],decls:18,vars:7,consts:[[1,"my-card"],[1,"card-image"],["alt","Card Image",3,"src"],[1,"card-content"],[1,"details"],[1,"detail-spacer"],[4,"ngFor","ngForOf"],[1,"content-spacer"],[1,"screening-container"],["mat-raised-button","","color","primary","class","screening","routerLink","#",3,"disabled",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary","routerLink","#",1,"screening",3,"disabled"]],template:function(n,i){1&n&&(e.TgZ(0,"mat-card",0)(1,"div",1),e._UZ(2,"img",2),e.qZA(),e.TgZ(3,"div",3)(4,"mat-card-title"),e._uU(5),e.qZA(),e.TgZ(6,"mat-card-subtitle")(7,"div",4),e._uU(8),e.TgZ(9,"span",5),e._uU(10," | "),e.qZA(),e._uU(11),e.YNc(12,m,4,1,"div",6),e.qZA()(),e.TgZ(13,"mat-card-content"),e._uU(14),e.qZA(),e._UZ(15,"div",7),e.TgZ(16,"div",8),e.YNc(17,p,5,1,"button",9),e.qZA()()()),2&n&&(e.xp6(2),e.Q6J("src",i.data.imageUrl,e.LSH),e.xp6(3),e.Oqu(i.data.title),e.xp6(3),e.hij(" ",i.data.date.getFullYear()," "),e.xp6(3),e.hij(" ",i.data.age," "),e.xp6(1),e.Q6J("ngForOf",i.data.details),e.xp6(2),e.Oqu(i.data.description),e.xp6(3),e.Q6J("ngForOf",i.screenings))},dependencies:[c.sg,d.rH,g.lW,r.a8,r.dn,r.$j,r.n5],styles:[".my-card[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:flex-start;width:100%;padding:20px}.card-image[_ngcontent-%COMP%]{flex:0 0 25%;max-width:25%;height:100%;display:flex;justify-content:center;align-items:center;margin-right:1rem}.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:100%;object-fit:contain}.card-content[_ngcontent-%COMP%]{flex-grow:1;display:flex;flex-direction:column}mat-card-content[_ngcontent-%COMP%]{padding:0}@media screen and (max-width: 600px){mat-card-content[_ngcontent-%COMP%]{display:none}.card-image[_ngcontent-%COMP%]{flex:0 0 auto;max-width:50%}}.content-spacer[_ngcontent-%COMP%]{flex-grow:1;flex-basis:auto}.screening-container[_ngcontent-%COMP%]{margin-top:1rem;align-self:flex-start;display:flex;flex-wrap:wrap;flex-direction:row;gap:5px}.screening[_ngcontent-%COMP%]{height:3rem!important;width:5rem!important;line-height:normal;overflow:hidden}.screening[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:6px}.details[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.detail-spacer[_ngcontent-%COMP%]{margin-left:5px;margin-right:5px}"]}),t})();function f(t,a){1&t&&e._UZ(0,"app-movie-card")}let h=(()=>{class t{constructor(){this.images=[{src:"https://via.placeholder.com/300x300",alt:"Image 1"},{src:"https://via.placeholder.com/300x300",alt:"Image 2"},{src:"https://via.placeholder.com/300x300",alt:"Image 3"},{src:"https://via.placeholder.com/300x300",alt:"Image 4"},{src:"https://via.placeholder.com/300x300",alt:"Image 5"},{src:"https://via.placeholder.com/300x300",alt:"Image 6"}]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-movies-page"]],decls:2,vars:1,consts:[[1,"image-gallery"],[4,"ngFor","ngForOf"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e.YNc(1,f,1,0,"app-movie-card",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngForOf",i.images))},dependencies:[c.sg,u],styles:[".image-gallery[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}app-movie-card[_ngcontent-%COMP%]{width:90%;margin-bottom:20px}.image-caption[_ngcontent-%COMP%]{margin-left:10px}"]}),t})();var v=o(391);const C=[{path:"",component:h}];let x=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,d.Bz.forChild(C),v.m]}),t})()}}]);