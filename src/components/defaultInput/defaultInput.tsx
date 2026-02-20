import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';
import styles from './styleInput';

interface InputProps extends TextInputProps {
    onChangeText?: (text: string) => void;
    
}

export  default function Input({ ...rest }: InputProps) {
  return (
    <TextInput
      onChangeText={rest.onChangeText}
      style={styles.input}
      placeholderTextColor="#6B7280"
      {...rest} 
    />
  );
}

