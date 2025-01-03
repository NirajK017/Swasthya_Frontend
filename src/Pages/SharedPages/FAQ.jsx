import React, { useState } from 'react';

const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const categories = [
    { id: "all", label: "All Questions", icon: "🔍" },
    { id: "general", label: "General Health", icon: "⚕️" },
    { id: "emergency", label: "Emergency Care", icon: "🚨" },
    { id: "lifestyle", label: "Lifestyle & Wellness", icon: "🌱" },
    { id: "nutrition", label: "Nutrition", icon: "🥗" },
    { id: "preventive", label: "Preventive Care", icon: "🛡️" },
    { id: "first-aid", label: "First Aid", icon: "🩹" }
  ];

  const faqs = [
    { question: "What is Swasthya?", answer: "Swasthya is a health management platform designed to help you keep track of your health records and appointments.", category: "general" },
    { question: "How do I create an account?", answer: "You can create an account by clicking on the 'Sign Up' button on the homepage and filling in the required details.", category: "general" },
    { question: "What is the best way to maintain a healthy weight?", answer: "To maintain a healthy weight, focus on a balanced diet, regular exercise, and adequate sleep.", category: "lifestyle" },
    { question: "How much water should I drink daily?", answer: "It is recommended to drink at least 8-10 glasses of water a day to stay hydrated.", category: "nutrition" },
    { question: "What are the benefits of regular exercise?", answer: "Regular exercise helps improve cardiovascular health, strengthens muscles, boosts mental health, and enhances overall well-being.", category: "lifestyle" },
    { question: "What should I include in a balanced diet?", answer: "A balanced diet includes fruits, vegetables, whole grains, lean proteins, and healthy fats.", category: "nutrition" },
    { question: "How can I improve my sleep quality?", answer: "Maintain a consistent sleep schedule, create a relaxing bedtime routine, and avoid screens before bed.", category: "lifestyle" },
    { question: "What are the signs of dehydration?", answer: "Signs of dehydration include dry mouth, fatigue, dark yellow urine, and dizziness.", category: "emergency" },
    { question: "What is the correct way to perform CPR?", answer: "CPR involves chest compressions and rescue breaths. Press hard and fast in the center of the chest, providing 30 compressions followed by 2 breaths.", category: "emergency" },
    { question: "What should I do in case of a burn?", answer: "Cool the burn with running water for at least 10 minutes, cover with a clean cloth, and avoid applying ointments.", category: "first-aid" },
    { question: "How can I prevent common colds?", answer: "Wash your hands regularly, avoid close contact with sick individuals, and maintain a healthy lifestyle.", category: "preventive" },
    { question: "What is the recommended daily intake of fruits and vegetables?", answer: "Aim to eat at least 5 portions of fruits and vegetables daily.", category: "nutrition" },
    { question: "How often should I exercise?", answer: "It is recommended to exercise at least 150 minutes per week, including both cardio and strength training.", category: "lifestyle" },
    { question: "What are the benefits of yoga?", answer: "Yoga improves flexibility, reduces stress, and enhances mental clarity and physical strength.", category: "lifestyle" },
    { question: "How can I manage stress effectively?", answer: "Practice mindfulness, exercise regularly, and ensure you have time to relax and engage in activities you enjoy.", category: "lifestyle" },
    { question: "What is the first step in treating a sprain?", answer: "Follow the R.I.C.E. method: Rest, Ice, Compression, and Elevation.", category: "first-aid" },
    { question: "How can I boost my immune system?", answer: "Eat a nutrient-rich diet, stay hydrated, exercise regularly, and get enough sleep.", category: "preventive" },
    { question: "What are some tips for quitting smoking?", answer: "Set a quit date, seek support from friends or groups, and consider using nicotine replacement therapy.", category: "lifestyle" },
    { question: "What should I do in case of heat exhaustion?", answer: "Move to a cool place, drink water, and apply cool compresses to lower body temperature.", category: "emergency" },
    { question: "How can I protect my skin from sun damage?", answer: "Wear sunscreen with SPF 30 or higher, seek shade, and wear protective clothing.", category: "preventive" },
    { question: "What are the benefits of regular health checkups?", answer: "Health checkups help detect potential health issues early and ensure preventive measures are taken.", category: "preventive" },
    { question: "How can I improve my posture?", answer: "Practice sitting and standing up straight, strengthen your core muscles, and take frequent breaks from sitting.", category: "lifestyle" },
    { question: "What should I do in case of a nosebleed?", answer: "Pinch your nose and lean forward slightly while breathing through your mouth.", category: "first-aid" },
    { question: "How can I reduce the risk of diabetes?", answer: "Maintain a healthy weight, eat a balanced diet, and engage in regular physical activity.", category: "preventive" },
    { question: "What are the benefits of meditation?", answer: "Meditation reduces stress, enhances focus, and improves overall emotional health.", category: "lifestyle" },
    { question: "What is the best way to treat a minor cut?", answer: "Clean the wound with water, apply an antiseptic, and cover it with a clean bandage.", category: "first-aid" },
    { question: "How can I manage back pain?", answer: "Exercise to strengthen your back and core, maintain good posture, and avoid lifting heavy objects improperly.", category: "lifestyle" },
    { question: "What should I do if someone is choking?", answer: "Perform the Heimlich maneuver by giving abdominal thrusts to clear the airway.", category: "emergency" },
    { question: "What are the symptoms of a stroke?", answer: "Symptoms include sudden weakness, difficulty speaking, and facial drooping. Seek emergency help immediately.", category: "emergency" },
    { question: "How can I prevent foodborne illnesses?", answer: "Wash your hands, cook food thoroughly, and store food at the correct temperature.", category: "preventive" },
    { question: "What should I do if I suspect a heart attack?", answer: "Call emergency services immediately and chew an aspirin if not allergic.", category: "emergency" },
    { question: "How can I maintain healthy eyesight?", answer: "Take regular breaks from screens, eat foods rich in vitamin A, and get regular eye exams.", category: "preventive" },
    { question: "What are the benefits of staying active?", answer: "Staying active reduces the risk of chronic diseases and improves mental health and longevity.", category: "lifestyle" },
    { question: "How can I reduce the risk of osteoporosis?", answer: "Consume calcium and vitamin D, perform weight-bearing exercises, and avoid smoking.", category: "preventive" },
    { question: "What should I include in my emergency first aid kit?", answer: "Include bandages, antiseptic wipes, scissors, gloves, pain relievers, and a first aid manual.", category: "first-aid" },
    { question: "How can I identify and manage allergies?", answer: "Identify triggers, avoid exposure, and consider allergy medications or immunotherapy.", category: "preventive" },
    { question: "What should I do in case of a bee sting?", answer: "Remove the stinger, clean the area, and apply ice to reduce swelling.", category: "first-aid" },
    { question: "How can I prevent obesity?", answer: "Focus on a balanced diet, regular exercise, and portion control.", category: "preventive" }
  ];

  const filteredFaqs = faqs.filter((faq) => 
    selectedCategory === "all" || faq.category === selectedCategory
  );

  const handleFaqClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-50">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          How can we help you?
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our comprehensive health and wellness guide to find the answers you need
        </p>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`p-4 rounded-xl transition-all duration-300 flex flex-col items-center gap-2
              ${selectedCategory === category.id 
                ? 'bg-blue-500 text-white shadow-lg transform scale-105' 
                : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow'}`}
          >
            <span className="text-2xl">{category.icon}</span>
            <span className="text-sm font-medium whitespace-nowrap">{category.label}</span>
          </button>
        ))}
      </div>

      {/* FAQ Items Section */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {filteredFaqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => handleFaqClick(index)}
            className={`bg-white rounded-xl shadow-sm transition-all duration-300 cursor-pointer
              ${expandedIndex === index ? 'shadow-md ring-2 ring-blue-500' : 'hover:shadow-md'}`}
          >
            <div className="p-6">
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                  {faq.question}
                </h3>
                <div
                  className={`flex-shrink-0 w-6 h-6 transition-transform duration-300
                    ${expandedIndex === index ? 'transform rotate-180' : ''}`}
                >
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`mt-4 text-gray-600 transition-all duration-300 overflow-hidden
                  ${expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Couldn't find what you're looking for? 
          <a href="#contact" className="text-blue-500 hover:text-blue-600 ml-1 font-medium">
            Contact our support team
          </a>
        </p>
      </div>
    </div>
  );
};

export default FAQ;