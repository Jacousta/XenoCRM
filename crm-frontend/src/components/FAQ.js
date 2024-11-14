import React from 'react';
// import '../styles/FAQ.css';
import { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id='faq' className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl ">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
                {/* <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do</p> */}
            </div>

            <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16 ">
                {[
                    { question: "What is CRM?", answer: "CRM stands for Customer Relationship Management. It is a technology for managing all your company's relationships and interactions with customers and potential customers." },
                    { question: "Why is CRM important for businesses?", answer: "CRM is important for businesses as it helps in improving customer relationships, increasing sales, streamlining processes, and enhancing customer service." },
                    { question: "How can CRM benefit my business?", answer: "CRM can benefit your business by providing a centralized database for customer information, automating tasks, improving communication, and analyzing customer data for better decision-making." },
                    { question: "Is CRM only for large enterprises?", answer: "No, CRM solutions are available for businesses of all sizes, from small startups to large enterprises. There are options that can be tailored to fit the specific needs and budget of any business." },
                    { question: "How do I choose the right CRM system for my business?", answer: "To choose the right CRM system for your business, consider factors such as your business size, industry requirements, budget, integration capabilities, ease of use, and scalability." }
                  ].map((item, index) => (
                    <div key={index} className="transition-all duration-400 ease-in bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                        <button type="button" onClick={() => toggleFAQ(index)} className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                            <span className="text-lg font-semibold text-black">{item.question}</span>
                            <svg className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {openIndex === index && (
                            <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* <p className="text-center text-gray-600 text-base mt-9">
                Didn’t find the answer you are looking for? <a href="#" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contact our support</a>
            </p> */}
        </div>

  );
};







