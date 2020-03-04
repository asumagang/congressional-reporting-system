import { District } from './district';


export interface Municipality {
    id: number;
    name: string;
    targetbenes:number;
    servedbenes:number;
    amountallocated:number;
    amountdisbursed:number;
    district:District,
  }
  