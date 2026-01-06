import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { HomeScreen } from './screens/HomeScreen';
import { DeviceInfoScreen } from './screens/DeviceInfoScreen';
import { ApiTestScreen } from './screens/ApiTestScreen';
import { StorageScreen } from './screens/StorageScreen';

export type ScreenName = 'Home' | 'Device' | 'API' | 'Storage';

export function App() {
    const [currentScreen, setCurrentScreen] = useState<ScreenName>('Home');

    const renderScreen = () => {
        switch (currentScreen) {
            case 'Home':
                return <HomeScreen onNavigate={setCurrentScreen} />;
            case 'Device':
                return <DeviceInfoScreen onBack={() => setCurrentScreen('Home')} />;
            case 'API':
                return <ApiTestScreen onBack={() => setCurrentScreen('Home')} />;
            case 'Storage':
                return <StorageScreen onBack={() => setCurrentScreen('Home')} />;
            default:
                return <HomeScreen onNavigate={setCurrentScreen} />;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>React Native Demo</Text>
            </View>
            <View style={styles.content}>
                {renderScreen()}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        minHeight: '100%',
    },
    header: {
        padding: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        padding: 20,
    },
});
