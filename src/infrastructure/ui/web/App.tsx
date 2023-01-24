import React, { useState } from "react";
import { Address } from "../../../domains/Address/entities/Address";
import { AddressController } from "../../controllers/AddressController";
import "./App.css";

function App() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState<Address>();
  const [loading, setLoading] = useState(false);

  const fetchAddress = async () => {
    try {
      setAddress(undefined);
      setLoading(true);

      const addressData = await AddressController.getAddressByZipCode(cep);
      setAddress(addressData);
    } finally {
      setLoading(false);
    }
  };

  const renderField = (label: string, value: string | number) => {
    return (
      <p>
        <strong>{label}:</strong> {value ?? "---"}
      </p>
    );
  };

  return (
    <div className="mx-auto w-1/3 mt-4">
      <div className="flex gap-4">
        <input
          value={cep}
          placeholder="CEP"
          onChange={(e) => {
            setCep(e.target.value);
          }}
          type="number"
          className="w-full rounded"
        />
        <button
          disabled={!cep}
          className="bg-amber-600	 text-white p-3 rounded disabled:bg-gray-100 disabled:text-gray-400"
          onClick={fetchAddress}
        >
          Search
        </button>
      </div>
      {loading && <>Waiting...</>}
      {!loading && address && (
        <pre className="bg-gray-100 rounded mt-4 p-5">
          {renderField("Address", address?.address)}
          {renderField("Neighborhood", address?.neighborhood)}
          {renderField("City", address?.city)}
          {renderField("State", address?.state)}
        </pre>
      )}
    </div>
  );
}

export default App;
