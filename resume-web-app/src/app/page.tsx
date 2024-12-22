"use client";

// Install Next.js by running:
// npx create-next-app@latest resume-web-app --typescript

import Head from 'next/head';
import Link from 'next/link';

const calculateDuration = (startDate: string): { years: number; months: number } => {
  const start = new Date(startDate);
  const now = new Date();
  const years = now.getFullYear() - start.getFullYear();
  const months = now.getMonth() - start.getMonth();
  const totalMonths = years * 12 + months;
  return { years: Math.floor(totalMonths / 12), months: totalMonths % 12 };
};

const Resume = () => {
  const { years, months } = calculateDuration('2021-09-01');

  return (
    <div className="p-8 max-w-6xl mx-auto bg-gray-50 shadow-lg rounded-lg grid md:grid-cols-3 gap-8">
      <Head>
        <title>Resume - River Smith</title>
        <meta name="description" content="Resume of River Smith" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link
        href="/pagePrint"
        className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Print Resume
      </Link>

      <aside className="md:col-span-1 bg-gray-800 text-white rounded-lg p-6">
        <img
          src="/profile.jpg"
          alt="River Smith"
          className="rounded-full w-32 mx-auto mb-6"
        />
        <h2 className="text-2xl font-bold text-center mb-4">River Smith</h2>
        <p className="text-sm text-center mb-4">
          Solutions Engineer specializing in crafting technical solutions to complex business problems, ensuring innovative and effective results.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-4">Contact</h3>
        <ul className="text-sm">
          <li>Email: rivyyriv@gmail.com</li>
          <li>LinkedIn: www.linkedin.com/in/river-smith-945394133</li>
          <li>GitHub: www.github/rivyyriv.com</li>
        </ul>

        <h3 className="text-lg font-semibold mt-8 mb-4">Skills</h3>
        <ul className="list-disc pl-6 text-sm">
          <li>Webhooks</li>
          <li>HTTP</li>
          <li>Express.js</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
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
              <ul className="list-disc pl-6 text-sm text-gray-600 mt-2">
                <li>Collaborated with enterprise partners to integrate the Finicity API, addressing unique business needs.</li>
                <li>Worked with internal product teams to align solutions with customer requirements.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-lg">API Solutions Engineer - Mastercard</h3>
              <p className="text-sm text-gray-500">August, 2021 - December, 2023</p>
              <p className="text-sm text-gray-600">Duration: {years} years and {months} months</p>
              <ul className="list-disc pl-6 text-sm text-gray-600 mt-2">
                <li>Implemented Finicity API solutions for enterprise partners, ensuring secure and efficient data integration.</li>
                <li>Diagnosed complex product bugs and collaborated with product teams for resolutions.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-lg">Software Engineer - Nyah Digital</h3>
              <p className="text-sm text-gray-500">February, 2020 - August, 2021</p>
              <ul className="list-disc pl-6 text-sm text-gray-600 mt-2">
                <li>Designed, developed, and implemented customized web solutions for clients.</li>
                <li>Provided technical support during and after project implementations.</li>
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
            </div>
            <div className="mb-8">
              <h3 className="font-bold text-lg">Utah Valley University</h3>
              <p className="text-sm text-gray-500">General Studies (2018 - 2019)</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resume;
