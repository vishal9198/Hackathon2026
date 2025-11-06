import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Users, FileText, TrendingUp, Settings, Save } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [questionForm, setQuestionForm] = useState({
    title: '',
    difficulty: 'Easy',
    topic: 'Array',
    description: '',
    testCases: ''
  });

  const stats = [
    { label: 'Total Users', value: '10,542', icon: <Users className="w-6 h-6" />, color: 'from-blue-500 to-cyan-600' },
    { label: 'Total Problems', value: '1,234', icon: <FileText className="w-6 h-6" />, color: 'from-purple-500 to-pink-600' },
    { label: 'Active Contests', value: '24', icon: <TrendingUp className="w-6 h-6" />, color: 'from-green-500 to-emerald-600' },
    { label: 'Submissions Today', value: '8,456', icon: <Save className="w-6 h-6" />, color: 'from-orange-500 to-red-600' },
  ];

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    alert('Question created successfully!');
    setQuestionForm({ title: '', difficulty: 'Easy', topic: 'Array', description: '', testCases: '' });
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
              Admin Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage contests, questions, and platform analytics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
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

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <div className="flex overflow-x-auto">
                {['overview', 'create', 'contests', 'analytics'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 font-semibold transition-all ${
                      activeTab === tab
                        ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Platform Overview
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Recent Activity</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Monitor user engagement, submissions, and contest participation in real-time.
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">System Health</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-600 dark:text-green-400 font-semibold">All Systems Operational</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'create' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Create New Question
                  </h2>
                  <form onSubmit={handleQuestionSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Question Title
                      </label>
                      <input
                        type="text"
                        value={questionForm.title}
                        onChange={(e) => setQuestionForm({ ...questionForm, title: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., Two Sum"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Difficulty
                        </label>
                        <select
                          value={questionForm.difficulty}
                          onChange={(e) => setQuestionForm({ ...questionForm, difficulty: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="Easy">Easy</option>
                          <option value="Medium">Medium</option>
                          <option value="Hard">Hard</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Topic
                        </label>
                        <select
                          value={questionForm.topic}
                          onChange={(e) => setQuestionForm({ ...questionForm, topic: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="Array">Array</option>
                          <option value="String">String</option>
                          <option value="Linked List">Linked List</option>
                          <option value="Tree">Tree</option>
                          <option value="Graph">Graph</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Description
                      </label>
                      <textarea
                        value={questionForm.description}
                        onChange={(e) => setQuestionForm({ ...questionForm, description: e.target.value })}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter problem description..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Test Cases
                      </label>
                      <textarea
                        value={questionForm.testCases}
                        onChange={(e) => setQuestionForm({ ...questionForm, testCases: e.target.value })}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter test cases..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
                    >
                      <Plus className="w-5 h-5" />
                      Create Question
                    </button>
                  </form>
                </div>
              )}

              {activeTab === 'contests' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Manage Contests
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Create and manage coding contests for the community.
                  </p>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Create New Contest
                  </button>
                </div>
              )}

              {activeTab === 'analytics' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    User Analytics
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Daily Active Users</h3>
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3,421</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Problems Solved Today</h3>
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400">1,234</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
