import { FaClock, FaCalendarAlt } from "react-icons/fa";
import { ArrowRight } from 'lucide-react';
export default function CapacityBuilding() {

  const trainingPrograms = [
    {
      title: 'Remote Sensing Fundamentals',
      duration: '8 months',
      level: 'PHD',
      participants: '8',
      description: 'Introduction to remote sensing principles and basic applications.',
    },
    {
      title: 'Advanced Image Processing',
      duration: '2 years',
      level: 'Msc',
      participants: '15',
      description: 'Advanced techniques in satellite image processing and analysis.',
    },
    {
      title: 'GIS Integration Workshop',
      duration: '4 week',
      level: 'short course',
      participants: '20',
      description: 'Integration of remote sensing data with GIS for spatial analysis.',
    },
  ];

  return (
    <section className="px-4 py-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#204E67]">Capacity Building</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering individual through comprehensive training programs 
              and knowledge transfer initiatives.
            </p>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-[#204E67]">{program.title}</h3>
                  <span className="px-3 py-1 text-sm bg-[#DD994D] bg-opacity-10 text-[#DD994D] rounded-full">
                    {program.level}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p><span className="font-medium">Duration:</span> {program.duration}</p>
                  <p><span className="font-medium">Max Participants:</span> {program.participants}</p>
                </div>
              </div>
            ))}
          </div>
    </section>
  );
}
