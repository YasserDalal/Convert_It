
export default async function currencyToCountry() {
  const nameCurrencies = {
    USD: "United States",
    EUR: "European Union",
    JPY: "Japan",
    CNY: "China",
    NZD: "New Zealand",
    SEK: "Sweden",
    KRW: "South Korea",
    SGD: "Singapore",
    NOK: "Norway",
    AED: "United Arab Emirates",
    SAR: "Saudi Arabia",
    PHP: "Philippines",
    THB: "Thailand",
    MYR: "Malaysia",
    ARS: "Argentina",
    BHD: "Bahrain",
  };

  const response = await fetch("https://openexchangerates.org/api/latest.json?app_id=3fbe9b76fc1f4fc89a910631ea31b081");
  const datas = await response.json();
  const currencies = Object.entries(datas.rates).filter(([key]) => nameCurrencies[key]).map(([key, value]) => ({ name: nameCurrencies[key], value: key, convertValue: value }));
  return currencies
}
