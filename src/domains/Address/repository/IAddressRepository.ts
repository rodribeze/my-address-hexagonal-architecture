import { Address } from "../entities/Address";

export interface IAddressRepository {
  getAddressByZipCode(zipCode: string): Promise<Address>;
}
