import { motion } from 'framer-motion';
import type { SkillCategory } from '../data/skills';

export default function SkillCategoryCard({ category, index }: { category: SkillCategory; index: number }) {
  const BadgeIcon = category.badgeIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="rounded-3xl border border-white/10 bg-[#0c0c12]/95 p-6 backdrop-blur-md sm:p-7 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
      style={{ borderTop: `3px solid ${category.color}` }}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="font-mono text-2xl font-bold text-white/30 sm:text-3xl">{category.number}</span>
          <div>
            <h3 className="mb-1 text-lg font-bold sm:text-xl" style={{ color: category.color }}>
              {category.title}
            </h3>
            <p className="max-w-[260px] text-xs sm:text-sm text-[#a0a0ba]">{category.description}</p>
          </div>
        </div>
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
          style={{ background: `${category.color}18`, color: category.color, border: `1px solid ${category.color}33` }}
        >
          <BadgeIcon size={20} />
        </div>
      </div>

      <div className="mb-5 h-px w-full" style={{ background: `${category.color}30` }} />

      <div className="flex flex-wrap gap-2.5">
        {category.skills.map((skill) => {
          const SkillIcon = skill.icon;
          return (
            <div
              key={skill.name}
              className="flex w-[84px] flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 py-2.5 hover:border-white/25 transition-all"
            >
              <SkillIcon size={20} color={skill.iconColor || category.color} />
              <span className="text-center text-[10px] font-semibold leading-tight text-white/90">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
