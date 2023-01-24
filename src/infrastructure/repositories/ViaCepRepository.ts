import { Address } from "../../domains/Address/entities/Address";
import { IAddressRepository } from "./../../domains/Address/repository/IAddressRepository";

export class ViaCepRepository implements IAddressRepository {
  async getAddressByZipCode(zipCode: string): Promise<Address> {
    const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);

    const data = (await response.json()) as any;

    return {
      address: data?.logradouro,
      zip_code: data?.cep,
      state: data?.uf,
      city: data?.localidade,
      neighborhood: data?.bairro,
    } as Address;
  }
}
