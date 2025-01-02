import React, { useState } from "react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    { question: "What is Swasthya?", answer: "Swasthya is a health management platform designed to help you keep track of your health records and appointments." },
    { question: "How do I create an account?", answer: "You can create an account by clicking on the 'Sign Up' button on the homepage and filling in the required details." },
    { question: "What is the best way to maintain a healthy weight?", answer: "To maintain a healthy weight, focus on a balanced diet, regular exercise, and adequate sleep." },
    { question: "How much water should I drink daily?", answer: "It is recommended to drink at least 8-10 glasses of water a day to stay hydrated." },
    { question: "What are the benefits of regular exercise?", answer: "Regular exercise helps improve cardiovascular health, strengthens muscles, boosts mental health, and enhances overall well-being." },
    { question: "What should I include in a balanced diet?", answer: "A balanced diet includes fruits, vegetables, whole grains, lean proteins, and healthy fats." },
    { question: "How can I improve my sleep quality?", answer: "Maintain a consistent sleep schedule, create a relaxing bedtime routine, and avoid screens before bed." },
    { question: "What are the signs of dehydration?", answer: "Signs of dehydration include dry mouth, fatigue, dark yellow urine, and dizziness." },
    { question: "What is the correct way to perform CPR?", answer: "CPR involves chest compressions and rescue breaths. Press hard and fast in the center of the chest, providing 30 compressions followed by 2 breaths." },
    { question: "What should I do in case of a burn?", answer: "Cool the burn with running water for at least 10 minutes, cover with a clean cloth, and avoid applying ointments." },
    { question: "How can I prevent common colds?", answer: "Wash your hands regularly, avoid close contact with sick individuals, and maintain a healthy lifestyle." },
    { question: "What is the recommended daily intake of fruits and vegetables?", answer: "Aim to eat at least 5 portions of fruits and vegetables daily." },
    { question: "How often should I exercise?", answer: "It is recommended to exercise at least 150 minutes per week, including both cardio and strength training." },
    { question: "What are the benefits of yoga?", answer: "Yoga improves flexibility, reduces stress, and enhances mental clarity and physical strength." },
    { question: "How can I manage stress effectively?", answer: "Practice mindfulness, exercise regularly, and ensure you have time to relax and engage in activities you enjoy." },
    { question: "What is the first step in treating a sprain?", answer: "Follow the R.I.C.E. method: Rest, Ice, Compression, and Elevation." },
    { question: "How can I boost my immune system?", answer: "Eat a nutrient-rich diet, stay hydrated, exercise regularly, and get enough sleep." },
    { question: "What are some tips for quitting smoking?", answer: "Set a quit date, seek support from friends or groups, and consider using nicotine replacement therapy." },
    { question: "What should I do in case of heat exhaustion?", answer: "Move to a cool place, drink water, and apply cool compresses to lower body temperature." },
    { question: "How can I protect my skin from sun damage?", answer: "Wear sunscreen with SPF 30 or higher, seek shade, and wear protective clothing." },
    { question: "What are the benefits of regular health checkups?", answer: "Health checkups help detect potential health issues early and ensure preventive measures are taken." },
    { question: "How can I improve my posture?", answer: "Practice sitting and standing up straight, strengthen your core muscles, and take frequent breaks from sitting." },
    { question: "What should I do in case of a nosebleed?", answer: "Pinch your nose and lean forward slightly while breathing through your mouth." },
    { question: "How can I reduce the risk of diabetes?", answer: "Maintain a healthy weight, eat a balanced diet, and engage in regular physical activity." },
    { question: "What are the benefits of meditation?", answer: "Meditation reduces stress, enhances focus, and improves overall emotional health." },
    { question: "What is the best way to treat a minor cut?", answer: "Clean the wound with water, apply an antiseptic, and cover it with a clean bandage." },
    { question: "How can I manage back pain?", answer: "Exercise to strengthen your back and core, maintain good posture, and avoid lifting heavy objects improperly." },
    { question: "What should I do if someone is choking?", answer: "Perform the Heimlich maneuver by giving abdominal thrusts to clear the airway." },
    { question: "What are the symptoms of a stroke?", answer: "Symptoms include sudden weakness, difficulty speaking, and facial drooping. Seek emergency help immediately." },
    { question: "How can I prevent foodborne illnesses?", answer: "Wash your hands, cook food thoroughly, and store food at the correct temperature." },
    { question: "What should I do if I suspect a heart attack?", answer: "Call emergency services immediately and chew an aspirin if not allergic." },
    { question: "How can I maintain healthy eyesight?", answer: "Take regular breaks from screens, eat foods rich in vitamin A, and get regular eye exams." },
    { question: "What are the benefits of staying active?", answer: "Staying active reduces the risk of chronic diseases and improves mental health and longevity." },
    { question: "How can I reduce the risk of osteoporosis?", answer: "Consume calcium and vitamin D, perform weight-bearing exercises, and avoid smoking." },
    { question: "What should I include in my emergency first aid kit?", answer: "Include bandages, antiseptic wipes, scissors, gloves, pain relievers, and a first aid manual." },
    { question: "How can I identify and manage allergies?", answer: "Identify triggers, avoid exposure, and consider allergy medications or immunotherapy." },
    { question: "What should I do in case of a bee sting?", answer: "Remove the stinger, clean the area, and apply ice to reduce swelling." },
    { question: "How can I prevent obesity?", answer: "Focus on a balanced diet, regular exercise, and portion control." },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 p-4 border rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No FAQs match your search.</p>
        )}
      </div>
    </div>
  );
};

export default FAQ;
