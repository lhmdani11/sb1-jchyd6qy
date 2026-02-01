import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'UPM Marrakech',
      position: 'Network Technician',
      period: '2025 – Present',
      location: 'Marrakech, Morocco',
      responsibilities: [
        'Design and implement enterprise network infrastructure',
        'Configure and manage switches, routers, and wireless access points',
        'Implement VLAN segmentation for enhanced network security',
        'Monitor network performance and troubleshoot connectivity issues',
        'Deploy and maintain network monitoring tools'
      ]
    },
    {
      company: 'AL IRFANE TECHNOLOGIE',
      position: 'IT Technician',
      period: 'Previous Position',
      location: 'Marrakech, Morocco',
      responsibilities: [
        'Provided comprehensive technical support to end users',
        'Managed Active Directory user accounts and permissions',
        'Configured and deployed IP telephony systems using 3CX',
        'Maintained hardware including printers and IP phones',
        'Utilized GLPI for IT asset management and ticketing'
      ]
    },
    {
      company: 'GM-SOLUTION',
      position: 'IT Technician & Mail Agent',
      period: 'Previous Position',
      location: 'Marrakech, Morocco',
      responsibilities: [
        'Administered Office 365 email systems',
        'Performed system installations and configurations',
        'Deployed monitoring solutions using Zabbix',
        'Managed access control systems with ZKTeco',
        'Provided technical support for video surveillance systems (iVMS)'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Career progression in IT infrastructure and systems administration
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1"></div>

                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="text-white" size={24} />
                  </div>
                </div>

                <div className="flex-1 ml-16 md:ml-0">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                      <Calendar size={16} />
                      <span className="text-sm font-semibold">{exp.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {exp.location}
                    </p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li
                          key={respIndex}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
