import React from "react"
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity style={styles.buttonSkill} >
      <Text style={styles.buttonSkillText}>{skill}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 15
  },
  buttonSkillText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
})