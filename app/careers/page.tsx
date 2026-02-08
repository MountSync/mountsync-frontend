'use client';

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const openPositions = [
    {
      id: 1,
      title: 'Senior Backend Engineer (Elixir/Go)',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build high-performance backend services using Elixir (Phoenix), Golang (Fiber), PostgreSQL, n8n, and Kafka. Design and implement real-time synchronization systems that power our multi-channel commerce platform.'
    },
    {
      id: 2,
      title: 'Senior Frontend Engineer (Next.js)',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Craft exceptional user experiences with Next.js and modern React patterns. Build responsive, performant interfaces that help merchants manage their inventory and sync operations seamlessly.'
    },
    {
      id: 3,
      title: 'Senior Full-Stack Engineer',
      department: 'Engineering',
      location: 'Remote (US)',
      type: 'Full-time',
      description: 'Build and scale our real-time synchronization engine that handles millions of products daily.'
    },
    {
      id: 4,
      title: 'Product Designer',
      department: 'Design',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      description: 'Design beautiful, intuitive experiences that help merchants manage their multi-channel operations.'
    },
    {
      id: 5,
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote (US)',
      type: 'Full-time',
      description: 'Help our merchants succeed by providing world-class support and strategic guidance.'
    },
    {
      id: 6,
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build robust APIs and services that power seamless integrations with e-commerce platforms.'
    },
    {
      id: 7,
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      description: 'Tell the MountSync story and help e-commerce merchants discover how we can transform their business.'
    },
    {
      id: 8,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Ensure our infrastructure is scalable, reliable, and performant for thousands of merchants worldwide.'
    }
  ];

  const departments = ['all', 'Engineering', 'Design', 'Customer Success', 'Marketing'];

  const filteredPositions = selectedDepartment === 'all' 
    ? openPositions 
    : openPositions.filter(pos => pos.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 dark:from-gray-950 dark:via-purple-950 dark:to-indigo-950">
      <Nav />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="text-5xl font-black tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.1' }}>
              Build the Future of{' '}
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                E-Commerce Together
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Join our mission to help thousands of merchants scale their businesses without operational chaos. We're building the infrastructure that powers modern multi-channel commerce.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="bg-white py-20 px-6 dark:bg-gray-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white lg:text-5xl">
              Why Join MountSync?
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '🚀',
                title: 'Meaningful Impact',
                description: 'Your work directly helps thousands of merchants run better businesses and serve their customers.'
              },
              {
                icon: '💪',
                title: 'Ownership & Autonomy',
                description: "You'll own significant projects from day one. We hire smart people and trust them to do great work."
              },
              {
                icon: '📈',
                title: 'Rapid Growth',
                description: "We're scaling fast. Grow your skills and career alongside a company that's going places."
              },
              {
                icon: '🌍',
                title: 'Remote-First Culture',
                description: "Work from anywhere in the US. We believe great talent isn't limited by geography."
              },
              {
                icon: '🎯',
                title: 'Solve Hard Problems',
                description: 'Real-time sync at scale, complex integrations, data consistency—challenging technical problems every day.'
              },
              {
                icon: '💙',
                title: 'Amazing Team',
                description: 'Work with talented, passionate people who care deeply about the product and each other.'
              }
            ].map((benefit, idx) => (
              <div 
                key={idx}
                className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 transition-all hover:border-purple-300 hover:shadow-xl hover:scale-105 dark:border-gray-800 dark:from-gray-900 dark:to-gray-800 dark:hover:border-purple-700"
              >
                <div className="mb-4 text-5xl">{benefit.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-20 px-6 dark:from-gray-900 dark:to-purple-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white lg:text-5xl">
              Perks & Benefits
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              We take care of our team
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '🏥', title: 'Health Insurance', description: 'Comprehensive medical, dental, and vision coverage' },
              { icon: '💰', title: 'Competitive Salary', description: 'Top-of-market compensation plus equity' },
              { icon: '🏖️', title: 'Unlimited PTO', description: 'Take the time you need to recharge' },
              { icon: '💻', title: 'Equipment Budget', description: '$3K to set up your perfect workspace' },
              { icon: '📚', title: 'Learning Budget', description: '$2K annually for courses, books, and conferences' },
              { icon: '🏠', title: 'Remote Work', description: 'Work from anywhere in the US' },
              { icon: '👶', title: 'Parental Leave', description: '16 weeks fully paid parental leave' },
              { icon: '🎉', title: 'Team Events', description: 'Annual all-hands and quarterly offsites' }
            ].map((perk, idx) => (
              <div 
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-3 text-4xl">{perk.icon}</div>
                <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">
                  {perk.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="bg-white py-20 px-6 dark:bg-gray-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white lg:text-5xl">
              Open Positions
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Find your next opportunity
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                  selectedDepartment === dept
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {dept === 'all' ? 'All Positions' : dept}
              </button>
            ))}
          </div>

          {/* Positions List */}
          <div className="space-y-4">
            {filteredPositions.map(position => (
              <div 
                key={position.id}
                className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 transition-all hover:border-purple-300 hover:shadow-xl dark:border-gray-800 dark:from-gray-900 dark:to-gray-800 dark:hover:border-purple-700"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                        {position.department}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                        📍 {position.location}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700 dark:bg-green-950 dark:text-green-300">
                        {position.type}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {position.description}
                    </p>
                  </div>
                  <div>
                    <a
                      href="/contact"
                      className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-base font-bold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                No positions found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Don't See a Fit Section */}
      <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-white lg:text-5xl">
            Don't See the Perfect Role?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-purple-100">
            We're always looking for exceptional talent. If you're passionate about e-commerce and think you'd be a great fit for MountSync, we'd love to hear from you.
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block rounded-full bg-white px-8 py-4 text-base font-bold text-purple-600 shadow-2xl transition-all hover:scale-105 hover:shadow-white/20"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
