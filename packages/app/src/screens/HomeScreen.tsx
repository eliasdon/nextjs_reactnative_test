import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { ScreenName } from '../App';

export function HomeScreen({ onNavigate }: { onNavigate: (screen: ScreenName) => void }) {
    return (
        <View style={styles.container}>
            <Text style={styles.intro}>
                Welcome to the React Native portion! Choose a demo below:
            </Text>

            <MenuButton title="📱 Device Info" onPress={() => onNavigate('Device')} />
            <MenuButton title="🌐 API Playground" onPress={() => onNavigate('API')} />
            <MenuButton title="💾 Local Storage" onPress={() => onNavigate('Storage')} />
        </View>
    );
}

function MenuButton({ title, onPress }: { title: string, onPress: () => void }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 15,
    },
    intro: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    button: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#eee',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2, // Android shadow
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
});
