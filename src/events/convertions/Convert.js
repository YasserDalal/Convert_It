
export default function Convert(name, inputValue, inputValue1, inputValue2, from, to, setterResult, setterFinalValue, setterFinalValue2, setterInputValue, setterInputValue1, setterInputValue2, setBmi) {
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

  function BMI(kiloNumber, heightNumber, from, to) {
    const weight = Number(kiloNumber);
    const height = Number(heightNumber) / 100;
    const bmi = weight / (height * height);

    console.log(from, to)
    if (from === 'Metric' && to === 'Imperial') {
      setterResult('BMI is ' + bmi.toFixed(2)); 
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
  
  if(name === 'Temperature') return Temperatures(inputValue, from, to);
  if(name === 'BMI') return BMI(inputValue1, inputValue2, from, to);
}