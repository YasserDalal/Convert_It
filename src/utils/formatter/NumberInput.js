
export default function NumberInput(e, setter) {
  let raw = e.target.value.replace(/[^0-9.]/g, ''); // Remove non-numeric characters ( Only numbers and decimals are allowed )
  const parts = raw.split('.');
  // 'parts' variable is an array
  if (parts.length > 2) {
    raw = parts[0] + '.' + parts[1]; // 
  }
  // 3 digits length without decimal
  if (!raw.includes('.') && raw.length > 3) {
    raw = raw.slice(0, 3) + '.' + raw.slice(3);
  }
  // with decimal
  if (raw.includes('.')) {
    const [intPart, decimalPart] = raw.split('.');
    raw = intPart + '.' + decimalPart.slice(0, 2);
  }
  setter(raw); 
}