import { Server, Shield, Wrench, Code } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Server,
      title: 'Network Infrastructure',
      description: 'Expert in designing and managing enterprise networks with LAN, VLAN, and Wi-Fi solutions.'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Implementing robust security measures and monitoring systems to protect IT assets.'
    },
    {
      icon: Wrench,
      title: 'System Administration',
      description: 'Proficient in Windows environments, Active Directory, and Office 365 management.'
    },
    {
      icon: Code,
      title: 'IT Development',
      description: 'Background in web development and Power Platform for automation solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            IT professional with comprehensive experience in networks, systems, technical support,
            and cybersecurity. With a strong background in IT Development and hands-on experience
            in enterprise environments, I specialize in delivering reliable, scalable, and secure
            IT infrastructure solutions. My expertise spans network design and implementation,
            system administration, monitoring tools deployment, and providing exceptional technical
            support to ensure business continuity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-blue-600 dark:text-blue-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
