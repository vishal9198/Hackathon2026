import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Trophy, TrendingUp } from 'lucide-react';

const Contests = () => {
  const contests = [
    {
      id: 1,
      title: 'Weekly Challenge 142',
      status: 'Live',
      startTime: '2025-11-06 10:00 AM',
      duration: '2 hours',
      participants: 1234,
      prize: '$500',
      difficulty: 'Medium'
    },
    {
      id: 2,
      title: 'Monthly Grand Challenge',
      status: 'Upcoming',
      startTime: '2025-11-10 2:00 PM',
      duration: '3 hours',
      participants: 2341,
      prize: '$2000',
      difficulty: 'Hard'
    },
    {
      id: 3,
      title: 'Beginner Sprint 24',
      status: 'Upcoming',
      startTime: '2025-11-08 11:00 AM',
      duration: '1.5 hours',
      participants: 856,
      prize: '$200',
      difficulty: 'Easy'
    },
    {
      id: 4,
      title: 'Advanced Algorithms Showdown',
      status: 'Completed',
      startTime: '2025-11-04 3:00 PM',
      duration: '4 hours',
      participants: 3421,
      prize: '$1500',
      difficulty: 'Hard'
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-500';
      case 'Upcoming': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-500';
      case 'Completed': return 'bg-gray-100 dark:bg-gray-700/30 text-gray-600 dark:text-gray-400 border-gray-500';
      default: return 'bg-gray-100 dark:bg-gray-700/30 text-gray-600 dark:text-gray-400';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 dark:text-green-400';
      case 'Medium': return 'text-orange-600 dark:text-orange-400';
      case 'Hard': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

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
              Coding Contests
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Compete with developers worldwide and win exciting prizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl">
              <Trophy className="w-10 h-10 mb-3 opacity-80" />
              <div className="text-3xl font-bold mb-1">24</div>
              <div className="text-blue-100">Active Contests</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
              <Users className="w-10 h-10 mb-3 opacity-80" />
              <div className="text-3xl font-bold mb-1">8,542</div>
              <div className="text-purple-100">Total Participants</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white shadow-xl">
              <TrendingUp className="w-10 h-10 mb-3 opacity-80" />
              <div className="text-3xl font-bold mb-1">$10K+</div>
              <div className="text-pink-100">Total Prize Pool</div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {contests.map((contest, index) => (
              <motion.div
                key={contest.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 border border-gray-200 dark:border-gray-700 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold border-2 ${getStatusColor(contest.status)}`}>
                        {contest.status}
                      </span>
                      {contest.status === 'Live' && (
                        <span className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 animate-pulse">
                          <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                          Live Now
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {contest.title}
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{contest.startTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{contest.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{contest.participants} joined</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Trophy className="w-4 h-4" />
                        <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">{contest.prize}</span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <span className={`text-sm font-semibold ${getDifficultyColor(contest.difficulty)}`}>
                        Difficulty: {contest.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {contest.status === 'Live' && (
                      <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all">
                        Join Now
                      </button>
                    )}
                    {contest.status === 'Upcoming' && (
                      <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all">
                        Register
                      </button>
                    )}
                    {contest.status === 'Completed' && (
                      <button className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">
                        View Results
                      </button>
                    )}
                    <button className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contests;
