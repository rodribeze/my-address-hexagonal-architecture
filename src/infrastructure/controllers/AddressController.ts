import { getAddressByZipCode } from "../../useCases/getAddressByZipCode/getAddressByZipCode";
// import { CepAweasomeRepository } from "../repositories/CepAweasomeRepository";
import { ViaCepRepository } from "../repositories/ViaCepRepository";

// const addressRepository = new CepAweasomeRepository();
// via cep
const addressRepository = new ViaCepRepository();

export class AddressController {
  static getAddressByZipCode(zipCode: string) {
    return getAddressByZipCode(addressRepository, zipCode);
  }
}
