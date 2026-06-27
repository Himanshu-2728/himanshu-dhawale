import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function SentimentAnalysisCard() {
    return <div className="bg-[#2C2C2A] w-[35vw] rounded-md border border-neutral-700 p-3  transition ease-linear hover:border-neutral-500">
        <a href="https://sentiment-frontend-two.vercel.app/">
        <img src="smt.png" alt="fs" />
        </a>
        <h1 className="text-3xl font-bold text-gray-100 mt-5">
            Sentiment Analysis
        </h1>
        <p className="mt-5 text-lg font-thin text-neutral-400">
           A full-stack sentiment analysis application that predicts the sentiment of user-provided text in real time.
        </p>
        <ul className="text-lg list-disc p-5 text-neutral-400">
            <li>Trained on 160k+ comments</li>
            <li>Logistic Regression classifier</li>
            <li>Gained 82% accuracy</li>
            <li>CountVectorizer with n-grams {"(1,2)"}</li>
            <li>Flask REST API</li>
            <li>React frontend</li>
        </ul>
        <div className="flex justify-between items-center mt-5 font-poppins">
            <p className="font-poppins text-[15px] flex items-center">
                Tech Stack:
            </p>
            <p className="text-[13px] font-mono text-justify text-blue-200 px-5">
                Python, Scikit-learn, Pandas, NumPy, Flask, React, Tailwind CSS, JavaScript, Joblib, CountVectorizer, Logistic Regression
            </p>
        </div>
        <div className="mt-5 flex justify-items-start font-poppins text-sm">
            <p className="text-sm mx-3 flex items-center">
                < FaLink  className="mx-2"/>
                <a href="https://sentiment-frontend-two.vercel.app/" target="_blank" className="hover:text-blue-300 underline underline-offset-8">
                    Live Preview
                </a>
            </p>
            <p className="flex items-center">
                < FaGithub className="mx-2"/>
                <a href="https://github.com/Himanshu-2728/sentiment-analysis-model/tree/main" target="_blank" className="hover:text-blue-300 underline underline-offset-8">
                Github 
            </a>
            </p>
        </div>
    </div>
}