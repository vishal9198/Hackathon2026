import { motion } from 'framer-motion';
import { Trophy, Medal, Award, TrendingUp, Star } from 'lucide-react';

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, username: 'CodeMaster_99', score: 2543, problems: 345, contests: 42, badge: 'Platinum' },
    { rank: 2, username: 'AlgoExpert', score: 2401, problems: 328, contests: 38, badge: 'Platinum' },
    { rank: 3, username: 'ByteWarrior', score: 2287, problems: 312, contests: 35, badge: 'Gold' },
    { rank: 4, username: 'DevNinja', score: 2145, problems: 298, contests: 33, badge: 'Gold' },
    { rank: 5, username: 'CodeCrusher', score: 2089, problems: 287, contests: 31, badge: 'Gold' },
    { rank: 6, username: 'TechWizard', score: 1956, problems: 265, contests: 28, badge: 'Silver' },
    { rank: 7, username: 'BugSlayer', score: 1834, problems: 243, contests: 25, badge: 'Silver' },
    { rank: 8, username: 'LogicLord', score: 1723, problems: 228, contests: 23, badge: 'Silver' },
    { rank: 9, username: 'DataDynamo', score: 1678, problems: 218, contests: 21, badge: 'Bronze' },
    { rank: 10, username: 'SyntaxSage', score: 1589, problems: 205, contests: 19, badge: 'Bronze' },
  ];

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Award className="w-6 h-6 text-orange-500" />;
      default: return <span className="font-bold text-gray-600 dark:text-gray-400">#{rank}</span>;
    }
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Platinum': return 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white';
      case 'Gold': return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white';
      case 'Silver': return 'bg-gradient-to-r from-gray-300 to-gray-500 text-white';
      case 'Bronze': return 'bg-gradient-to-r from-orange-400 to-orange-600 text-white';
      default: return 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
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
              Global Leaderboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Top performers in the CodeArena community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {leaderboardData.slice(0, 3).map((user, index) => (
              <motion.div
                key={user.rank}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className={`bg-gradient-to-br ${
                  index === 0 ? 'from-yellow-400 to-yellow-600' :
                  index === 1 ? 'from-gray-300 to-gray-500' :
                  'from-orange-400 to-orange-600'
                } rounded-2xl p-6 text-white shadow-2xl transform hover:scale-105 transition-all`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl font-bold">#{user.rank}</div>
                  {getRankIcon(user.rank)}
                </div>
                <div className="text-xl font-bold mb-2">{user.username}</div>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5" />
                  <span className="text-2xl font-bold">{user.score}</span>
                </div>
                <div className="space-y-1 text-sm opacity-90">
                  <div>Problems: {user.problems}</div>
                  <div>Contests: {user.contests}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-900">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Rank</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Username</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Score</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Problems</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Contests</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Badge</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {leaderboardData.map((user, index) => (
                    <motion.tr
                      key={user.rank}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          {getRankIcon(user.rank)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {user.username}
                          </div>
                          {user.rank <= 3 && (
                            <TrendingUp className="w-4 h-4 text-green-500" />
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-1 font-bold text-blue-600 dark:text-blue-400">
                          <Star className="w-4 h-4" />
                          {user.score}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">
                        {user.problems}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">
                        {user.contests}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(user.badge)}`}>
                          {user.badge}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Leaderboard;
