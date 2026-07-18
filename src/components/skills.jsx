const skillCategories = [
  {
    title: "Machine Learning",
    skills: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "CountVectorizer",
      "TF-IDF",
      "Logistic Regression",
      "KNN",
    ],
  },
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Flask", "REST APIs", "Joblib"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
  },
  {
    title: "Currently Learning",
    skills: [
      "Decision Trees",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#0f0f0f] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24 "
    >
      <div className="mx-auto max-w-6xl mt-10">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
          Skills
        </h1>

        <p className="mb-12 max-w-2xl text-base text-neutral-400 sm:mb-16 sm:text-lg">
          Technologies and tools I've worked with while building projects.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-neutral-700 bg-neutral-900 p-5 transition-all duration-300 hover:border-neutral-500 sm:p-6"
            >
              <h2 className="mb-5 text-xl font-semibold sm:text-2xl">
                {category.title}
              </h2>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-neutral-600 px-3 py-1.5 text-xs text-neutral-200 transition-colors duration-300 hover:bg-neutral-800 sm:px-4 sm:py-2 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}