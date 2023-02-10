import { getAddressByZipCode } from "../../useCases/getAddressByZipCode/getAddressByZipCode";
import { ViaCepRepository } from "../repositories/ViaCepRepository";

const addressRepository = new ViaCepRepository();

export class AddressController {
  static getAddressByZipCode(zipCode: string) {
    return getAddressByZipCode(addressRepository, zipCode);
  }
}
