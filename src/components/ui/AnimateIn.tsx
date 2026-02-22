'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface AnimateInProps extends HTMLMotionProps<'div'> {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
}

/**
 * Componente utilitario para animaciones de entrada.
 * Permite mantener los componentes padres como Server Components.
 */
export const AnimateIn = ({ children, delay = 0, duration = 0.6, ...props }: AnimateInProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration, delay, ease: "easeOut" }}
            {...props}
        >
            {children}
        </motion.div>
    );
};
