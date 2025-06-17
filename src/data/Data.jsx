
import currencyToCountry from "./CurrencyData"

export default async function generateData() {
  const currencyData = await currencyToCountry();

  return [
    {
      navigatorNames: [
        { name: "Temperature" },
        { name: "BMI" },
        { name: "Time" },
        { name: "Length" },
        { name: "Money" }
      ]
    },
    { 
      contents: [
        { Temperature: [
            { title: 'Temperature Converter', subtitle: 'Enter the <b>Temperature</b> select units and submit.' },
            { units: [
              { name: "Celsius", value: "°C" },
              { name: "Fahrenheit", value: "°F" },
              { name: "Kelvin", value: "K" }
            ]}]
        },
        { BMI: [
            { title: 'BMI Converter', subtitle: 'Enter the <b>Weight</b> and <b>Height</b>, select units and submit.'},
            { units: [
              { name: "Metric", value: "kg" },
              { name: "Imperial", value: "lb" }
            ]}
          ]
        },
        { Time: [
            { title: 'Time Converter', subtitle: 'Enter the <b>Time</b>, select units and submit.'},
            { units: [
              { name: "Seconds", value: "Seconds" },
              { name: "Minutes", value: "Minutes" },
              { name: "Hours", value: "Hours" },
              { name: "Days", value: "Days" },
              { name: "Weeks", value: "Weeks" },
              { name: "Months", value: "Months" },
              { name: "Years", value: "Years" }
            ]}
          ]
        },
        { Length: [
            { title: 'Length Converter', subtitle: 'Enter the <b>Length</b>, select units and submit.'},
            { units: [
              { name: 'millimeters', value: 'mm' },
              { name: 'centimeters', value: 'cm' },
              { name: 'inches', value: 'in' },
              { name: 'feet', value: 'ft' },
              { name: 'yards', value: 'yd' },
              { name: 'meters', value: 'm' },
              { name: 'kilometers', value: 'km' }
            ]}
          ]
        },
        { Money: [
            { title: 'Money Converter', subtitle: 'Enter the <b>Amount</b>, select currency and submit.'},
            { units: currencyData.map(item => ({
                name: item.name,
                value: item.value,
                convertValue: item.convertValue
              })) 
            }
          ]
        }
      ]
    }
  ]
}
