import { motion } from 'framer-motion';
import {
  FaArrowLeft,
  FaTrophy,
  FaStar,
  FaQrcode,
  FaMapMarkerAlt,
  FaUserCheck,
  FaCheckCircle,
  FaUsers,
  FaCalendarAlt,
  FaFileAlt,
  FaComments,
  FaVideo,
} from 'react-icons/fa';
import './HackathonDetail.css';

const smartCampusFeatures = [
  { icon: <FaUsers />, text: 'Role-based login system (Student, Teacher, Admin)' },
  { icon: <FaQrcode />, text: 'Digital student ID with QR code' },
  { icon: <FaCalendarAlt />, text: 'Event registration system' },
  { icon: <FaFileAlt />, text: 'Assignment management' },
  { icon: <FaComments />, text: 'Messaging and file sharing system' },
  { icon: <FaVideo />, text: 'Online meeting support' },
];

const attendanceSteps = [
  {
    icon: <FaQrcode />,
    step: 'Step 1',
    title: 'QR Code Generation',
    desc: 'The teacher generates a dynamic QR code at the start of the class.',
  },
  {
    icon: <FaCheckCircle />,
    step: 'Step 2',
    title: 'Student QR Scan',
    desc: 'Students scan the QR code using the system.',
  },
  {
    icon: <FaMapMarkerAlt />,
    step: 'Step 3',
    title: 'Geo-Fencing Verification',
    desc: 'The system checks if the student is within classroom range using geo-fencing to prevent remote attendance.',
  },
  {
    icon: <FaUserCheck />,
    step: 'Step 4',
    title: 'Face Recognition',
    desc: "The system verifies the student's identity using face recognition technology.",
  },
  {
    icon: <FaTrophy />,
    step: 'Step 5',
    title: 'Automatic Attendance',
    desc: 'Once all conditions are satisfied, attendance is automatically marked in the system.',
  },
];

interface HackathonDetailProps {
  onBack: () => void;
}

export default function HackathonDetail({ onBack }: HackathonDetailProps) {
  return (
    <motion.div
      className="hackathon-detail-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35 }}
    >
      {/* Back Button */}
      <motion.button
        className="hd-back-btn"
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ x: -4 }}
      >
        <FaArrowLeft /> Back to Projects
      </motion.button>

      {/* Page Header */}
      <motion.div
        className="hd-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <div className="section-label">
          <span className="label-number">03</span>
          <span className="label-line" />
          <span className="label-text">HACKATHON PROJECTS</span>
        </div>
        <h2 className="hd-title">
          Award-Winning <span className="title-accent">Builds</span>
        </h2>
        <p className="hd-subtitle">
          Projects built under intense 24–48 hour hackathon sprints — solving real-world problems.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="hd-projects">
        {/* ── SmartCampus ── */}
        <motion.div
          className="hd-project-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <div className="hd-card-accent" style={{ background: '#00d4ff' }} />

          <div className="hd-card-top">
            <div>
              <h3 className="hd-project-name" style={{ color: '#00d4ff' }}>
                SmartCampus
              </h3>
              <p className="hd-project-tagline">Unified campus management platform for the modern era.</p>
            </div>
            <span
              className="hd-badge"
              style={{
                color: '#00d4ff',
                borderColor: 'rgba(0,212,255,0.3)',
                background: 'rgba(0,212,255,0.08)',
              }}
            >
              <FaStar /> Real Life Problem Solved
            </span>
          </div>

          <p className="hd-project-desc">
            SmartCampus brings comprehensive campus management to students, teachers, and administrators
            through a unified platform — streamlining every aspect of campus life digitally.
          </p>

          <h4 className="hd-features-title">Key Features</h4>
          <div className="hd-features-grid">
            {smartCampusFeatures.map((f, i) => (
              <motion.div
                key={i}
                className="hd-feature-item"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + i * 0.07 }}
              >
                <span
                  className="hd-feature-icon"
                  style={{ color: '#00d4ff', background: 'rgba(0,212,255,0.1)' }}
                >
                  {f.icon}
                </span>
                <span>{f.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="project-tech" style={{ marginTop: '18px' }}>
            {['Campus Management', 'Role-Based Auth', 'Full Stack', 'Real-Life Solution'].map((t) => (
              <span
                key={t}
                className="tech-tag"
                style={{
                  color: '#00d4ff',
                  borderColor: 'rgba(0,212,255,0.25)',
                  background: 'rgba(0,212,255,0.07)',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Smart Attendance ── */}
        <motion.div
          className="hd-project-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <div className="hd-card-accent" style={{ background: '#ffd700' }} />

          <div className="hd-card-top">
            <div>
              <h3 className="hd-project-name" style={{ color: '#ffd700' }}>
                Smart Attendance System
              </h3>
              <p className="hd-project-tagline">Team RollCall X — Secure, automated &amp; tamper-proof attendance.</p>
            </div>
            <span
              className="hd-badge"
              style={{
                color: '#ffd700',
                borderColor: 'rgba(255,215,0,0.3)',
                background: 'rgba(255,215,0,0.08)',
              }}
            >
              <FaTrophy /> SIH Round 2 Selected
            </span>
          </div>

          <p className="hd-project-desc">
            Our team <strong style={{ color: '#ffd700' }}>RollCall X</strong> developed an innovative Smart
            Attendance System designed to make classroom attendance more secure, automated, and tamper-proof using
            QR codes, geo-fencing, and face recognition — selected for Round 2 of Smart India Hackathon (SIH).
          </p>

          <h4 className="hd-features-title">How It Works</h4>
          <div className="hd-steps">
            {attendanceSteps.map((s, i) => (
              <motion.div
                key={i}
                className="hd-step"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 + i * 0.08 }}
              >
                <div
                  className="hd-step-icon"
                  style={{ color: '#ffd700', background: 'rgba(255,215,0,0.1)' }}
                >
                  {s.icon}
                </div>
                <div className="hd-step-content">
                  <span className="hd-step-label" style={{ color: '#ffd700' }}>
                    {s.step}
                  </span>
                  <span className="hd-step-title">{s.title}</span>
                  <p className="hd-step-desc">{s.desc}</p>
                </div>
                {i < attendanceSteps.length - 1 && (
                  <div className="hd-step-connector" style={{ background: 'rgba(255,215,0,0.15)' }} />
                )}
              </motion.div>
            ))}
          </div>

          <div className="project-tech" style={{ marginTop: '18px' }}>
            {['Smart Attendance', 'Geo-Fencing', 'Face Recognition', 'Smart India Hackathon'].map((t) => (
              <span
                key={t}
                className="tech-tag"
                style={{
                  color: '#ffd700',
                  borderColor: 'rgba(255,215,0,0.25)',
                  background: 'rgba(255,215,0,0.07)',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
