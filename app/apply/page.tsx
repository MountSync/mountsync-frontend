'use client';

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Apply() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    linkedIn: '',
    portfolio: '',
    resume: null as File | null,
    coverLetter: '',
    experience: '',
    availability: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Application submitted:', formData);
    alert('Thank you for your application! We will review it and get back to you soon.');
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      linkedIn: '',
      portfolio: '',
      resume: null,
      coverLetter: '',
      experience: '',
      availability: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 dark:from-gray-950 dark:via-purple-950 dark:to-indigo-950">
      <Nav />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-12 px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="text-5xl font-black tracking-tight text-gray-900 dark:text-white sm:text-6xl" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.1' }}>
              Join Our{' '}
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Amazing Team
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Take the first step towards building the future of multi-channel commerce. Fill out the application below and we'll be in touch soon.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="bg-white py-20 px-6 dark:bg-gray-950 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl dark:border-gray-800 dark:from-gray-900 dark:to-gray-800 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Personal Information</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                      className="w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                      className="w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 mt-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                      required
                      className="w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      required
                      className="w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-purple-500"
                    />
                  </div>
                </div>
              </div>

              {/* Position & Links */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Position Details</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="position" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                      Position Applying For *
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-purple-500"
                    >
                      <option value="">Select a position</option>
                      <option value="Senior Backend Engineer (Elixir/Go)">Senior Backend Engineer (Elixir/Go)</option>
                      <option value="Senior Frontend Engineer (Next.js)">Senior Frontend Engineer (Next.js)</option>
                      <option value="Senior Full-Stack Engineer">Senior Full-Stack Engineer</option>
                      <option value="Product Designer">Product Designer</option>
                      <option value="Customer Success Manager">Customer Success Manager</option>
                      <option value="Backend Engineer">Backend Engineer</option>
                      <option value="Marketing Manager">Marketing Manager</option>
                      <option value="DevOps Engineer">DevOps Engineer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="linkedIn" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        id="linkedIn"
                        name="linkedIn"
                        value={formData.linkedIn}
                        onChange={handleChange}
                        placeholder="https://linkedin.com/in/yourprofile"
                        className="w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="portfolio" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                        Portfolio/GitHub
                      </label>
                      <input
                        type="url"
                        id="portfolio"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleChange}
                        placeholder="https://github.com/yourusername"
                        className="w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-purple-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Resume & Cover Letter</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="resume" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                      Upload Resume *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        required
                        className="w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 file:mr-4 file:rounded-full file:border-0 file:bg-purple-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-purple-700 hover:file:bg-purple-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:file:bg-purple-950 dark:file:text-purple-300"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Accepted formats: PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </div>

                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                      Cover Letter *
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      placeholder="Tell us why you're excited to join MountSync and what makes you a great fit for this role..."
                      rows={6}
                      required
                      className="w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-purple-500 resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Additional Information</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="experience" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                      Years of Relevant Experience *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-purple-500"
                    >
                      <option value="">Select experience level</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-7">5-7 years</option>
                      <option value="7-10">7-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="availability" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                      When Can You Start? *
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-purple-500"
                    >
                      <option value="">Select availability</option>
                      <option value="Immediately">Immediately</option>
                      <option value="2 weeks">2 weeks</option>
                      <option value="1 month">1 month</option>
                      <option value="2-3 months">2-3 months</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-purple-500/50 transition-all hover:shadow-purple-500/60 hover:scale-105"
                >
                  Submit Application
                </button>
                <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
                  We'll review your application and get back to you within 5 business days.
                </p>
              </div>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-3 text-3xl">⚡</div>
              <h3 className="mb-2 text-sm font-bold text-gray-900 dark:text-white">Quick Response</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">We review all applications within 5 days</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-3 text-3xl">🤝</div>
              <h3 className="mb-2 text-sm font-bold text-gray-900 dark:text-white">Fair Process</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Everyone gets a fair evaluation</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-3 text-3xl">💬</div>
              <h3 className="mb-2 text-sm font-bold text-gray-900 dark:text-white">Transparent</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Clear feedback at every stage</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
