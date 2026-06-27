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
    skills: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Flask",
      "REST APIs",
      "Joblib",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
    ],
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
      className="min-h-screen px-8 py-24 bg-[#0f0f0f] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Skills</h1>

        <p className="text-neutral-400 mb-16 text-lg">
          Technologies and tools I've worked with while building projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-neutral-700 bg-neutral-900 p-6 hover:border-neutral-500 transition ease-linear"
            >
              <h2 className="text-2xl font-semibold mb-5">
                {category.title}
              </h2>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full border border-neutral-600 text-sm text-neutral-200 hover:bg-neutral-800 transition ease-linear"
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