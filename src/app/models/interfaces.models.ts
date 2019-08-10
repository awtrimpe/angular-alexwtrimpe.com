export interface Stock {
  id: number;
  price: number;
  quarterPercentage: number;
  stockID: string;
  stockName: string;
  yearPercentage: number;
}

export interface Message {
  email: string;
  id: number;
  message: string;
  name: string;
  subject: string;
}

export interface GenericMessage {
  msg?: string;
  err?: string;
}
