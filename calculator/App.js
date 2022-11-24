import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operation, setOperation] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [current, setCurrent] = useState(0);

  addDigit = (n) => {
    const clear = displayValue === '0' || clearDisplay;

    if (n === '.' && !clear && displayValue.includes('.')) {
      return;
    }

    const currentValue = clear ? '' : displayValue;
    const display = currentValue + n;
    setDisplayValue(display);
    setClearDisplay(false);

    if (n !== '.') {
      const newValue = parseFloat(display);
      const newValues = [...values];
      newValues[current] = newValue;
      setValues(newValues);
    }
  };

  clearMemory = () => {
    setDisplayValue('0');
    setClearDisplay(false);
    setOperation(null);
    setValues([0, 0]);
    setCurrent(0);
  };

  handleOperation = (op) => {
    if (current === 0) {
      setOperation(op);
      setCurrent(1);
      setClearDisplay(true);
    } else {
      const equals = op === '=';
      const auxValues = [...values];
      try {
        auxValues[0] = eval(`${auxValues[0]} ${operation} ${auxValues[1]}`)
      } catch (e) {
        auxValues[0] = values[0];
      }

      auxValues[1] = 0;
      setDisplayValue(`${auxValues[0]}`);
      setOperation(equals ? null : op);
      setCurrent(equals ? 0 : 1);
      setClearDisplay(!equals);
      setValues(auxValues);
    }
  };

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label='AC' triple onClick={clearMemory} />
        <Button label='/' operation onClick={handleOperation} />
        <Button label='7' onClick={addDigit} />
        <Button label='8' onClick={addDigit} />
        <Button label='9' onClick={addDigit} />
        <Button label='*' operation onClick={handleOperation} />
        <Button label='4' onClick={addDigit} />
        <Button label='5' onClick={addDigit} />
        <Button label='6' onClick={addDigit} />
        <Button label='-' operation onClick={handleOperation} />
        <Button label='1' onClick={addDigit} />
        <Button label='2' onClick={addDigit} />
        <Button label='3' onClick={addDigit} />
        <Button label='+' operation onClick={handleOperation} />
        <Button label='0' double onClick={addDigit} />
        <Button label='.' onClick={addDigit} />
        <Button label='=' operation onClick={handleOperation} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
