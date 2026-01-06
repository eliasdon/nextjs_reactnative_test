import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform, Button } from 'react-native';

export function DeviceInfoScreen({ onBack }: { onBack: () => void }) {
    const [deviceInfo, setDeviceInfo] = useState<any>({});

    useEffect(() => {
        setDeviceInfo({
            osName: Platform.OS,
            osVersion: Platform.Version,
            userAgent: Platform.OS === 'web' ? window.navigator.userAgent : 'Native',
        });
    }, []);

    return (
        <View>
            <Button title="← Back" onPress={onBack} />
            <Text style={styles.title}>Device Information</Text>

            <View style={styles.card}>
                <InfoRow label="OS" value={deviceInfo.osName} />
                <InfoRow label="Version" value={String(deviceInfo.osVersion)} />
                <InfoRow label="User Agent" value={deviceInfo.userAgent} />
            </View>
        </View>
    );
}

const InfoRow = ({ label, value }: { label: string, value: string }) => (
    <View style={styles.row}>
        <Text style={styles.label}>{label}:</Text>
        <Text style={styles.value}>{value || 'N/A'}</Text>
    </View>
);

const styles = StyleSheet.create({
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    label: {
        fontWeight: '600',
        color: '#666',
    },
    value: {
        fontWeight: 'bold',
        color: '#333',
        maxWidth: '70%',
        textAlign: 'right',
    },
});
