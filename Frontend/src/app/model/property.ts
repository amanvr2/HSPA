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
  carpetarea?: number;
  address!: string;
  address2?: string;
  city!: string;
  floorno?: string;
  totalfloor?: string;
  rtm!: number;
  aop?: string;
  mainentrance?: string;
  security?: number;
  gated?: number;
  maintenance?: number;
  possession?: string;
  image?: string;
  Description?: string;
  postedon!: string;
  postedby!: number;
}
