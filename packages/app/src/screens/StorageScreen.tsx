import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'demo_value';

export function StorageScreen({ onBack }: { onBack: () => void }) {
    const [value, setValue] = useState('');
    const [storedValue, setStoredValue] = useState<string | null>(null);

    useEffect(() => {
        loadValue();
    }, []);

    const loadValue = async () => {
        try {
            const val = await AsyncStorage.getItem(STORAGE_KEY);
            setStoredValue(val);
        } catch (e) {
            console.error('Failed to load', e);
        }
    };

    const saveValue = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, value);
            setStoredValue(value);
            setValue('');
            // Alert.alert('Success', 'Value saved!'); // Alert might not work well on web without polyfill or RN Web support, but usually fine.
        } catch (e) {
            console.error('Failed to save', e);
        }
    };

    const clearValue = async () => {
        try {
            await AsyncStorage.removeItem(STORAGE_KEY);
            setStoredValue(null);
        } catch (e) {
            console.error('Failed to clear', e);
        }
    };

    return (
        <View style={styles.container}>
            <Button title="← Back" onPress={onBack} />
            <Text style={styles.title}>Local Storage</Text>

            <View style={styles.card}>
                <Text style={styles.label}>Current Stored Value:</Text>
                <Text style={styles.value}>{storedValue || '(Empty)'}</Text>

                <View style={styles.divider} />

                <Text style={styles.label}>Save new value:</Text>
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={setValue}
                    placeholder="Type something..."
                />

                <View style={styles.btnGroup}>
                    <Button title="Save" onPress={saveValue} />
                    <View style={{ width: 10 }} />
                    <Button title="Clear" color="red" onPress={clearValue} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
    },
    card: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15,
    },
    label: {
        fontWeight: '600',
        color: '#666',
        marginBottom: 5,
    },
    value: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        overflow: 'hidden',
    },
    divider: {
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 15,
    },
    btnGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
