import React from 'react';

interface Interest {
  title: string;
  description: string;
}

const interests: Interest[] = [
  {
    title: "Startups",
    description: "I'm fascinated by the process of turning innovative ideas into successful businesses. Startups are at the forefront of creating solutions to some of our most pressing problems.",
  },
  {
    title: "Renewable Energy",
    description: "The transition to clean, sustainable energy sources is crucial for our planet's future. I'm particularly interested in solar and wind technologies, as well as energy storage solutions.",
  },
  {
    title: "Artificial Intelligence",
    description: "AI has the potential to revolutionize every aspect of our lives. I'm especially interested in machine learning applications in healthcare and environmental protection.",
  },
  {
    title: "Climate Change",
    description: "Addressing climate change is one of the most critical challenges of our time. I'm interested in both technological solutions and policy approaches to mitigate its effects.",
  },
  {
    title: "Sustainable Agriculture",
    description: "Developing sustainable farming practices is essential for food security and environmental preservation. I'm particularly interested in vertical farming and precision agriculture technologies.",
  },
  {
    title: "Economic Growth",
    description: "I'm intrigued by the factors that drive economic growth and how we can create prosperity while ensuring sustainability and equity.",
  },
];

const InterestsPage = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-4">Interests</h1>
      
      <p className="text-gray-700 mb-6">
        These are the areas that captivate my curiosity and drive my professional and personal pursuits. 
        Each of these interests represents a field where I believe significant positive change can occur, 
        and I'm committed to learning about and contributing to these areas.
      </p>
      
      <div className="space-y-8">
        {interests.map((interest, index) => (
          <div key={index} className="border-b pb-4 last:border-b-0">
            <h2 className="text-xl font-semibold mb-2">{interest.title}</h2>
            <p className="text-gray-700">{interest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestsPage;
