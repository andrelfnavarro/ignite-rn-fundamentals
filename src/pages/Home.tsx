import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Platform, FlatList, StatusBar } from 'react-native'
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface Skill {
    id: string;
    name: string;
}

export const Home = () => {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<Skill[]>([]);
    const [greetings, setGreetings] = useState('');

    const handleAddNewSkill = () => {
        const data = {
            id: new Date().getTime().toString(),
            name: newSkill,
        }

        setMySkills(state => [...state, data])
    }

    const handleRemoveSkillById = (id: string) => {
        setMySkills(state => state.filter(skill => skill.id !== id))
    }

    useEffect(() => {

        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            setGreetings('Good morning')
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreetings('Good afternoon')
        } else {
            setGreetings('Good night')
        }

    }, [mySkills])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{greetings}, André!</Text>

            <TextInput
                style={styles.input}
                placeholder='New skill'
                placeholderTextColor='#555'
                onChangeText={setNewSkill}
                keyboardAppearance='dark'
            />

            <Button title='Add' onPress={handleAddNewSkill} />

            <Text style={[styles.title, { marginTop: 24, marginBottom: 8 }]}>My skills</Text>


            <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard skill={item.name} onPress={() => handleRemoveSkillById(item.id)} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121015', paddingHorizontal: 24, paddingVertical: 64 },
    title: {
        color: '#f4ede8',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#f4ede8',
        padding: Platform.OS === 'ios' ? 16 : 8,
        marginTop: 24,
        fontSize: 16,
        borderRadius: 8
    },
    greetings: {
        color: '#f4ede8',
    }
})