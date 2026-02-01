import { Network, Monitor, Code, Zap, Printer, Database } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Network,
      title: 'Networking',
      skills: ['LAN Configuration', 'Wi-Fi Setup', 'VLAN Management', 'Switches', 'Routers', 'Network Security']
    },
    {
      icon: Monitor,
      title: 'Systems Administration',
      skills: ['Windows Server', 'Active Directory', 'Office 365', 'Group Policy', 'User Management', 'System Backup']
    },
    {
      icon: Database,
      title: 'Monitoring & Tools',
      skills: ['Zabbix', 'GLPI', 'UniFi Controller', 'ZKTeco', 'iVMS', '3CX Phone System']
    },
    {
      icon: Code,
      title: 'Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'Web Development']
    },
    {
      icon: Zap,
      title: 'Power Platform',
      skills: ['Power Apps', 'Power Automate', 'Workflow Automation', 'Business Solutions']
    },
    {
      icon: Printer,
      title: 'Hardware & Support',
      skills: ['Printer Setup', 'IP Phones', 'Ticketing Systems', 'Technical Support', 'Hardware Troubleshooting']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive expertise across networking, system administration, monitoring tools, and development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <category.icon className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
