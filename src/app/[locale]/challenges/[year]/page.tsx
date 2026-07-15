import { reading2025 } from '@/data/challenges/2025/reading';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function ChallengesPage({ params }: { params: { year: string } }) {
  const challenges = params.year === "2025" ? [
    {
      title: "52 Books Challenge",
      description: "Reading one book every week throughout 2025",
      type: "reading",
      status: "ongoing",
      goal: {
        target: 52,
        current: reading2025.filter(book => book.status === 'completed').length,
        unit: "books"
      },
      link: `/challenges/${params.year}/reading`
    }
    // Add more challenges here as needed
  ] : [];
  
  return (
    <div className="max-w-2xl mx-auto space-y-8 mb-32">
      {/* Updated Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-neutral-400">
        <Link href="/" className="hover:text-neutral-200">Home</Link>
        <span>/</span>
        <span className="text-neutral-200">{params.year} Challenges</span>
      </nav>

      <header className="space-y-4">
        <h1 className="text-2xl font-bold">{params.year} Challenges</h1>
        <p className="text-neutral-400">
          Tracking my public challenges and goals for {params.year}.
        </p>
      </header>

      <div className="space-y-12">
        {challenges.map((challenge, index) => (
          <section key={index} className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-neutral-200">
                <Link href={challenge.link} className="hover:text-neutral-300">
                  {challenge.title}
                </Link>
              </h2>
              <p className="text-neutral-400 text-sm">{challenge.description}</p>
              
              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-neutral-400 mb-2">
                  <span>Progress: {challenge.goal.current}/{challenge.goal.target} {challenge.goal.unit}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    challenge.status === 'ongoing' ? 'bg-blue-500/20 text-blue-300' :
                    challenge.status === 'completed' ? 'bg-green-500/20 text-green-300' :
                    'bg-red-500/20 text-red-300'
                  }`}>
                    {challenge.status}
                  </span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(challenge.goal.current / challenge.goal.target) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
} 