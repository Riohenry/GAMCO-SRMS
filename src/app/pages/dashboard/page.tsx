'use client';

import Link from 'next/link';
import { BarChart3, Users, BookOpen, DollarSign, LogOut } from 'lucide-react';

export default function DashboardPage() {
  const cards = [
    { icon: Users, label: 'Students', value: '1,234', color: 'bg-blue-50' },
    { icon: Users, label: 'Employees', value: '156', color: 'bg-green-50' },
    { icon: BookOpen, label: 'Classes', value: '42', color: 'bg-purple-50' },
    { icon: DollarSign, label: 'Monthly Fee', value: '$45,230', color: 'bg-orange-50' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-6 h-6 text-indigo-600" />
            <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Welcome Back!</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="bg-white rounded-lg shadow p-6">
                <div className={`inline-flex p-3 rounded-lg ${card.color} mb-4`}>
                  <Icon className="w-6 h-6 text-gray-700" />
                </div>
                <p className="text-gray-600 text-sm mb-1">{card.label}</p>
                <p className="text-2xl font-bold text-gray-900">{card.value}</p>
              </div>
            );
          })}
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/pages/students/all" className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition">
              <Users className="w-6 h-6 text-indigo-600 mb-2" />
              <p className="font-medium text-gray-900">Manage Students</p>
              <p className="text-sm text-gray-600">View and manage student records</p>
            </Link>
            <Link href="/pages/dashboard" className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition">
              <BookOpen className="w-6 h-6 text-indigo-600 mb-2" />
              <p className="font-medium text-gray-900">Classes & Subjects</p>
              <p className="text-sm text-gray-600">Manage classes and subjects</p>
            </Link>
            <Link href="/pages/dashboard" className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition">
              <DollarSign className="w-6 h-6 text-indigo-600 mb-2" />
              <p className="font-medium text-gray-900">Fee Management</p>
              <p className="text-sm text-gray-600">Track and manage fees</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
