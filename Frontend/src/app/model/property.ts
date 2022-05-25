import { PropertyBase } from "./propertyBase";

export class Property implements PropertyBase {
  id!: number;
  sellrent!: number;
  name!: string;
  Ptype!: string;
  bhk!: number;
  Ftype!: string;
  price!: number;
  builtarea!: number;
  CarpetArea?: number;
  address!: string;
  address2?: string;
  city!: string;
  floorno?: string;
  TotalFloor?: string;
  rtm!: number;
  AOP?: string;
  MainEntrance?: string;
  Security?: number;
  Gated?: number;
  Maintenance?: number;
  Possession?: string;
  Image?: string;
  Description?: string;
  postedon!: string;
  postedby!: number;
}
