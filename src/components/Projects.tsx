import { Network, Users, Phone, Headphones, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      icon: Network,
      title: 'Enterprise Network Infrastructure',
      description: 'Designed and implemented a comprehensive network infrastructure including LAN, VLAN segmentation, and enterprise Wi-Fi deployment. Enhanced security through network segmentation and optimized performance for 200+ users.',
      technologies: ['Cisco Switches', 'VLAN', 'Wi-Fi', 'UniFi', 'Network Security'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Users,
      title: 'Active Directory Management System',
      description: 'Deployed and managed Active Directory environment for centralized user authentication and access control. Implemented group policies, organizational units, and automated user provisioning workflows.',
      technologies: ['Windows Server', 'Active Directory', 'Group Policy', 'PowerShell'],
      color: 'from-green-500 to-green-700'
    },
    {
      icon: Phone,
      title: '3CX IP Telephony Deployment',
      description: 'Successfully deployed and configured 3CX phone system for enterprise communications. Integrated IP phones, set up call routing, voicemail, and implemented backup solutions for business continuity.',
      technologies: ['3CX', 'VoIP', 'SIP Trunks', 'IP Phones', 'Network Configuration'],
      color: 'from-orange-500 to-orange-700'
    },
    {
      icon: Headphones,
      title: 'IT Support & Ticketing System',
      description: 'Implemented GLPI-based ticketing system for IT support management. Streamlined support processes, tracked asset inventory, and improved response times through systematic ticket handling and SLA management.',
      technologies: ['GLPI', 'IT Service Management', 'Asset Tracking', 'SLA Management'],
      color: 'from-cyan-500 to-cyan-700'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real-world implementations and solutions delivered in enterprise environments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <project.icon className="text-white" size={64} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold">
                  <span>View Details</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
