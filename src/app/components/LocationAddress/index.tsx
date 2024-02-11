// pages/index.tsx
import React, { useState, useCallback } from "react";
import SelectOption from "./SelectOption";

const LocationAddress: React.FC = () => {
  const countries = [
    { value: "MG", label: "Madagascar", icon: "/svg/map-pin.svg" },
    { value: "UE", label: "Union Européenne", icon: "/svg/map-pin.svg" },
  ];

  const languages = [
    { value: "En", label: "English", icon: "/svg/language.svg" },
    { value: "Te", label: "Telugu", icon: "/svg/language.svg" },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  const handleCountryChange = useCallback((value: any) => {
    setSelectedCountry(value);
  }, []);

  const handleLangChange = useCallback((value: any) => {
    setSelectedLang(value);
  }, []);

  return (
    <div className=" flex gap-[30px]">
      <SelectOption
        value={selectedCountry}
        options={countries}
        onChange={handleCountryChange}
        icon="/svg/map-pin.svg"
      />
      <SelectOption
        value={selectedLang}
        options={languages}
        onChange={handleLangChange}
        icon="/svg/language.svg"
      />
    </div>
  );
};

export default LocationAddress;
