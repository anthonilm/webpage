"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { modalContent } from "./modals/WhoWeAreModalContent";
import InfoModal from "./modals/InfoModal";
import {
  Brain,
  ClipboardList,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  Users,
  Handshake,
  Target,
} from "lucide-react";
import styles from "./WhoWeAreHorizontal.module.css";

type ModalKey = keyof typeof modalContent;

const sections: {
  title: ModalKey;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Practice Ethos",
    description:
      "Mental stamina and stress tolerance for high-stakes demands—structured care that builds resilience, not just willpower.",
    icon: <Brain size={28} strokeWidth={1.5} />,
  },
  {
    title: "Model & Method",
    description:
      "Weekly sessions + IEPs built on COM-B behavior modeling to pinpoint gaps limiting execution.",
    icon: <ClipboardList size={28} strokeWidth={1.5} />,
  },
  {
    title: "Access & Affordability",
    description: "$90 /session with the first free.",
    icon: <DollarSign size={28} strokeWidth={1.5} />,
  },
  {
    title: "Performance Outcomes",
    description:
      "Progress is tracked by behavior—not mood—resulting in clarity, regulation, and traction.",
    icon: <TrendingUp size={28} strokeWidth={1.5} />,
  },
  {
    title: "Ethics & Integrity",
    description:
      "Culturally aware, identity-respecting, and designed to avoid clinical overreach.",
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
  },
  {
    title: "Student & Family Support",
    description:
      "Tools for parents navigating student stress and behavioral friction—without waitlists.",
    icon: <Users size={28} strokeWidth={1.5} />,
  },
  {
    title: "Supporting Marginalized Clients",
    description:
      "Affordable, structurally literate systems for BIPOC, LGBTQ+, and under-resourced clients.",
    icon: <Handshake size={28} strokeWidth={1.5} />,
  },
  {
    title: "Strategic Vision",
    description:
      "A category-defining model at the intersection of clarity, behavior, and execution.",
    icon: <Target size={28} strokeWidth={1.5} />,
  },
];

export default function WhoWeAreHorizontal() {
  const [activeModal, setActiveModal] = useState<ModalKey | null>(null);
  const handleClose = () => setActiveModal(null);

  return (
    <section
      className={styles["who-we-are-section--horizontal"]}
      aria-label="Who We Are"
      role="region"
    >
      <motion.h1
        className={styles["who-headline--horizontal"]}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Mental health has a direct impact on your quality of life.
      </motion.h1>

      <div className={styles["who-scroll-row"]} tabIndex={0}>
        {sections.map((sec, i) => (
          <motion.div
            className={styles["section-group--horizontal"]}
            key={sec.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles["section-title--horizontal"]}>
              <h2>{sec.title}</h2>
            </div>

            <div className={styles["section-tile--horizontal"]}>
              <div className={styles["tile-icon--horizontal"]}>{sec.icon}</div>
              <p>{sec.description}</p>
              {/* Learn More button removed as requested */}
            </div>
          </motion.div>
        ))}
      </div>

      {activeModal && modalContent[activeModal] && (
        <InfoModal
          isOpen={true}
          onClose={handleClose}
          title={modalContent[activeModal].title}
          body={modalContent[activeModal].body}
        />
      )}
    </section>
  );
}
