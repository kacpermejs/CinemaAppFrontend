export interface IContactData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

export interface IReservation {
  contactData: IContactData;
  programmeId: number;
  reservedSeatsIds: number[];
}
