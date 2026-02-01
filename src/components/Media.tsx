import { Video, FileText, Download } from 'lucide-react';

export default function Media() {
  return (
    <section id="media" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Portfolio Media
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Video presentation and slides showcasing my professional experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <Video className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Professional Profile Video
              </h3>
            </div>
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-center">
                <Video className="mx-auto mb-4 text-gray-400" size={48} />
                <p className="text-gray-500 dark:text-gray-400">
                  Video presentation coming soon
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                  Embed your YouTube video or upload MP4
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Watch my comprehensive video presentation highlighting my technical expertise,
              project implementations, and professional journey in IT infrastructure and
              system administration.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <FileText className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Portfolio Presentation
              </h3>
            </div>
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-center">
                <FileText className="mx-auto mb-4 text-gray-400" size={48} />
                <p className="text-gray-500 dark:text-gray-400">
                  Presentation slides preview
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                  Upload your PowerPoint presentation
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Detailed presentation slides covering my skills, experience, certifications,
              and major projects with technical diagrams and implementation details.
            </p>
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors w-full justify-center">
              <Download size={20} />
              Download Presentation (PPTX)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
