'use client';

import Link from 'next/link';
import { ArrowRight, LogIn, UserPlus } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-blue-100">
        <h1 className="text-2xl font-bold text-indigo-600">GAMCO-SRMS</h1>
        <div className="flex gap-4">
          <Link href="/auth" className="inline-flex items-center gap-2 px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition">
            <LogIn className="w-4 h-4" />
            Login
          </Link>
          <Link href="/auth" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg transition">
            <UserPlus className="w-4 h-4" />
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          School Resource Management System
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Modern, comprehensive platform for managing your educational institution with ease.
          Streamline student management, attendance, exams, and more.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/auth" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg font-medium transition">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Student Management', desc: 'Admissions, records, and student information' },
            { title: 'Attendance Tracking', desc: 'Digital attendance for students and staff' },
            { title: 'Exam Management', desc: 'Create, schedule, and manage exams' },
            { title: 'Fee Management', desc: 'Automate fee collection and tracking' },
            { title: 'Reports & Analytics', desc: 'Comprehensive reports on performance' },
            { title: 'Communication', desc: 'Built-in messaging system' },
          ].map((feature, i) => (
            <div key={i} className="p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition">
              <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-20">
        <div className="max-w-5xl mx-auto px-6 text-center text-gray-600">
          <p>© 2026 GAMCO-SRMS. All rights reserved. | Version 0.2.0 (Modernized)</p>
        </div>
      </footer>
    </div>
  );
}
