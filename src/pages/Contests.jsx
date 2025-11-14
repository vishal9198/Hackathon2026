import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Trophy, TrendingUp, Award, Zap } from 'lucide-react';

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
    <div className="min-h-screen pt-20 pb-12 px-4 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 dark:bg-blue-950/50 rounded-full mb-4">
              <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Compete & Earn</span>
            </div>
            <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight">
              Coding Contests
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              Challenge yourself against top developers and win rewards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            <div className="relative overflow-hidden bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-7 shadow-sm border border-blue-100 dark:border-blue-900/30 hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16"></div>
              <Trophy className="w-9 h-9 mb-4 text-blue-600 dark:text-blue-400" />
              <div className="text-4xl font-bold mb-1 text-gray-900 dark:text-white">24</div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Contests</div>
            </div>
            <div className="relative overflow-hidden bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-7 shadow-sm border border-purple-100 dark:border-purple-900/30 hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full -mr-16 -mt-16"></div>
              <Users className="w-9 h-9 mb-4 text-purple-600 dark:text-purple-400" />
              <div className="text-4xl font-bold mb-1 text-gray-900 dark:text-white">8,542</div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Participants</div>
            </div>
            <div className="relative overflow-hidden bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-7 shadow-sm border border-amber-100 dark:border-amber-900/30 hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16"></div>
              <TrendingUp className="w-9 h-9 mb-4 text-amber-600 dark:text-amber-400" />
              <div className="text-4xl font-bold mb-1 text-gray-900 dark:text-white">$10K+</div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Prize Pool</div>
            </div>
          </div>

          <div className="space-y-5">
            {contests.map((contest, index) => (
              <motion.div
                key={contest.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="relative bg-white dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-7 border border-gray-200/50 dark:border-gray-700/50 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500"></div>
                
                <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`px-3.5 py-1.5 rounded-lg text-xs font-bold border ${getStatusColor(contest.status)} uppercase tracking-wide`}>
                        {contest.status}
                      </span>
                      {contest.status === 'Live' && (
                        <span className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 font-semibold">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                          </span>
                          Live Now
                        </span>
                      )}
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold ${getDifficultyColor(contest.difficulty)} bg-gray-50 dark:bg-gray-800/80`}>
                        <Award className="w-3.5 h-3.5" />
                        {contest.difficulty}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {contest.title}
                    </h3>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="flex items-center gap-2.5">
                        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-700/50">
                          <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">Start Time</span>
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{contest.startTime.split(' ')[1]} {contest.startTime.split(' ')[2]}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-700/50">
                          <Clock className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">Duration</span>
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{contest.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-700/50">
                          <Users className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">Participants</span>
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{contest.participants.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-900/30">
                          <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">Prize Pool</span>
                          <span className="text-sm font-bold text-amber-600 dark:text-amber-400">{contest.prize}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 lg:min-w-[160px]">
                    {contest.status === 'Live' && (
                      <button className="px-7 py-3.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 transition-all duration-200 text-sm">
                        Join Now
                      </button>
                    )}
                    {contest.status === 'Upcoming' && (
                      <button className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200 text-sm">
                        Register
                      </button>
                    )}
                    {contest.status === 'Completed' && (
                      <button className="px-7 py-3.5 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-xl font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 text-sm">
                        View Results
                      </button>
                    )}
                    <button className="px-7 py-3.5 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-bold hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-200 text-sm">
                      Details
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