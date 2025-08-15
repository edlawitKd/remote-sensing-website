import { FaClock, FaCalendarAlt } from "react-icons/fa";
import { ArrowRight } from 'lucide-react';
export default function CapacityBuilding() {

  const trainingPrograms = [
    {
      title: 'Graduate program',
      duration: '8 months',
      level: 'PHD',
      participants: '8',
      description: 'Introduction to remote sensing principles and basic applications.',
    },
    {
      title: 'Domain based Program',
      duration: '2 years',
      level: ' ',
      participants: '15',
      description: 'Advanced techniques in satellite image processing and analysis.',
    },
    {
      title: 'Short term training ',
      duration: '4 week',
      level: 'short course',
      participants: '20',
      description: 'Integration of remote sensing data with GIS for spatial analysis.',
    },
  ];

  return (
    <section className="px-4 py-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-secondary">Capacity Building</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering individual through comprehensive training programs 
              and knowledge transfer initiatives.
            </p>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-secondary">{program.title}</h3>
                  <span className="px-3 py-1 text-sm bg-primary bg-opacity-10 text-primary rounded-full">
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
               <div className="bg-secondary text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl text-primary font-bold mb-4">Ready to Enhance Your Skills?</h3>
            <p className="text-xl mb-6">
              Join our next training program and advance your remote sensing expertise.
            </p>
            <a href="ContactUs" className="px-8 py-3 bg-primary text-secondary hover:bg-gray-100 font-medium rounded-lg transition-colors">
              Request for Training
            </a>
          </div>
          </div>
    </section>
  );
}
