import React from 'react'

import { 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title ,...rest } : ButtonProps) {
  return (
    <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.6}
        {...rest}
      >
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8257E5',
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  }
})