import React, { useState, useEffect } from "react"
import { 
  View,
  Text, 
  StyleSheet, 
  TextInput,
  FlatList
} from 'react-native'

import { Button } from "../../components/Button"
import { SkillCard } from "../../components/SkillCard"

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState([])
  const [greeting, setGreeting] = useState('')

  function handleAddNewSkill() {
    setMySkills([...mySkills, newSkill])
    setNewSkill('')
  }

  useEffect(() => {
    const currentHour = new Date().getHours()
    
    if(currentHour < 12) {
      setGreeting('Bom dia')
    }

    else if(currentHour >= 12 && currentHour < 18) {
      setGreeting('Boa tarde')
    }

    else {
    setGreeting('Boa noite')
    }
  }, [])

  return (
    
      <View style={styles.container}> 
        <Text style={styles.title} >Bem-vindo, Vinícios</Text>
        <Text style={styles.greeting}>{greeting}</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Nova Skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
          value={newSkill}
        />
        
        <Button onPress={handleAddNewSkill}/>

        <Text 
          style={[styles.title, { marginVertical: 50}]}
        >
          Minhas Skills
        </Text>

        <FlatList
          data={mySkills}
          keyExtractor={ skill => skill }
          renderItem={({ item }) => <SkillCard skill={item} /> }
        />
      </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 50
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    color: 'white',
    fontSize: 18,
    padding: 10,
    marginTop: 30,
    borderRadius: 8
  },
  greeting:{
    color: 'white',
    fontSize: 18,
  }
})