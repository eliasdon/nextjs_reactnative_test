import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator, ScrollView } from 'react-native';

export function ApiTestScreen({ onBack }: { onBack: () => void }) {
    const [fact, setFact] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchFact = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://catfact.ninja/fact');
            const data = await response.json();
            setFact(data.fact);
        } catch (e) {
            setFact('Failed to fetch fact (Network Error?)');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Button title="← Back" onPress={onBack} />
            <Text style={styles.title}>API Playground</Text>

            <View style={styles.card}>
                <Text style={styles.desc}>Testing: https://catfact.ninja/fact</Text>

                <View style={styles.resultBox}>
                    {loading ? (
                        <ActivityIndicator color="#000" />
                    ) : (
                        <Text style={styles.factText}>
                            {fact ? `"${fact}"` : 'Press the button to get a cat fact!'}
                        </Text>
                    )}
                </View>

                <Button title="Get Cat Fact" onPress={fetchFact} />
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
        minHeight: 200,
        justifyContent: 'space-between',
    },
    desc: {
        color: '#888',
        marginBottom: 20,
        textAlign: 'center',
    },
    resultBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
    },
    factText: {
        fontSize: 18,
        fontStyle: 'italic',
        textAlign: 'center',
        lineHeight: 26,
    },
});
