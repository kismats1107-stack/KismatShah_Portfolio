import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/skills';

export default function SkillAccordion() {
  const [open, setOpen] = useState<string | null>(SKILL_CATEGORIES[0].id);

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-4">
      {SKILL_CATEGORIES.map((cat, i) => {
        const isOpen = open === cat.id;
        return (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="overflow-hidden rounded-2xl border"
            style={{ borderColor: `${cat.color}55` }}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer"
              onClick={() => setOpen(isOpen ? null : cat.id)}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs" style={{ color: cat.color }}>
                  {cat.number}
                </span>
                <span className="text-sm font-semibold uppercase">{cat.title}</span>
              </div>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                className="text-xl leading-none"
                style={{ color: cat.color }}
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2 px-5 pb-5">
                    {cat.skills.map((s) => (
                      <span
                        key={s.name}
                        className="rounded-full border px-3 py-1.5 text-xs font-medium"
                        style={{ borderColor: `${cat.color}55`, color: '#17130f' }}
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
