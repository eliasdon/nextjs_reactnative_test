"use client";

import { App } from 'app';
import dynamic from 'next/dynamic';

const AppClient = dynamic(() => Promise.resolve(App), {
    ssr: false,
    loading: () => <div style={{ display: 'flex', justifyContent: 'center', padding: 50 }}>Loading App...</div>
});

export default function AppRoute() {
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <AppClient />
        </div>
    );
}
