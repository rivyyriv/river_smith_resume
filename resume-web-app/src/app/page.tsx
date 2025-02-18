"use client";

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const calculateDuration = (startDate: string): { years: number; months: number } => {
  const start = new Date(startDate);
  const now = new Date();
  const years = now.getFullYear() - start.getFullYear();
  const months = now.getMonth() - start.getMonth();
  const totalMonths = years * 12 + months;
  return { years: Math.floor(totalMonths / 12), months: totalMonths % 12 };
};

const projects = [
  {
    title: "Receptor Intelligence",
    link: "https://receptor-intelligence-river-smiths-projects-a61e9b4a.vercel.app/",
  },
  {
    title: "Simple Instagram Clone",
    link: "https://github.com/rivyyriv/instagram-clone",
  },
  {
    title: "ios-classifieds",
    link: "https://github.com/rivyyriv/ios-classifieds",
  }
];

const Resume = () => {
  const { years, months } = calculateDuration('2021-09-01');
  const [currentProject, setCurrentProject] = useState(0);

  const handleNextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const handlePreviousProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto bg-gray-50 shadow-lg rounded-lg grid md:grid-cols-3 gap-8">
      <Head>
        <title>Resume - River Smith</title>
        <meta name="description" content="Resume of River Smith" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link
        href="/pagePrint"
        className="fixed top-2 right-2 bg-blue-500 text-white px-2 py-2 rounded shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        PDF
      </Link>

      <aside className="md:col-span-1 bg-gray-800 text-white rounded-lg p-6">
        <img
          src="/profile.jpg"
          alt="River Smith"
          className="rounded-full w-32 mx-auto mb-6"
        />
        <h2 className="text-2xl font-bold text-center mb-4">River Smith</h2>
        <p className="text-sm text-center mb-4">
        Experienced Solutions Engineer with a 2024 track record of generating $1.6M in recurring revenue by leveraging pre-sales and post-sales expertise. Skilled in delivering innovative technical solutions, building value, and driving successful implementations        </p>

        <h3 className="text-lg font-semibold mt-8 mb-4">Contact</h3>
        <ul className="text-sm">
          <li>Email: rivyyriv@gmail.com</li>
          <li>LinkedIn: linkedin.com/in/river-smith-945394133</li>
          <li>GitHub: github.com/rivyyriv</li>
        </ul>

        <h3 className="text-lg font-semibold mt-8 mb-4">Skills</h3>
        <ul className="list-disc pl-6 text-sm">
        <li>REST, HTTP, Webhooks</li>
          <li>JaveScript, Node.js. React.js</li>
          <li>SCRUM, AGILE</li>
          <li>Next.js</li>
          <li>Sales, Engineering, Value Building</li>
          <li>CSS</li>
        </ul>

        <h3 className="text-lg font-semibold mt-8 mb-4">Certifications</h3>
        <ul className="text-sm">
          <li>Full-Stack Web Development + Technical Interviewing</li>
        </ul>

        <h3 className="text-lg font-semibold mt-8 mb-4">Honors</h3>
        <ul className="text-sm">
          <li>Eagle Scout</li>
        </ul>
      </aside>

      <main className="md:col-span-2">
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 text-gray-700">Work Experience</h2>
          <div className="border-l border-gray-300 pl-6">
            <div className="mb-8">
              <h3 className="font-bold text-lg">Enterprise API Solutions Engineer - Mastercard</h3>
              <p className="text-sm text-gray-500">December, 2023 - Present</p>
              <p className="text-sm text-gray-600">Mastercard Duration: {years} years and {months} months</p>

              <ul className="list-disc pl-6 text-sm text-gray-600 mt-2">
              <li>Assisted AEs and CSMs in generating $1.6M in recurring revenue by leveraging pre-sales value building and sales engineering expertise to deliver tailored API solutions to enterprise clients, while also providing comprehensive post-sales implementation, integration, and troubleshooting support.</li>
              <li>Collaborated with enterprise partners to integrate the Finicity API, addressing unique business needs and enhancing operational efficiency while supporting robust post-sales processes.</li>
              <li>Worked with internal product teams to align API solutions with customer requirements, ensuring seamless implementation and comprehensive post-sales support for integration and troubleshooting.</li>

             </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-lg">API Solutions Engineer - Mastercard</h3>
              <p className="text-sm text-gray-500">August, 2021 - Now</p>
              <p className="text-sm text-gray-600">Duration: {years} years and {months} months</p>
              <ul className="list-disc pl-6 text-sm text-gray-600 mt-2">
                <li>Implemented Finicity API solutions for enterprise partners, resulting in improved data integration and client satisfaction.</li>
                <li>Diagnosed and resolved complex product bugs, collaborating with product teams to deliver efficient and timely fixes.</li>
                <li>Optimized API integration workflows, cutting implementation time by 20% on average and boosting project efficiency across multiple clients.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-lg">Software Engineer - Nyah Digital</h3>
              <p className="text-sm text-gray-500">February, 2020 - August, 2021</p>
              <ul className="list-disc pl-6 text-sm text-gray-600 mt-2">
              <li>Designed, developed, and implemented custom web solutions, ensuring scalability, performance, and seamless API integration with platforms like GCP, AWS, Twilio, and Stripe.</li>
              <li>Guided clients through API integrations with microservices, providing technical support from implementation to post-go-live optimization.
              </li>
              <li>Collaborated cross-functionally to align technical solutions with business goals, ensuring smooth deployment and client success.
              </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-lg">Sales Representative - Vivint</h3>
              <p className="text-sm text-gray-500">June, 2015 - November, 2019</p>
              <ul className="list-disc pl-6 text-sm text-gray-600 mt-2">
                <li>Met with homeowners door-to-door or over the phone to prospect and present tailored smart home and solar solutions.</li>
                <li>Effectively communicated product benefits, driving an increase in successful conversions and boosting customer satisfaction.</li>
                <li>Consistently exceeded monthly sales targets, contributing to the team’s overall performance growth.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 text-gray-700">Education</h2>
          <div className="border-l border-gray-300 pl-6">
            <div className="mb-8">
              <h3 className="font-bold text-lg">BloomTech</h3>
              <p className="text-sm text-gray-500">Computer Software Engineering (February, 2020 - January, 2022)</p>
              <p className="text-sm text-gray-600 mt-2">
                Certificate - Full Stack Web Engineering
              </p>
              <ul className="list-disc pl-6 text-sm mt-2">
                <li>Attended code lectures, developed and deployed Full Stack Web applications using the following technologies:</li>
                <li>HTML, CSS, Git, JavaScript, and UI Principles</li>
                <li>React, Redux, React Router, HTTP/Ajax, and Functional Programming Techniques</li>
                <li>Advanced React, State Management, and Web Applications</li>
                <li>Node.js Web APIs, Data Persistence, Authentication, and Testing</li>
                <li>Python, OOP, Algorithms, Data Structures, Graphs, and Hash Tables</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 text-gray-700">Projects</h2>
          <div className="text-center">
            <div className="p-4 border border-gray-300 rounded-md shadow-md">
              <h3 className="font-bold text-lg">{projects[currentProject].title}</h3>
            <Link
                href={projects[currentProject].link}
                className="text-blue-500 hover:underline mt-4 block"
              >
                View Project
              </Link>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={handlePreviousProject}
                className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700"
              >
                Previous
              </button>
              <button
                onClick={handleNextProject}
                className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resume;

