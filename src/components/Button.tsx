import React from 'react'
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
    title: string;
};

export const Button = ({ title, ...rest }: ButtonProps) => {
    return (
        <TouchableOpacity {...rest} activeOpacity={.7} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#a370f7',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16
    },
    buttonText: {
        color: '#f4ede8',
        fontSize: 16,
        fontWeight: 'bold',
    },
})