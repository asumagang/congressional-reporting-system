import { District } from './district';
import { Province } from './province';

export interface Municipality {
    id: number;
    name: string;
    province: Province,
    district:District,
  }
  