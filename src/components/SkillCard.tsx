import React from 'react'
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export const SkillCard = ({ skill, ...rest }: SkillCardProps) => {
    return (
        <TouchableOpacity {...rest} style={styles.buttonSkill}>
            <Text style={styles.skill}>{skill}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1f1e25',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        marginTop: 16,
    },
    skill: {
        color: '#f4ede8',
        fontSize: 16,
        fontWeight: 'bold',
    }
})