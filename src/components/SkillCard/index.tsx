import React from "react"

import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
} from 'react-native'

interface SkillProps extends TouchableOpacityProps {
  skill: string
}

export function SkillCard({ skill, ...rest } : SkillProps) {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}
      {...rest}
    >
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