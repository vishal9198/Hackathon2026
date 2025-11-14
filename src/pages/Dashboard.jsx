import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Code2, Trophy, TrendingUp, Target, Calendar, Award, CheckCircle, Clock } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If not logged in, redirect to home
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);
  const stats = [
    { label: 'Problems Solved', value: 127, icon: <CheckCircle className="w-6 h-6" />, color: 'from-green-500 to-emerald-600' },
    { label: 'Contest Participated', value: 18, icon: <Trophy className="w-6 h-6" />, color: 'from-blue-500 to-cyan-600' },
    { label: 'Current Streak', value: '12 days', icon: <TrendingUp className="w-6 h-6" />, color: 'from-orange-500 to-red-600' },
    { label: 'Global Rank', value: '#542', icon: <Award className="w-6 h-6" />, color: 'from-purple-500 to-pink-600' },
  ];

  const recentActivity = [
    { problem: 'Two Sum', difficulty: 'Easy', status: 'Solved', time: '2 hours ago' },
    { problem: 'Longest Substring', difficulty: 'Medium', status: 'Attempted', time: '5 hours ago' },
    { problem: 'Merge K Sorted Lists', difficulty: 'Hard', status: 'Solved', time: '1 day ago' },
  ];

  const upcomingContests = [
    { title: 'Weekly Challenge 142', date: '2025-11-06', time: '10:00 AM' },
    { title: 'Beginner Sprint 24', date: '2025-11-08', time: '11:00 AM' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome Back, Coder!
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Track your progress and continue your coding journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-4`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Recent Activity
                  </h2>
                </div>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {activity.problem}
                        </h3>
                        <div className="flex items-center gap-3 text-sm">
                          <span className={`px-2 py-1 rounded ${
                            activity.difficulty === 'Easy' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                            activity.difficulty === 'Medium' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' :
                            'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                          }`}>
                            {activity.difficulty}
                          </span>
                          <span className="text-gray-600 dark:text-gray-400">
                            {activity.time}
                          </span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        activity.status === 'Solved'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                          : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                      }`}>
                        {activity.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Quick Actions
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:scale-105 transition-all">
                    <Code2 className="w-8 h-8 mx-auto mb-2" />
                    Practice Problems
                  </button>
                  <button className="p-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl text-white font-semibold hover:shadow-lg hover:scale-105 transition-all">
                    <Trophy className="w-8 h-8 mx-auto mb-2" />
                    Join Contest
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Upcoming Contests
                  </h2>
                </div>
                <div className="space-y-4">
                  {upcomingContests.map((contest, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
                    >
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {contest.title}
                      </h3>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {contest.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {contest.time}
                        </div>
                      </div>
                      <button className="w-full mt-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                        Register
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
