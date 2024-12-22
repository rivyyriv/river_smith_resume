"use client";

import Head from 'next/head';

const calculateDuration = (startDate: string): { years: number; months: number } => {
  const start = new Date(startDate);
  const now = new Date();
  const years = now.getFullYear() - start.getFullYear();
  const months = now.getMonth() - start.getMonth();
  const totalMonths = years * 12 + months;
  return { years: Math.floor(totalMonths / 12), months: totalMonths % 12 };
};

const PrintResume = () => {
  const { years, months } = calculateDuration('2021-09-01');

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white text-black">
      <Head>
        <title>Print Resume - River Smith</title>
        <meta name="description" content="Printable Resume of River Smith" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold uppercase">River Smith</h1>
        <p className="text-md mt-2 max-w-xl mx-auto">
          Solutions Engineer specializing in crafting technical solutions to complex business problems, ensuring innovative and effective results.
        </p>
        <div className="mt-4 text-sm">
          <p>Email: rivyyriv@gmail.com</p>
          <p>LinkedIn: linkedin.com/in/river-smith-945394133</p>
          <p>GitHub: github.com/rivyyriv</p>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-lg font-bold border-b pb-2">Experience</h2>
        <div className="mt-4">
          <div className="mb-4">
            <h3 className="font-semibold text-base">Enterprise API Solutions Engineer - Mastercard</h3>
            <p className="text-sm text-gray-700">December, 2023 - Now</p>
            <ul className="list-disc pl-4 text-sm">
              <li>Collaborated with enterprise partners to integrate the Finicity API, addressing unique business needs.</li>
              <li>Worked with internal product teams to align solutions with customer requirements.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-base">API Solutions Engineer - Mastercard</h3>
            <p className="text-sm text-gray-700">August, 2021 - Now</p>
            <p className="text-sm text-gray-700">Duration: {years} years and {months} months</p>
            <ul className="list-disc pl-4 text-sm">
              <li>Implemented Finicity API solutions for enterprise partners, ensuring secure and efficient data integration.</li>
              <li>Diagnosed complex product bugs and collaborated with product teams for resolutions.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-base">Software Engineer - Nyah Digital</h3>
            <p className="text-sm text-gray-700">February, 2020 - August, 2021</p>
            <ul className="list-disc pl-4 text-sm">
              <li>Designed, developed, and implemented customized web solutions for clients.</li>
              <li>Provided technical support during and after project implementations.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold border-b pb-2">Education</h2>
        <div className="mt-4">
          <div className="mb-2">
            <h3 className="font-semibold text-base">BloomTech</h3>
            <p className="text-sm text-gray-700">Computer Software Engineering (February, 2020 - January, 2022)</p>
          </div>
          <div className="mb-2">
            <h3 className="font-semibold text-base">Utah Valley University</h3>
            <p className="text-sm text-gray-700">General Studies (2018 - 2019)</p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold border-b pb-2">Skills</h2>
        <ul className="list-disc pl-6 text-sm mt-4 grid grid-cols-2 gap-2">
          <li>Webhooks</li>
          <li>HTTP</li>
          <li>Express.js</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold border-b pb-2">Certifications</h2>
        <ul className="list-disc pl-6 text-sm mt-4">
          <li>Full-Stack Web Development + Technical Interviewing</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold border-b pb-2">Honors</h2>
        <ul className="list-disc pl-6 text-sm mt-4">
          <li>Eagle Scout</li>
        </ul>
      </section>

      <footer className="text-center mt-6 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} River Smith. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrintResume;
