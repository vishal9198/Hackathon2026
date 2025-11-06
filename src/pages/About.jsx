import { motion } from 'framer-motion';
import { Target, Users, Code2, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Our Mission',
      description: 'Empowering developers worldwide to excel in competitive programming and technical interviews',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community First',
      description: 'Building a supportive community where coders learn, compete, and grow together',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Quality Content',
      description: 'Curated problems and contests designed to challenge and improve your coding skills',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology to provide the best coding platform experience',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              About CodeArena
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Your ultimate destination for mastering competitive programming and acing technical interviews
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
              CodeArena was founded with a simple vision: to democratize access to high-quality competitive programming resources.
              We believe that everyone should have the opportunity to develop their coding skills and achieve their career goals.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Today, we serve thousands of developers worldwide, from beginners taking their first steps in coding to experienced
              programmers preparing for top tech company interviews. Our platform offers a comprehensive suite of tools, problems,
              and contests designed to challenge and inspire.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              What We Stand For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color} text-white mb-4`}>
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">Join Our Growing Community</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Be part of a thriving community of developers who are passionate about coding and continuous learning
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-lg">
              <div>
                <div className="text-4xl font-bold">10K+</div>
                <div className="opacity-90">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold">1000+</div>
                <div className="opacity-90">Problems</div>
              </div>
              <div>
                <div className="text-4xl font-bold">500+</div>
                <div className="opacity-90">Contests</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
