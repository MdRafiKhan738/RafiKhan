import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiAmazon,
  SiFlutter,
  SiAndroid,
  SiIos,
  SiPython,
  SiOpenai,
} from 'react-icons/si'
import { SiFramermotion } from 'react-icons/si'

import { Brain, Cpu, Smartphone } from 'lucide-react'

export const skills = Object.freeze({
  mobile: [
    { icon: SiFlutter, label: 'Flutter', color: '#02569B' },
    { icon: SiAndroid, label: 'Android', color: '#3ddc84' },
    { icon: SiIos, label: 'iOS', color: '#ffffff' },
    { icon: Smartphone, label: 'Expo', color: '#ff4dff' },
  ],

  frontend: [
    { icon: SiNextdotjs, label: 'Next.js', color: '#ffffff' },
    { icon: SiReact, label: 'React', color: '#61dafb' },
    { icon: SiTypescript, label: 'TypeScript', color: '#3178c6' },
    { icon: SiTailwindcss, label: 'Tailwind', color: '#38bdf8' },
    { icon: SiFramermotion, label: 'Framer Motion', color: '#e100ff' },
  ],

  backend: [
    { icon: SiNodedotjs, label: 'Node.js', color: '#3c873a' },
    { icon: SiExpress, label: 'Express', color: '#ffffff' },
    { icon: SiPostgresql, label: 'PostgreSQL', color: '#336791' },
    { icon: SiMongodb, label: 'MongoDB', color: '#47a248' },
    { icon: SiFirebase, label: 'Firebase', color: '#FFCA28' },
    { icon: SiAmazon, label: 'AWS', color: '#ff9900' },
  ],

  ai: [
    { icon: Brain, label: 'AI Architecture', color: '#ff00ff' },
    { icon: SiOpenai, label: 'OpenAI', color: '#10a37f' },
    { icon: Cpu, label: 'Gemini', color: '#8b5cf6' },
    { icon: SiPython, label: 'Python', color: '#ffd43b' },
  ],
})
