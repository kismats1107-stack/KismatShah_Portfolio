import type { IconType } from 'react-icons';
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNodedotjs,
  SiArduino,
  SiEspressif,
  SiRaspberrypi,
  SiGithub,
  SiGit,
  SiFigma,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { VscVscode } from 'react-icons/vsc';
import { Radio, Box, MapPin, Code2, Globe, Cpu, Wrench, Sparkles } from 'lucide-react';

export interface Skill {
  name: string;
  level?: number;
  exp?: string;
  tags?: string[];
  icon: IconType;
  iconColor: string;
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  color: string;
  glowColor?: string;
  badgeIcon: IconType;
  skills: Skill[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    number: '01',
    title: 'Programming',
    description: 'Core languages I use to build robust algorithms, embedded logic, and scalable software.',
    color: '#00d4ff',
    glowColor: 'rgba(0, 212, 255, 0.45)',
    badgeIcon: Code2,
    skills: [
      { name: 'Python', level: 85, exp: 'Advanced', tags: ['AI/ML', 'Automation', 'Data'], icon: SiPython, iconColor: '#3776ab' },
      { name: 'C', level: 80, exp: 'Proficient', tags: ['Embedded', 'Low-level'], icon: SiC, iconColor: '#a8b9cc' },
      { name: 'C++', level: 75, exp: 'Proficient', tags: ['OOP', 'Robotics'], icon: SiCplusplus, iconColor: '#00599c' },
      { name: 'JavaScript', level: 75, exp: 'Intermediate', tags: ['ES6+', 'Fullstack'], icon: SiJavascript, iconColor: '#f7df1e' },
      { name: 'Java', level: 70, exp: 'Intermediate', tags: ['OOP', 'Backend'], icon: FaJava, iconColor: '#007396' },
    ],
  },
  {
    id: 'web',
    number: '02',
    title: 'Web Development',
    description: 'Modern front-end and full-stack frameworks for crafting responsive, interactive web experiences.',
    color: '#ec4899',
    glowColor: 'rgba(236, 72, 153, 0.45)',
    badgeIcon: Globe,
    skills: [
      { name: 'HTML5', level: 90, exp: 'Expert', tags: ['Semantic', 'SEO'], icon: SiHtml5, iconColor: '#e34f26' },
      { name: 'CSS3 / Tailwind', level: 88, exp: 'Advanced', tags: ['Responsive', 'Motion'], icon: SiCss, iconColor: '#1572b6' },
      { name: 'React', level: 75, exp: 'Proficient', tags: ['Hooks', 'Vite', 'SPA'], icon: SiReact, iconColor: '#61dafb' },
      { name: 'Node.js', level: 68, exp: 'Intermediate', tags: ['Express', 'REST APIs'], icon: SiNodedotjs, iconColor: '#339933' },
    ],
  },
  {
    id: 'hardware',
    number: '03',
    title: 'Hardware / IoT',
    description: 'Microcontrollers, telemetry systems, flight controllers, and physical sensors for robotics.',
    color: '#ff8a3f',
    glowColor: 'rgba(255, 138, 63, 0.45)',
    badgeIcon: Cpu,
    skills: [
      { name: 'Arduino', level: 85, exp: 'Advanced', tags: ['Firmware', 'Prototyping'], icon: SiArduino, iconColor: '#00979d' },
      { name: 'Sensors', level: 80, exp: 'Proficient', tags: ['IMU', 'Ultrasonic', 'LIDAR'], icon: Radio, iconColor: '#ff8a3f' },
      { name: 'ESP32', level: 75, exp: 'Proficient', tags: ['WiFi/BLE', 'IoT Cloud'], icon: SiEspressif, iconColor: '#e7352c' },
      { name: 'Raspberry Pi', level: 72, exp: 'Intermediate', tags: ['Linux', 'Edge AI'], icon: SiRaspberrypi, iconColor: '#a22846' },
      { name: 'GPS Module', level: 70, exp: 'Intermediate', tags: ['Telemetry', 'NMEA'], icon: MapPin, iconColor: '#ff8a3f' },
      { name: 'Pixhawk Cube', level: 65, exp: 'Intermediate', tags: ['ArduPilot', 'Drones'], icon: Box, iconColor: '#ff8a3f' },
    ],
  },
  {
    id: 'tools',
    number: '04',
    title: 'Tools',
    description: 'Developer environments, version control systems, and tooling to streamline project workflows.',
    color: '#8b5cf6',
    glowColor: 'rgba(139, 92, 246, 0.45)',
    badgeIcon: Wrench,
    skills: [
      { name: 'VS Code', level: 90, exp: 'Expert', tags: ['Extensions', 'IDE'], icon: VscVscode, iconColor: '#007acc' },
      { name: 'Arduino IDE', level: 85, exp: 'Advanced', tags: ['Serial', 'Flashing'], icon: SiArduino, iconColor: '#00979d' },
      { name: 'GitHub & Git', level: 80, exp: 'Proficient', tags: ['CI/CD', 'Collaboration'], icon: SiGithub, iconColor: '#181717' },
      { name: 'Antigravity', level: 85, exp: 'Advanced', tags: ['AI Pair Programming'], icon: Sparkles, iconColor: '#8b5cf6' },
    ],
  },
];

export interface ToolItem {
  name: string;
  icon: IconType;
  iconColor: string;
}

export const TOOLS_USED: ToolItem[] = [
  { name: 'Git', icon: SiGit, iconColor: '#f05032' },
  { name: 'VS Code', icon: VscVscode, iconColor: '#007acc' },
  { name: 'Arduino IDE', icon: SiArduino, iconColor: '#00979d' },
  { name: 'GitHub', icon: SiGithub, iconColor: '#181717' },
  { name: 'Figma', icon: SiFigma, iconColor: '#f24e1e' },
];

export const TOTAL_TECHNOLOGIES = SKILL_CATEGORIES.reduce((sum, c) => sum + c.skills.length, 0);
