import { Download, FileText, File, Presentation } from 'lucide-react';

export default function Downloads() {
  const downloads = [
    {
      icon: FileText,
      title: 'Curriculum Vitae',
      description: 'Complete professional resume with detailed experience and skills',
      filename: 'Yassine_El_Hamdani_CV.pdf',
      size: 'PDF',
      color: 'from-red-500 to-red-700'
    },
    {
      icon: Presentation,
      title: 'Portfolio Presentation',
      description: 'Detailed PowerPoint presentation of projects and achievements',
      filename: 'Portfolio_Presentation.pptx',
      size: 'PPTX',
      color: 'from-orange-500 to-orange-700'
    },
    {
      icon: File,
      title: 'Portfolio Document',
      description: 'Comprehensive portfolio documentation in PDF format',
      filename: 'Portfolio_Document.pdf',
      size: 'PDF',
      color: 'from-blue-500 to-blue-700'
    }
  ];

  return (
    <section id="downloads" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Downloads
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Download my professional documents for detailed review
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {downloads.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className={`h-32 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                <item.icon className="text-white" size={48} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.filename}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                    {item.size}
                  </span>
                </div>
                <button className="flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors w-full justify-center">
                  <Download size={18} />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
