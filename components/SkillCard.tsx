import Card from './ui/Card'

interface Skill {
  name: string
  level: number
  category: string
  icon?: string
}

interface SkillCardProps {
  skill: Skill
}

export default function SkillCard({ skill }: SkillCardProps) {
  const getLevelColor = (level: number) => {
    if (level >= 80) return 'bg-green-500'
    if (level >= 60) return 'bg-blue-500'
    if (level >= 40) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <Card className="text-center">
      <div className="mb-4">
        {skill.icon && (
          <div className="text-4xl mb-2">
            {skill.icon}
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {skill.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          {skill.category}
        </p>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div
          className={`h-2 rounded-full ${getLevelColor(skill.level)}`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      
      <p className="text-sm text-gray-600">
        {skill.level}%
      </p>
    </Card>
  )
}
