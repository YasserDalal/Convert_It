
export default function Convert(units, name, inputValue, inputValue1, inputValue2, from, to, setterResult, setterFinalValue, setterFinalValue2, setterInputValue, setterInputValue1, setterInputValue2, setBmi) {
  // Temperatures
  function Temperatures(inputValue, from, to) {
    const value = Number(inputValue)
    // celsius
    if(from === 'Celsius' && to === 'Fahrenheit') {
      setterResult((value * 1.8 + 32).toFixed(1) + '°F')
      setterFinalValue(value + '°C');
    };
    if(from === 'Celsius' && to === 'Kelvin') {
      setterResult((value + 273.15).toFixed(1) + ' K');
      setterFinalValue(value + '°C');
    }

    // fahrenheit
    if(from === 'Fahrenheit' && to === 'Celsius') {
      setterResult(((value - 32) / 1.8).toFixed(1) + '°C');
      setterFinalValue(value + '°F');
    }
    if(from === 'Fahrenheit' && to === 'Kelvin') {
      setterResult(((value - 32) / 1.8 + 273.15).toFixed(1) + ' K');
      setterFinalValue(value + '°F');
    }

    // kelvin
    if(from === 'Kelvin' && to === 'Fahrenheit') {
      setterResult(((value - 273.15) * 1.8 + 32).toFixed(1) + '°F');
      setterFinalValue(value + ' K');
    }
    if(from === 'Kelvin' && to === 'Celsius') {
      setterResult((value - 273.15).toFixed(1) + '°C');
      setterFinalValue(value + ' K');
    }
    setterInputValue('');
  }
  // BMI
  function BMI(kiloNumber, heightNumber, from, to) {
    const weight = Number(kiloNumber);
    const height = Number(heightNumber) / 100;
    const bmi = weight / (height * height);
    
    if (from === 'Metric' && to === 'Imperial') {
      setterResult(bmi.toFixed(2)); 
      setterFinalValue2((weight * 2.20462).toFixed(2) + ' lbs');
      setterFinalValue(weight + ' kg');
      setBmi(() => {
        if (bmi.toFixed(2) < 18.5) return 'Underweight';
        if (bmi.toFixed(2) >= 18.5 && bmi.toFixed(2) <= 24.9) return 'Healthy Weight';
        if (bmi.toFixed(2) >= 25 && bmi.toFixed(2) <= 29.9) return 'Overweight';
        if (bmi.toFixed(2) >= 30) return 'Obese';
      });
    }
    if (from === 'Imperial' && to === 'Metric') {
      setterResult('Your BMI is ' + bmi.toFixed(2)); 
      setterFinalValue2((weight / 2.20462).toFixed(2) + ' kg');
      setterFinalValue(weight + ' lbs');
      setBmi(() => {
        if (bmi.toFixed(2) < 18.5) return 'Underweight';
        if (bmi.toFixed(2) >= 18.5 && bmi.toFixed(2) <= 24.9) return 'Healthy Weight';
        if (bmi.toFixed(2) >= 25 && bmi.toFixed(2) <= 29.9) return 'Overweight';
        if (bmi.toFixed(2) >= 30) return 'Obese';
      });
    }
    setterInputValue1('65')
    setterInputValue2('180')
  }
  // Time
  function Time(inputValue, from, to) {
    const value = Number(inputValue)
    // seconds
    if(from === 'Seconds' && to === 'Minutes') {
      setterResult(parseFloat((value / 60).toFixed(2)) + (value / 60 <= 1 ? ' minute' : ' minutes'));
      setterFinalValue(value + (value <= 1 ? ' second' : ' seconds'));
    } else if(from === 'Seconds' && to === 'Hours') {
      setterResult(parseFloat((value / 3600).toFixed(4)) + (value / 3600 <= 1 ? ' hour' : ' hours'));
      setterFinalValue(value + (value <= 1 ? ' second' : ' seconds'));
    } else if(from === 'Seconds' && to === 'Days') {
      setterResult(parseFloat((value / 86400).toFixed(4)) + (value / 86400 <= 1 ? ' day' : ' days'));
      setterFinalValue(value + (value <= 1 ? ' second' : ' seconds'));
    } else if(from === 'Seconds' && to === 'Weeks') {
      setterResult(parseFloat((value / 604800).toFixed(5)) + (value / 604800 <= 1 ? ' week' : ' weeks'));
      setterFinalValue(value + (value <= 1 ? ' second' : ' seconds'));
    } else if(from === 'Seconds' && to === 'Months') {
      setterResult(parseFloat((value / 2592000).toFixed(7)) + (value / 2592000 <= 1 ? ' month' : ' months'));
      setterFinalValue(value + (value <= 1 ? ' second' : ' seconds'));
    } else if(from === 'Seconds' && to === 'Years') {
      setterResult(parseFloat((value / 31536000).toFixed(7)) + (value / 31536000 <= 1 ? ' year' : ' years'));
      setterFinalValue(value + (value <= 1 ? ' second' : ' seconds'));
    }

    // minutes
    if(from === 'Minutes' && to === 'Seconds') {
      setterResult(parseFloat((value * 60).toFixed(2)).toLocaleString() + (value * 60 <= 1 ? ' second' : ' seconds'));
      setterFinalValue(value + (value <= 1 ? ' minute' : ' minutes'));
    } else if(from === 'Minutes' && to === 'Hours') {
      setterResult(parseFloat((value / 60).toFixed(3)) + (value / 60 <= 1 ? ' hour' : ' hours'));
      setterFinalValue(value + (value <= 1 ? ' minute' : ' minutes'));
    } else if(from === 'Minutes' && to === 'Days') {
      setterResult(parseFloat((value / 1440).toFixed(3)) + (value / 1440 <= 1 ? ' day' : ' days'));
      setterFinalValue(value + (value <= 1 ? ' minute' : ' minutes'));
    } else if(from === 'Minutes' && to === 'Weeks') {
      setterResult(parseFloat((value / 20160).toFixed(6)) + (value / 20160 <= 1 ? ' week' : ' weeks'));
      setterFinalValue(value + (value <= 1 ? ' minute' : ' minutes'));
    } else if(from === 'Minutes' && to === 'Months') {
      setterResult(parseFloat((value / 43800).toFixed(5)) + (value / 43800 <= 1 ? ' month' : ' months'));
      setterFinalValue(value + (value <= 1 ? ' minute' : ' minutes'));
    } else if(from === 'Minutes' && to === 'Years') {
      setterResult(parseFloat((value / 525600).toFixed(6)) + (value / 525600 <= 1 ? ' year' : ' years'));
      setterFinalValue(value + (value <= 1 ? ' minute' : ' minutes'));
    }

    // hours
    if(from === 'Hours' && to === 'Seconds') {
      setterResult(parseFloat((value * 3600).toFixed(2)).toLocaleString() + (value * 3600 <= 1 ? ' second' : ' seconds'));
      setterFinalValue(value + ( value <= 1 ? ' hour' : ' hours'));
    } else if(from === 'Hours' && to === 'Minutes') {
      setterResult(parseFloat((value * 60).toFixed(1)).toLocaleString() + (value * 60 <= 1 ? ' minute' : ' minutes'));
      setterFinalValue(value + ( value <= 1 ? ' hour' : ' hours'));
    } else if(from === 'Hours' && to === 'Days') {
      setterResult(parseFloat((value / 24).toFixed(3)) + (value / 24 <= 1 ? ' day' : ' days'));
      setterFinalValue(value + ( value <= 1 ? ' hour' : ' hours'));
    } else if(from === 'Hours' && to === 'Weeks') {
      setterResult(parseFloat((value / 168).toFixed(5)) + (value / 168 <= 1 ? ' week' : ' weeks'));
      setterFinalValue(value + ( value <= 1 ? ' hour' : ' hours'));
    } else if(from === 'Hours' && to === 'Months') {
      setterResult(parseFloat((value / 720).toFixed(6)) + (value / 720 <= 1 ? ' month' : ' months'));
      setterFinalValue(value + ( value <= 1 ? ' hour' : ' hours'));
    } else if(from === 'Hours' && to === 'Years') {
      setterResult(parseFloat((value / 8760).toFixed(7)) + (value / 8760 <= 1 ? ' year' : ' years'));
      setterFinalValue(value + ( value <= 1 ? ' hour' : ' hours'));
    }

    // days
    if(from === 'Days' && to === 'Seconds') {
      setterResult(parseFloat((value * 86400).toPrecision(2)).toLocaleString() + (value * 86400 <= 1 ? ' second' : ' seconds'));
      setterFinalValue(value + (value <= 1 ? ' day' : ' days'));
    } else if(from === 'Days' && to === 'Minutes') {
      setterResult(parseFloat((value * 1440).toPrecision(2)).toLocaleString() + (value * 1440 <= 1 ? ' minute' : ' minutes'));
      setterFinalValue(value + (value <= 1 ? ' day' : ' days'));
    } else if(from === 'Days' && to === 'Hours') {
      setterResult(parseFloat((value * 24).toPrecision(2)).toLocaleString() + (value * 24 <= 1 ? ' hour' : ' hours'));
      setterFinalValue(value + (value <= 1 ? ' day' : ' days'));
    } else if(from === 'Days' && to === 'Weeks') {
      setterResult(parseFloat((value / 7).toPrecision(2)) + (value / 7 <= 1 ? ' week' : ' weeks'));
      setterFinalValue(value + (value <= 1 ? ' day' : ' days'));
    } else if(from === 'Days' && to === 'Months') {
      setterResult(parseFloat((value / 30.4167).toPrecision(2)) + (value / 30.4167 <= 1 ? ' month' : ' months'));
      setterFinalValue(value + (value <= 1 ? ' day' : ' days'));
    } else if(from === 'Days' && to === 'Years') {
      setterResult(parseFloat((value / 365).toPrecision(2)) + (value / 365 <= 1 ? ' year' : ' years'));
      setterFinalValue(value + (value <= 1 ? ' day' : ' days'));
    }

    // weeks
    if(from === 'Weeks' && to === 'Seconds') {
      setterResult(parseFloat((value * 604800).toPrecision(2)).toLocaleString() + (value * 604800 <= 1 ? ' second' : ' seconds'));
      setterFinalValue(value + (value <= 1 ? ' week' : ' weeks'));
    } else if(from === 'Weeks' && to === 'Minutes') {
      setterResult(parseFloat((value * 10080).toPrecision(2)).toLocaleString() + (value * 10080 <= 1 ? ' minute' : ' minutes'));
      setterFinalValue(value + (value <= 1 ? ' week' : ' weeks'));
    } else if(from === 'Weeks' && to === 'Hours') {
      setterResult(parseFloat((value * 168).toPrecision(2)).toLocaleString() + (value * 168 <= 1 ? ' hour' : ' hours'));
      setterFinalValue(value + (value <= 1 ? ' week' : ' weeks'));
    } else if(from === 'Weeks' && to === 'Days') {
      setterResult(parseFloat((value * 7).toPrecision(2)).toLocaleString() + (value * 7 <= 1 ? ' day' : ' days'));
      setterFinalValue(value + (value <= 1 ? ' week' : ' weeks'));
    } else if(from === 'Weeks' && to === 'Months') {
      setterResult(parseFloat((value / 4.34524).toPrecision(2)) + (value / 4.34524 <= 1 ? ' month' : ' months'));
      setterFinalValue(value + (value <= 1 ? ' week' : ' weeks'));
    } else if(from === 'Weeks' && to === 'Years') {
      setterResult(parseFloat((value / 52).toPrecision(3)) + (value / 52.1429 <= 1 ? ' year' : ' years'));
      setterFinalValue(value + (value <= 1 ? ' week' : ' weeks'));
    }

    // months
    if(from === 'Months' && to === 'Seconds') {
      setterResult(parseFloat((value * 2.592e+6).toPrecision(2)).toLocaleString() + (value * 2.592e+6 <= 1 ? ' second' : ' seconds'));
      setterFinalValue(value + (value <= 1 ? ' month' : ' months'));
    } else if(from === 'Months' && to === 'Minutes') {
      setterResult(parseFloat((value * 43800).toPrecision(2)).toLocaleString() + (value * 43800 <= 1 ? ' minute' : ' minutes'));
      setterFinalValue(value + (value <= 1 ? ' month' : ' months'));
    } else if(from === 'Months' && to === 'Hours') {
      setterResult(parseFloat((value * 730.481).toPrecision(2)).toLocaleString() + (value * 730.481 <= 1 ? ' hour' : ' hours'));
      setterFinalValue(value + (value <= 1 ? ' month' : ' months'));
    } else if(from === 'Months' && to === 'Days') {
      setterResult(parseFloat((value * 30.4167).toPrecision(2)).toLocaleString() + (value * 30.4167 <= 1 ? ' day' : ' days'));
      setterFinalValue(value + (value <= 1 ? ' month' : ' months'));
    } else if(from === 'Months' && to === 'Weeks') {
      setterResult(parseFloat((value * 4.34524).toPrecision(2)).toLocaleString() + (value * 4.34524 <= 1 ? ' week' : ' weeks'));
      setterFinalValue(value + (value <= 1 ? ' month' : ' months'));
    } else if(from === 'Months' && to === 'Years') {
      setterResult(parseFloat((value / 12).toPrecision(2)).toLocaleString() + (value / 12 <= 1 ? ' year' : ' years'));
      setterFinalValue(value + (value <= 1 ? ' month' : ' months'));
    }

    // years
    if(from === 'Years' && to === 'Seconds') {
      setterResult(parseFloat((value * 3.154e+7).toPrecision(2)).toLocaleString() + (value * 3.154e+7 <= 1 ? ' second' : ' seconds'));
      setterFinalValue(value + (value <= 1 ? ' year' : ' years'));
    } else if(from === 'Years' && to === 'Minutes') {
      setterResult(parseFloat((value * 525600).toPrecision(2)).toLocaleString() + (value * 525600 <= 1 ? ' minute' : ' minutes'));
      setterFinalValue(value + (value <= 1 ? ' year' : ' years'));
    } else if(from === 'Years' && to === 'Hours') {
      setterResult(parseFloat((value * 8760).toPrecision(2)).toLocaleString() + (value * 8760 <= 1 ? ' hour' : ' hours'));
      setterFinalValue(value + (value <= 1 ? ' year' : ' years'));
    } else if(from === 'Years' && to === 'Days') {
      setterResult(parseFloat((value * 365).toPrecision(2)).toLocaleString() + (value * 365 <= 1 ? ' day' : ' days'));
      setterFinalValue(value + (value <= 1 ? ' year' : ' years'));
    } else if(from === 'Years' && to === 'Weeks') {
      setterResult(parseFloat((value * 52).toPrecision(3)).toLocaleString() + (value * 52.1429 <= 1 ? ' week' : ' weeks'));
      setterFinalValue(value + (value <= 1 ? ' year' : ' years'));
    } else if(from === 'Years' && to === 'Months') {
      setterResult(parseFloat((value * 12).toPrecision(2)).toLocaleString() + (value * 12 <= 1 ? ' month' : ' months'));
      setterFinalValue(value + (value <= 1 ? ' year' : ' years'));
    }
    setterInputValue('');
  }
  // Length
  function Length(inputValue, from, to) {
    const value = Number(inputValue)

    // millimeters
    if(from === 'millimeters' && to === 'centimeters') {
      setterResult((value / 10).toFixed(1) + ' cm');
      setterFinalValue(value + ' mm');
    } else if(from === 'millimeters' && to === 'inches') {
      setterResult(parseFloat((value / 25.4).toFixed(2)) + ' in');
      setterFinalValue(value + ' mm');
    } else if(from === 'millimeters' && to === 'feet') {
      setterResult(parseFloat((value / 304.8).toFixed(3)) + ' ft');
      setterFinalValue(value + ' mm');
    } else if(from === 'millimeters' && to === 'yards') {
      setterResult(parseFloat((value / 914.4).toFixed(3)) + ' yd');
      setterFinalValue(value + ' mm');
    } else if(from === 'millimeters' && to === 'meters') {
      setterResult((value / 1000).toFixed(3) + ' m');
      setterFinalValue(value + ' mm');
    } else if(from === 'millimeters' && to === 'kilometers') {
      setterResult((value / 1000000).toFixed(6) + ' km');
      setterFinalValue(value + ' mm');
    } 

    // centimeters
    if(from === 'centimeters' && to === 'millimeters') {
      setterResult(parseFloat((value * 10).toFixed(1)) + ' mm');
      setterFinalValue(value + ' cm');
    } else if(from === 'centimeters' && to === 'inches') {
      setterResult((value / 2.54).toFixed(1) + ' in');
      setterFinalValue(value + ' cm');
    } else if(from === 'centimeters' && to === 'feet') {
      setterResult((value / 30.48).toFixed(2) + ' ft');
      setterFinalValue(value + ' cm');
    } else if(from === 'centimeters' && to === 'yards') {
      setterResult((value / 91.44).toFixed(2) + ' yd');
      setterFinalValue(value + ' cm');
    } else if(from === 'centimeters' && to === 'meters') {
      setterResult((value / 100).toFixed(2) + ' m');
      setterFinalValue(value + ' cm');
    } else if(from === 'centimeters' && to === 'kilometers') {
      setterResult((value / 100000).toFixed(5) + ' km');
      setterFinalValue(value + ' cm');
    }

    // inches
    if(from === 'inches' && to === 'millimeters') {
      setterResult((value * 25.4).toFixed(1) + ' mm');
      setterFinalValue(value + ' in');
    } else if(from === 'inches' && to === 'centimeters') {
      setterResult((value * 2.54).toFixed(2) + ' cm');
      setterFinalValue(value + ' in');
    } else if(from === 'inches' && to === 'feet') {
      setterResult((value / 12).toFixed(3) + ' ft');
      setterFinalValue(value + ' in');
    } else if(from === 'inches' && to === 'yards') {
      setterResult(parseFloat((value / 36).toFixed(5)) + ' yd');
      setterFinalValue(value + ' in');
    } else if(from === 'inches' && to === 'meters') {
      setterResult(parseFloat((value * 0.0254).toFixed(6)) + ' m');
      setterFinalValue(value + ' in');
    } else if(from === 'inches' && to === 'kilometers') {
      setterResult(parseFloat((value / 39370).toFixed(5)) + ' km');
      setterFinalValue(value + ' in');
    }

    // feet
    if(from === 'feet' && to === 'millimeters') {
      setterResult(parseFloat((value * 304.8).toFixed(2)) + ' mm');
      setterFinalValue(value + ' ft');
    } else if(from === 'feet' && to === 'centimeters') {
      setterResult(parseFloat((value * 30.48).toFixed(2)) + ' cm');
      setterFinalValue(value + ' ft');
    } else if(from === 'feet' && to === 'inches') {
      setterResult(parseFloat((value * 12).toFixed(2)) + ' in');
      setterFinalValue(value + ' ft');
    } else if(from === 'feet' && to === 'yards') {
      setterResult(parseFloat((value / 3).toFixed(3)) + ' yd');
      setterFinalValue(value + ' ft');
    } else if(from === 'feet' && to === 'meters') {
      setterResult(parseFloat((value * 0.3048).toFixed(3)) + ' m');
      setterFinalValue(value + ' ft');
    } else if(from === 'feet' && to === 'kilometers') {
      setterResult(parseFloat((value / 3280.8).toFixed(5)) + ' km');
      setterFinalValue(value + ' ft');
    }

    // yards
    if(from === 'yards' && to === 'millimeters') {
      setterResult(parseFloat((value * 914.4).toFixed(2)) + ' mm');
      setterFinalValue(value + ' yd');
    } else if(from === 'yards' && to === 'centimeters') {
      setterResult(parseFloat((value * 91.44).toFixed(1)) + ' cm');
      setterFinalValue(value + ' yd');
    } else if(from === 'yards' && to === 'inches') {
      setterResult(parseFloat((value * 36).toFixed(2)) + ' in');
      setterFinalValue(value + ' yd');
    } else if(from === 'yards' && to === 'feet') {
      setterResult(parseFloat((value * 3).toFixed(2)) + ' ft');
      setterFinalValue(value + ' yd');
    } else if(from === 'yards' && to === 'meters') {
      setterResult(parseFloat((value * 0.9144).toFixed(2)) + ' m');
      setterFinalValue(value + ' yd');
    } else if(from === 'yards' && to === 'kilometers') {
      setterResult(parseFloat((value * 0.0009144).toFixed(4)) + ' km');
      setterFinalValue(value + ' yd');
    }

    // meters
    if(from === 'meters' && to === 'millimeters') {
      setterResult(parseFloat((value * 1000).toFixed(1)) + ' mm');
      setterFinalValue(value + ' m');
    } else if(from === 'meters' && to === 'centimeters') {
      setterResult(parseFloat((value * 100).toFixed(1)) + ' cm');
      setterFinalValue(value + ' m');
    } else if(from === 'meters' && to === 'inches') {
      setterResult(parseFloat((value * 39.3701).toFixed(1)) + ' in');
      setterFinalValue(value + ' m');
    } else if(from === 'meters' && to === 'feet') {
      setterResult(parseFloat((value * 3.28084).toFixed(2)) + ' ft');
      setterFinalValue(value + ' m');
    } else if(from === 'meters' && to === 'yards') {
      setterResult(parseFloat((value * 1.094).toFixed(1)) + ' yd');
      setterFinalValue(value + ' m');
    } else if(from === 'meters' && to === 'kilometers') {
      setterResult(parseFloat((value / 1000).toFixed(6)) + ' km');
      setterFinalValue(value + ' m');
    }

    // kilometers
    if(from === 'kilometers' && to === 'millimeters') {
      setterResult(parseFloat((value * 1000000).toFixed(1)) + ' mm');
      setterFinalValue(value + ' km');
    } else if(from === 'kilometers' && to === 'centimeters') {
      setterResult(parseFloat((value * 100000).toFixed(1)) + ' cm');
      setterFinalValue(value + ' km');
    } else if(from === 'kilometers' && to === 'inches') {
      setterResult(parseFloat((value * 39370.07874).toFixed(1)) + ' in');
      setterFinalValue(value + ' km');
    } else if(from === 'kilometers' && to === 'feet') {
      setterResult(parseFloat((value * 3280.8399).toFixed(2)) + ' ft');
      setterFinalValue(value + ' km');
    } else if(from === 'kilometers' && to === 'yards') {
      setterResult(parseFloat((value * 1093.6132983).toFixed(2)) + ' yd');
      setterFinalValue(value + ' km');
    } else if(from === 'kilometers' && to === 'meters') {
      setterResult(parseFloat((value * 1000).toFixed(2)) + ' m');
      setterFinalValue(value + ' km');
    }
    setterInputValue('');
  }

  function Money(inputValue, from, to) {
    const value = Number(inputValue)
    const fromCurrency = units.find(currency => currency.name === from); // country to evaluate
    const toCurrency = units.find(currency => currency.name === to); // country to convert

    const toConvertValue = toCurrency.convertValue // to currency value
    const fromConvertValue = fromCurrency.convertValue // from currency value 

    const result = Number((value * toConvertValue / fromConvertValue).toFixed(2));

    setterResult(Number(result).toLocaleString() + ' ' + toCurrency.value);
    setterFinalValue(value + ' ' + fromCurrency.value);
  }

  // Executions base on the content
  if(name === 'Temperature') return Temperatures(inputValue, from, to);
  if(name === 'BMI') return BMI(inputValue1, inputValue2, from, to);
  if(name === 'Time') return Time(inputValue, from, to);
  if(name === 'Length') return Length(inputValue, from, to);
  if(name === 'Money') return Money(inputValue, from, to);
}