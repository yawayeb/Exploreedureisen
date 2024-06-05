// components/FAQ.tsx
import React, { useState } from "react";

const faqData = [
  {
    "question": "What services do you offer?",
    "answer": "We offer comprehensive support for students looking to study abroad, including application assistance, visa guidance, and post-arrival support."
  },
  {
    "question": "How can I contact support?",
    "answer": "You can contact our support team via email at support@example.com or call us at +233261510771."
  },
  {
    "question": "What are the eligibility criteria for studying abroad?",
    "answer": "Eligibility criteria vary by country and program but generally include academic qualifications, language proficiency, and financial capability."
  },
  {
    "question": "Do you help with scholarship applications?",
    "answer": "Yes, we provide guidance on finding and applying for scholarships to help reduce the financial burden of studying abroad."
  },
  {
    "question": "How long does the application process take?",
    "answer": "The application process duration can vary, but it typically takes between 3 to 6 months from application submission to receiving a visa."
  },
  {
    "question": "What are the most popular destinations for studying abroad?",
    "answer": "Popular study abroad destinations include the United States, United Kingdom, Canada, Australia, and Germany."
  },
  {
    "question": "Can you assist with finding accommodation abroad?",
    "answer": "Yes, we offer assistance in finding suitable accommodation options near your chosen university or college."
  },
  {
    "question": "What kind of post-arrival support do you provide?",
    "answer": "Our post-arrival support includes airport pickup, orientation sessions, help with setting up bank accounts, and guidance on local amenities."
  },
  {
    "question": "Are there any language requirements for studying abroad?",
    "answer": "Most programs require proficiency in the language of instruction, often demonstrated through tests like TOEFL, IELTS, or equivalent."
  },
  {
    "question": "How can I choose the right program for me?",
    "answer": "We offer personalized counseling to help you choose a program that aligns with your academic background, career goals, and personal preferences."
  },

];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <button
                className="w-full text-left font-semibold text-lg flex justify-between items-center"
                onClick={() => handleToggle(index)}
              >
                {faq.question}
                <span>{activeIndex === index ? "-" : "+"}</span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
