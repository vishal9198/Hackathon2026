import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Trophy, Target, Users, ArrowRight, Zap, Award, TrendingUp } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Practice Questions',
      description: 'Solve 1000+ coding problems across various difficulty levels and topics',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'OA Contests',
      description: 'Participate in weekly contests and compete with developers worldwide',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Leaderboard',
      description: 'Track your progress and see where you stand among the best coders',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Admin Tools',
      description: 'Powerful dashboard for managing contests, questions, and analytics',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const stats = [
    { value: '10K+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { value: '1000+', label: 'Problems', icon: <Code2 className="w-6 h-6" /> },
    { value: '500+', label: 'Contests', icon: <Trophy className="w-6 h-6" /> },
    { value: '50K+', label: 'Submissions', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 px-4 overflow-hidden hero-bg">
        {/* keep only subtle grid pattern; remove the strong gradient overlay so the background image shows through */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
                <img src="/1.png" alt="logo" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Master Competitive Coding
            </h1>
            <p className="text-xl md:text-2xl text-white dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of developers solving problems, competing in contests, and climbing the leaderboard
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/practice"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold text-lg border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl transition-all"
              >
                Browse Problems
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 text-center hover:scale-105 transition-transform shadow-lg">
                <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white dark:bg-gray-900 hero-bg">
        <div className="max-w-7xl mx-auto hero-content">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-white dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive tools and resources to accelerate your coding journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>

                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 hero-bg">
        <div className="max-w-7xl mx-auto hero-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl overflow-hidden"
            style={{ backgroundImage: "url('/image6.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* overlay for readability */}
            <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />

            <div className="relative z-10">
              <Zap className="w-16 h-16 mx-auto mb-6 text-white" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Level Up?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-white/95">
                Join our community of passionate coders and start your journey to becoming a competitive programming expert
              </p>
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                Start Coding Now
                <Award className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
