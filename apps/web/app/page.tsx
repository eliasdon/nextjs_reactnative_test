"use client";

import styles from '../styles/landing.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LandingPage() {
    return (
        <main className={styles.container}>
            <div className={styles.backgroundShapes}>
                <div className={`${styles.circle} ${styles.circle1}`} />
                <div className={`${styles.circle} ${styles.circle2}`} />
            </div>

            <div className={styles.hero}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Hybrid Experience
                </motion.h1>

                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Seamlessly bridging the gap between Next.js for high-performance web
                    and React Native for cross-platform power.
                </motion.p>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, type: "spring" }}
                >
                    <Link href="/app" className={styles.ctaButton}>
                        Launch App
                    </Link>
                </motion.div>
            </div>

            <div className={styles.features}>
                <FeatureCard
                    title="Next.js Powered"
                    desc="Server-side rendering, top-tier SEO, and lightning fast initial loads for the marketing layer."
                    delay={0.8}
                />
                <FeatureCard
                    title="React Native Core"
                    desc="Shared application logic and UI components running on Web, iOS, and Android."
                    delay={1.0}
                />
                <FeatureCard
                    title="Modern Stack"
                    desc="TypeScript, CSS Modules, and Expo modules working in harmony."
                    delay={1.2}
                />
            </div>
        </main>
    );
}

function FeatureCard({ title, desc, delay }: { title: string, desc: string, delay: number }) {
    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay, duration: 0.5 }}
        >
            <div className={styles.cardTitle}>{title}</div>
            <div className={styles.cardDesc}>{desc}</div>
        </motion.div>
    );
}
