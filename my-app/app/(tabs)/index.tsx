import React, { useState } from 'react';
import { Image, StyleSheet, Button, View, Text, TextInput } from 'react-native';

export default function HomeScreen() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [ketQua, setKetQua] = useState('');

  const handleSubmit = () => {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
      setKetQua('Vui lòng nhập số hợp lệ cho a, b và c');
      setA('');
      setB('');
      setC('');
      return;
    }

    if (aNum === 0) {
      setKetQua('Giá trị của a không thể bằng 0');
      setA('');

      return;
    }

    const result = giaiPhuongTrinhBac2(aNum, bNum, cNum);
    setKetQua(result);
    setA('');
    setB('');
    setC('');
  };

  const giaiPhuongTrinhBac2 = (a: number, b: number, c: number) => {
    const delta = b * b - 4 * a * c;

    if (delta < 0) {
      return 'Phương trình vô nghiệm';
    } else if (delta === 0) {
      return `Phương trình có nghiệm kép x1 = x2 = ${-b / (2 * a)}`;
    } else {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      return `Phương trình có 2 nghiệm phân biệt x1 = ${x1}, x2 = ${x2}`;
    }
  };

  return (
    <View style={styles.container}>
      <Text>Giải phương trình bậc 2 ax² + bx + c = 0</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập giá trị a"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập giá trị b"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập giá trị c"
        keyboardType="numeric"
        value={c}
        onChangeText={setC}
      />
      <Button title="Tính nghiệm" onPress={handleSubmit} />
      <Text style={styles.result}>{ketQua}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    width: '100%',
    paddingHorizontal: 8,
  },
  result: {
    marginTop: 16,
    fontSize: 16,
    color: 'blue',
  },
});
