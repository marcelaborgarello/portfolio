'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, Store, CreditCard, Camera, SearchCheck } from 'lucide-react';

const highlights = [
    {
        icon: <CreditCard className="w-5 h-5 text-blue-500 shrink-0" />,
        text: "Cobros con Mercado Pago (posnet Point Smart, QR y transferencia): el sistema reconoce el pago que entró y lo asocia a la venta. Si el monto no coincide exacto, le pide confirmación al cajero.",
    },
    {
        icon: <SearchCheck className="w-5 h-5 text-blue-500 shrink-0" />,
        text: "Usándolo en mi local descubrí que el sistema no reconocía casi la mitad de las transferencias de Mercado Pago. Encontré la causa con los datos reales y lo corregí.",
    },
    {
        icon: <Camera className="w-5 h-5 text-blue-500 shrink-0" />,
        text: "Lo último que agregué: el proveedor entrega el remito en papel (a veces escrito a mano), le sacás una foto y la IA carga el pedido para que lo revises y lo confirmes.",
    },
];

const tags = ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "ARCA", "Mercado Pago", "Gemini"];

/**
 * Tarjeta principal: Ginialym.
 */
export const GinialymCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-3 p-[1px] rounded-3xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 hover:from-blue-500/50 hover:to-purple-500/50 transition-all duration-300 shadow-2xl"
        >
            <div className="w-full h-full rounded-[23px] bg-[#0A0A0A] p-8 md:p-12 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                            <Store className="w-8 h-8" />
                        </div>
                        <div>
                            <span className="text-blue-400 text-xs font-black uppercase tracking-[0.2em] block mb-1">Desde diciembre 2025</span>
                            <h3 className="text-4xl font-black text-white tracking-tighter lg:text-5xl">Ginialym</h3>
                        </div>
                    </div>
                    <span className="px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-[10px] font-black uppercase tracking-wider">En uso real · 2 comercios</span>
                </div>

                <div className="space-y-4 text-zinc-300 text-lg leading-relaxed max-w-3xl">
                    <p>
                        Empezó como una prueba, un arqueo de caja simple para la verdulería que tenía en ese momento. Fue creciendo hasta ser un sistema de gestión para comercios: caja, stock, proveedores, facturación electrónica con ARCA y cobros con Mercado Pago (posnet, QR y transferencia).
                    </p>
                    <p>
                        Lo promocioné en redes y varios comercios lo probaron en modo prueba. Eso me mostró que todavía no estaba listo para crecer, así que lo seguí puliendo. Hoy lo usan a diario dos negocios: mi local y la panadería de mi hija.
                    </p>
                </div>

                <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-2">
                    {highlights.map((item) => (
                        <li key={item.text} className="flex gap-3 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-sm text-zinc-300 leading-relaxed">
                            {item.icon}
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                    {tags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-400 text-[10px] font-black uppercase tracking-widest border border-zinc-800">{tag}</span>
                    ))}
                </div>

                <Link
                    href="https://ginialym.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-800 text-white font-black hover:bg-zinc-700 transition-all border border-zinc-700"
                >
                    Ver ginialym.com <ExternalLink className="w-5 h-5" />
                </Link>
            </div>
        </motion.div>
    );
};
