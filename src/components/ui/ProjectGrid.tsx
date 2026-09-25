'use client';

import React from 'react';
import Link from 'next/link';
import { Package, Bot, Cigarette, BookOpen, Code, Database, ChevronRight, Cpu, Layers, Users } from 'lucide-react';
import { GinialymCard } from './GinialymCard';
import { ProjectCard } from './ProjectCard';

const certifications = [
    { title: 'Web Foundations', url: 'https://apx.school/profiles/7abedec7-091e-46dd-81ec-47242cac2659/mod-0', icon: <BookOpen className="w-4 h-4" /> },
    { title: 'React Specialist', url: 'https://apx.school/profiles/7abedec7-091e-46dd-81ec-47242cac2659/web-1', icon: <Code className="w-4 h-4" /> },
    { title: 'Backend Developer', url: 'https://apx.school/profiles/7abedec7-091e-46dd-81ec-47242cac2659/dev-1', icon: <Database className="w-4 h-4" /> },
];

const skills = [
    { name: 'JS', icon: <Code className="w-4 h-4" /> },
    { name: 'TS', icon: <Cpu className="w-4 h-4" /> },
    { name: 'React', icon: <Layers className="w-4 h-4" /> },
    { name: 'Next.js', icon: <Package className="w-4 h-4" /> },
    { name: 'Node', icon: <Database className="w-4 h-4" /> },
    { name: 'Bun', icon: <Cpu className="w-4 h-4" /> },
    { name: 'PostgreSQL', icon: <Database className="w-4 h-4" /> },
    { name: 'Firebase', icon: <Database className="w-4 h-4" /> },
];

const boxStyle = "p-[1px] rounded-3xl bg-zinc-800";

/**
 * Sección de proyectos: Ginialym como principal, el resto en tarjetas,
 * más formación y tecnologías.
 */
export const ProjectGrid = () => {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
            <h2 className="text-4xl font-black text-white tracking-tighter">Proyectos</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GinialymCard />

                <ProjectCard
                    className="md:col-span-2"
                    title="arca-sdk"
                    label="Open source · npm"
                    icon={<Package className="w-6 h-6" />}
                    paragraphs={[
                        "Librería open source para facturar electrónicamente con ARCA desde Node.js y TypeScript. La construí porque las opciones existentes no me funcionaban. Hoy va por la versión 1.4, tiene 98 pruebas automáticas y la uso en producción en Ginialym.",
                    ]}
                    tags={["Node.js", "TypeScript", "ARCA / AFIP"]}
                    links={[
                        { label: 'GitHub', url: 'https://github.com/marcelaborgarello/arca-sdk' },
                        { label: 'npm', url: 'https://www.npmjs.com/package/arca-sdk' },
                    ]}
                />

                <ProjectCard
                    title="ginialtech-mcp"
                    label="Herramienta propia"
                    icon={<Bot className="w-6 h-6" />}
                    paragraphs={[
                        "Un conector propio para los agentes de IA con los que programo. Antes de empezar les da el contexto del proyecto, les recuerda mis reglas (planificar antes de tocar código, cómo se escriben las cosas) y les marca qué archivos no pueden modificar sin mi autorización.",
                    ]}
                    tags={["MCP", "Bun"]}
                    links={[{ label: 'GitHub', url: 'https://github.com/marcelaborgarello/ginialteach-mcp' }]}
                />

                <ProjectCard
                    title="Sin Humo"
                    label="App personal"
                    icon={<Cigarette className="w-6 h-6" />}
                    paragraphs={[
                        "App para dejar de fumar: registrás cada cigarrillo con un toque y te muestra cuánto tiempo pasó desde el último y cuánta plata ahorrás por día, mes y año. La hice para mí y la puede usar cualquiera. Por ahora se ingresa solo con Google, porque para el uso que tiene no hace falta más.",
                    ]}
                    tags={["Next.js", "Drizzle", "PostgreSQL"]}
                    links={[{ label: 'GitHub', url: 'https://github.com/marcelaborgarello/sin-humo' }]}
                />

                {/* Formación */}
                <div className={boxStyle}>
                    <div className="w-full h-full rounded-[23px] bg-zinc-900/90 p-8 flex flex-col gap-6">
                        <h3 className="uppercase tracking-widest text-zinc-500 text-xs font-black">Formación</h3>
                        <div className="flex flex-col gap-2">
                            {certifications.map((cert) => (
                                <Link
                                    key={cert.title}
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/item flex items-center justify-between p-3 rounded-xl bg-zinc-800/30 border border-zinc-800 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-1.5 rounded-lg bg-zinc-800 text-blue-400">{cert.icon}</div>
                                        <span className="text-xs font-bold text-zinc-400 group-hover/item:text-white transition-colors">APX · {cert.title}</span>
                                    </div>
                                    <ChevronRight className="w-3 h-3 text-zinc-600 group-hover/item:text-blue-400 transition-all" />
                                </Link>
                            ))}
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-800/30 border border-zinc-800">
                                <div className="p-1.5 rounded-lg bg-zinc-800 text-blue-400"><Users className="w-4 h-4" /></div>
                                <span className="text-xs font-bold text-zinc-400">Participé en Córdoba Hack 2026 (hackathon de 24 horas, en equipo)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tecnologías */}
                <div className={boxStyle}>
                    <div className="w-full h-full rounded-[23px] bg-zinc-900/90 p-8 flex flex-col gap-6">
                        <h3 className="uppercase tracking-widest text-zinc-500 text-xs font-black">Con qué trabajo</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {skills.map((skill) => (
                                <div key={skill.name} className="flex items-center gap-2 p-3 rounded-2xl bg-zinc-800/50 border border-zinc-800">
                                    <div className="text-purple-400 p-2 bg-zinc-900 rounded-lg">{skill.icon}</div>
                                    <span className="text-xs font-black text-zinc-200 uppercase tracking-wide">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
