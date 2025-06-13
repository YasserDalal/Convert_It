
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
      { Math: [
          { title: 'Math Converter', subtitle: 'Enter the <b>Number</b>, select units and submit.'},
          { units: [
            { name: "Radians", value: "Radians" },
            { name: "Degrees", value: "Degrees" },
            { name: "Grades", value: "Grades" }
          ]}
        ]
      },
      { Money: [
          { title: 'Money Converter', subtitle: 'Enter the <b>Amount</b>, select currency and submit.'},
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
