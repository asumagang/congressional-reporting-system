import { Province } from './province';


export interface District {
  id: number;
  name: string;
  province: Province,
  targetbenes:number;
  servedbenes:number;
  amountallocated:number;
  amountdisbursed:number;
}

