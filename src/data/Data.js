
export const Data = [
  {
    navigatorNames: [
      { name: "Temperature" },
      { name: "BMI" },
      { name: "Time" },
      { name: "Math" },
      { name: "Money" }
    ]
  },
  { 
    contents: [
      { Temperature: [
          { title: 'Temperature Converter' },
          { units: [
            { name: "Celsius", value: "°C" },
            { name: "Fahrenheit", value: "°F" },
            { name: "Kelvin", value: "K" }
          ]}]
      },
      { BMI: [
          { title: 'BMI Converter' },
          { units: [
            { name: "Metric", value: "kg/m2" },
            { name: "Imperial", value: "lb/ft2" }
          ]}
        ]
      },
      { Time: [
          { title: 'Time Converter' },
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
      { Math: [
          { title: 'Math Converter' },
          { units: [
            { name: "Radians", value: "Radians" },
            { name: "Degrees", value: "Degrees" },
            { name: "Grades", value: "Grades" }
          ]}
        ]
      },
      { Money: [
          { title: 'Money Converter' },
          { units: [
            { name: "Dollars", value: "$" },
            { name: "Euros", value: "€" },
            { name: "Pounds", value: "£" }
          ]}
        ]
      }
    ]
  }
]
