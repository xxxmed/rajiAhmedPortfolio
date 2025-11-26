'use client'

import { memo } from 'react'
import { 
  SiNodedotjs,
  SiPython,
  SiPhp,
  SiPostgresql,
  SiOracle,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiDocker,
  SiGithub,
  SiGithubactions,
  SiNumpy,
  SiPandas,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiFlask,
  SiOdoo,
  SiJunit5,
  SiJest,
  SiPostman,
  SiR,
  SiC,
  SiCplusplus,
  SiSpring,
  SiHibernate,
  SiSymfony,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

interface Skill {
  name: string
  categoryKey: string
}

interface SkillCardProps {
  skill: Skill
}

type IconConfig = {
  icon: React.ReactNode
  bg: string
  color: string
}

const skillIcons: Record<string, IconConfig> = {
  'java': { icon: <FaJava className="w-12 h-12" />, bg: 'bg-red-50', color: 'text-red-600' },
  'javascript': { icon: <SiJavascript className="w-12 h-12" />, bg: 'bg-yellow-50', color: 'text-yellow-500' },
  'python': { icon: <SiPython className="w-12 h-12" />, bg: 'bg-blue-50', color: 'text-blue-500' },
  'php': { icon: <SiPhp className="w-12 h-12" />, bg: 'bg-indigo-50', color: 'text-indigo-600' },
  'c': { icon: <SiC className="w-12 h-12" />, bg: 'bg-blue-50', color: 'text-blue-700' },
  'c++': { icon: <SiCplusplus className="w-12 h-12" />, bg: 'bg-blue-50', color: 'text-blue-700' },
  'node.js': { icon: <SiNodedotjs className="w-12 h-12" />, bg: 'bg-green-50', color: 'text-green-600' },
  'express': { icon: <SiExpress className="w-12 h-12" />, bg: 'bg-gray-50', color: 'text-gray-800' },
  'flask': { icon: <SiFlask className="w-12 h-12" />, bg: 'bg-gray-50', color: 'text-gray-800' },
  'spring boot': { icon: <SiSpring className="w-12 h-12" />, bg: 'bg-green-50', color: 'text-green-600' },
  'hibernate': { icon: <SiHibernate className="w-12 h-12" />, bg: 'bg-amber-50', color: 'text-amber-700' },
  'symfony': { icon: <SiSymfony className="w-12 h-12" />, bg: 'bg-gray-50', color: 'text-gray-800' },
  'odoo': { icon: <SiOdoo className="w-12 h-12" />, bg: 'bg-purple-50', color: 'text-purple-600' },
  'react': { icon: <SiReact className="w-12 h-12" />, bg: 'bg-cyan-50', color: 'text-cyan-500' },
  'next.js': { icon: <SiNextdotjs className="w-12 h-12" />, bg: 'bg-gray-50', color: 'text-gray-800' },
  'bootstrap': { icon: <SiBootstrap className="w-12 h-12" />, bg: 'bg-purple-50', color: 'text-purple-600' },
  'html5/css3': { 
    icon: <div className="flex gap-1"><SiHtml5 className="w-6 h-6" /><SiCss3 className="w-6 h-6" /></div>, 
    bg: 'bg-orange-50', color: 'text-orange-600' 
  },
  'postgresql': { icon: <SiPostgresql className="w-12 h-12" />, bg: 'bg-blue-50', color: 'text-blue-700' },
  'mongodb': { icon: <SiMongodb className="w-12 h-12" />, bg: 'bg-green-50', color: 'text-green-500' },
  'mysql': { icon: <SiMysql className="w-12 h-12" />, bg: 'bg-blue-50', color: 'text-blue-600' },
  'oracle': { icon: <SiOracle className="w-12 h-12" />, bg: 'bg-red-50', color: 'text-red-600' },
  'redis': { icon: <SiRedis className="w-12 h-12" />, bg: 'bg-red-50', color: 'text-red-500' },
  'docker': { icon: <SiDocker className="w-12 h-12" />, bg: 'bg-blue-50', color: 'text-blue-500' },
  'git/github': { icon: <SiGithub className="w-12 h-12" />, bg: 'bg-gray-50', color: 'text-gray-800' },
  'github actions': { icon: <SiGithubactions className="w-12 h-12" />, bg: 'bg-blue-50', color: 'text-blue-600' },
  'postman': { icon: <SiPostman className="w-12 h-12" />, bg: 'bg-orange-50', color: 'text-orange-600' },
  'junit': { icon: <SiJunit5 className="w-12 h-12" />, bg: 'bg-green-50', color: 'text-green-600' },
  'jest': { icon: <SiJest className="w-12 h-12" />, bg: 'bg-red-50', color: 'text-red-600' },
  'python (numpy/pandas)': { 
    icon: <div className="flex gap-1"><SiNumpy className="w-6 h-6" /><SiPandas className="w-6 h-6" /></div>, 
    bg: 'bg-blue-50', color: 'text-blue-600' 
  },
  'matplotlib': { icon: <span className="text-4xl">📈</span>, bg: 'bg-blue-50', color: 'text-blue-600' },
  'matlab': { icon: <span className="text-4xl">🧮</span>, bg: 'bg-orange-50', color: 'text-orange-600' },
  'r': { icon: <SiR className="w-12 h-12" />, bg: 'bg-blue-50', color: 'text-blue-600' },
  'spss': { icon: <span className="text-4xl">📊</span>, bg: 'bg-gray-50', color: 'text-gray-600' },
  'uml': { icon: <span className="text-4xl">📐</span>, bg: 'bg-indigo-50', color: 'text-indigo-600' },
  'merise': { icon: <span className="text-4xl">🗂️</span>, bg: 'bg-purple-50', color: 'text-purple-600' },
}

const defaultIcon: IconConfig = {
  icon: <span className="text-4xl">💼</span>,
  bg: 'bg-gray-50',
  color: 'text-gray-500'
}

function SkillCard({ skill }: SkillCardProps) {
  const key = skill.name.trim().toLowerCase()
  const iconConfig = skillIcons[key] || defaultIcon

  return (
    <div className={`${iconConfig.bg} rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer w-full aspect-square flex flex-col items-center justify-center p-3 border border-gray-100 hover:border-blue-200`}>
      <div className={`${iconConfig.color} mb-2 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
        {iconConfig.icon}
      </div>
      <h3 className="text-xs font-semibold text-gray-800 group-hover:text-blue-600 transition-colors text-center leading-tight px-1">
        {skill.name}
      </h3>
    </div>
  )
}

export default memo(SkillCard)