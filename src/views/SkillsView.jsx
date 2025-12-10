import SkillCard from "../components/SkillCard";
import { SKILLS_DATA, SKILL_CATEGORIES } from "../data/skills";
import { Feather, Database, Terminal } from "lucide-react";
import React, { useMemo } from "react";
import SectionTitle from "../components/SectionTitle";

const SkillsView = () => {
  const groupedSkills = useMemo(() => {
    return SKILL_CATEGORIES.reduce((acc, cat) => {
      acc[cat] = SKILLS_DATA.filter((s) => s.category === cat);
      return acc;
    }, {});
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto min-h-screen-minus-header">
      <SectionTitle>My Stack & Tools</SectionTitle>
      <div className="space-y-12">
        {SKILL_CATEGORIES.map((category, catIndex) => (
          <div key={category}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center justify-center sm:justify-start">
              {category === "Building Interfaces" && (
                <Feather className="w-6 h-6 mr-3" />
              )}
              {category === "Building Systems" && (
                <Database className="w-6 h-6 mr-3" />
              )}
              {category === "Tools & Engineering" && (
                <Terminal className="w-6 h-6 mr-3" />
              )}
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {groupedSkills[category].map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index + catIndex * 5}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsView;
