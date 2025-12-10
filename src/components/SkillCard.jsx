const SkillCard = ({ skill, index }) => {
  return (
    <div
      className="p-5 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-[1.05] hover:shadow-xl hover:shadow-rm-teal/30 dark:hover:shadow-rm-green/30 cursor-pointer animate-slide-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <img src={skill.iconUrl} className={`w-14 h-14 mb-3`} />
      <p className={`font-semibold text-lg text-gray-800 dark:text-white`}>
        {skill.name}
      </p>
    </div>
  );
};

export default SkillCard;
