import { IAddressRepository } from "../../domains/Address/repository/IAddressRepository";

export const getAddressByZipCode = (
  addressRepository: IAddressRepository,
  zipCode: string
) => {
  return addressRepository.getAddressByZipCode(zipCode);
};
