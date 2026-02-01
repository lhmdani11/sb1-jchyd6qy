import { MapPin, Download, FolderGit2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              YEH
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            YASSINE EL HAMDANI
          </h1>

          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-4">
            System & Network Administrator | IT Support | Cybersecurity
          </p>

          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-8">
            <MapPin size={20} />
            <span className="text-lg">Marrakech, Morocco</span>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Delivering enterprise-level IT solutions with expertise in network infrastructure,
            system administration, and cybersecurity. Committed to optimizing operations and
            ensuring seamless technology integration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#downloads"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105"
            >
              <Download size={20} />
              Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700 transition-all transform hover:scale-105"
            >
              <FolderGit2 size={20} />
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
