import { CountryProps } from "./country.types";
import { useCountry } from "@/api/fetchCountry";

export const Country = ({ code }: CountryProps) => {
  const { data } = useCountry(code);

  return (
    <div className="flex items-center gap-1">
      <span className="text-base">{data?.flag}</span>
      <span className="text-sm">{data?.name}</span>
    </div>
  );
};
