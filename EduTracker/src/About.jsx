// About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4 w-screen pt-4">
      <h1 className="text-4xl font-bold mb-8 text-green-600">About EduTracker</h1>

      <div className="max-w-4xl text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h2>
        <p className="text-lg">
          Our mission is to empower students and educators with innovative tools that enhance learning experiences and streamline educational tracking.
        </p>
      </div>

      <div className="max-w-4xl text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h2>
        <p className="text-lg">
          We envision a world where education is personalized, accessible, and effective for everyone, enabling learners to reach their full potential.
        </p>
      </div>

      <div className="max-w-4xl text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>📚 Comprehensive course tracking and management.</li>
          <li>🎓 Student performance analytics.</li>
          <li>🗓️ Timetable and assignment reminders.</li>
          <li>🔗 Resource sharing and collaboration tools.</li>
        </ul>
      </div>

      <div className="max-w-4xl text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center space-x-6">
          <div className="bg-blue-50 shadow-lg rounded-lg p-4 w-60">
            <img src="https://via.placeholder.com/100" alt="Team Member" className="rounded-full mb-2"/>
            <h3 className="font-semibold text-blue-600">John Doe</h3>
            <p className="text-gray-600">Co-Founder & CEO</p>
          </div>
          <div className="bg-blue-50 shadow-lg rounded-lg p-4 w-60">
            <img src="https://via.placeholder.com/100" alt="Team Member" className="rounded-full mb-2"/>
            <h3 className="font-semibold text-blue-600">Jane Smith</h3>
            <p className="text-gray-600">Co-Founder & CTO</p>
          </div>
          <div className="bg-blue-50 shadow-lg rounded-lg p-4 w-60">
            <img src="https://via.placeholder.com/100" alt="Team Member" className="rounded-full mb-2"/>
            <h3 className="font-semibold text-blue-600">Alice Johnson</h3>
            <p className="text-gray-600">Product Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
