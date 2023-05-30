export interface ICinema {
  id: number;
  city: string;
  name: string;
}


export class Cinema implements ICinema {
  id: number;
  city: string;
  name: string;

  constructor(id: number, city: string, name: string) {
    this.id = id;
    this.city = city;
    this.name = name;
  }

}
