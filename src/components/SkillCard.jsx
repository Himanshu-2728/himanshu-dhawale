import SpotlightCard from "./SpotlightCard"
import BorderGlow from "./BorderGlow"

const data = {
  titles: ["Sentiment Analysis", "PolicyPilot"],
  data: [
    "Created a full-stack Sentiment Analysis application that leverages NLP and Machine Learning to analyze text sentiment through a responsive web interface.",

    "Developed PolicyPilot, an AI-powered web application that analyzes policy documents to identify risky clauses, generate concise summaries, and improve document understanding using Large Language Models (LLMs)."
    ],
    techStack: [
        ["Python", "Scikit-learn", "Pandas", "NumPy", 'Flask', "React", "Tailwind CSS", "JavaScript", "Joblib", "CountVectorizer", "Logistic Regression"
], 
        ["React.js", "Vite", "Tailwind CSS", "Python", "FastAPI", "Google Gemini API", "Groq", "OpenAI API", "BeautifulSoup4", "PyPDF", "REST API"]
    ],
    liveLink: ["https://sentiment-frontend-two.vercel.app/", "l2"   ],
    githubLink: ["https://github.com/Himanshu-2728/sentiment-analysis-model/tree/main", "https://github.com/Himanshu-2728/PolicyPilot"],
}

export default function SkillCard() {
  const cards = []

  for (let i = 0; i < data.titles.length; i += 1) {
    cards.push(
      <div key={data.titles[i]} className="max-w-sm w-full">
        <BorderGlow
          edgeSensitivity={30}
          glowColor="40 80 80"
          backgroundColor="#120F17"
          borderRadius={28}
          glowRadius={40}
          glowIntensity={1}
          coneSpread={25}
          animated={true}
          colors={["#c084fc", "#f472b6", "#38bdf8"]}
        >
          <div className="p-[0.5px]">
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="p-4 text-white">
                <h3 className="text-3xl font-semibold md:text-5xl">{data.titles[i]}</h3>
                <p className="mt-2 text-sm md:text-sm md:mt-4 text-neutral-300">{data.data[i]}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {data.techStack[i].map((tech) => (
                    <span
                      key={`${data.titles[i]}-${tech}`}
                      className="rounded-full border border-neutral-600 px-2 md:px-3 py-1 md:py-2 text-xs md:backdrop-blur-sm md:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-5 text-sm space-x-4 flex flex-wrap">
                <a href={data.liveLink[i]} target="_blank">
                    🔗 Live Preview
                </a>
                <a href={data.githubLink[i]} target="_blank">
                    😼 Github
                </a>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </BorderGlow>
      </div>
    )
  }

  return <div className="flex flex-wrap justify-center gap-8"> {cards} </div>
}