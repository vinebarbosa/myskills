import React from 'react'

import { 
  Text, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native'

export function Button(props) {
  return (
    <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.6}
        onPress={props.onPress}
      >
        <Text style={styles.buttonText}>Adicionar</Text>
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