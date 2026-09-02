import { motion } from 'framer-motion';
import { MoreHorizontal } from 'lucide-react';
import { TOOLS_USED } from '../data/skills';

export default function ToolsRow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
      {TOOLS_USED.map((tool, i) => {
        const Icon = tool.icon;
        return (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex w-20 flex-col items-center gap-2 rounded-2xl bg-white/[0.04] p-3 border border-white/5 hover:border-white/20 transition-all"
          >
            <Icon size={26} color={tool.iconColor} />
            <span className="text-center text-xs font-semibold text-white/80">{tool.name}</span>
          </motion.div>
        );
      })}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: TOOLS_USED.length * 0.06 }}
        className="flex w-20 flex-col items-center gap-2 rounded-2xl bg-white/[0.04] p-3 border border-white/5 hover:border-white/20 transition-all"
      >
        <MoreHorizontal size={26} className="text-white/50" />
        <span className="text-center text-xs font-semibold text-white/60">More</span>
      </motion.div>
    </div>
  );
}
