import { Address } from "../../domains/Address/entities/Address";
import { IAddressRepository } from "../../domains/Address/repository/IAddressRepository";

export class CepAweasomeRepository implements IAddressRepository {
  async getAddressByZipCode(zipCode: string): Promise<Address> {
    const response = await fetch(
      `https://cep.awesomeapi.com.br/json/${String(zipCode)?.padStart(8, "0")}`
    );

    const data = (await response.json()) as any;

    return {
      address: data?.address,
      zip_code: data?.cep,
      state: data?.state,
      city: data?.city,
      neighborhood: data?.district,
    } as Address;
  }
}
