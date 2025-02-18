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
        <h1 className="text-5xl font-bold uppercase text-gray-600">River Smith</h1>
        <p className="text-md mt-2 max-w-xl mx-auto text-gray-600">
          Solutions Engineer specializing in crafting technical solutions to complex business problems, ensuring innovative and effective results.
        </p>
        <div className="mt-4 text-sm text-gray-700">
          <p><i className="fas fa-envelope mr-2"></i> rivyyriv@gmail.com</p>
          <p><i className="fas fa-linkedin mr-2"></i> linkedin.com/in/river-smith-945394133</p>
          <p><i className="fas fa-github mr-2"></i> github.com/rivyyriv</p>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-lg font-bold border-b pb-2">Professional Summary</h2>
        <p className="text-sm text-gray-600 mt-4">
        Experienced Solutions Engineer with a 2024 track record of generating $1.6M in recurring revenue by leveraging pre-sales and post-sales expertise. Skilled in delivering innovative technical solutions, building value, and driving successful implementations    </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold border-b pb-2">Experience</h2>
        <div className="mt-4">
          <div className="mb-4">
            <h3 className="font-semibold text-base">Enterprise API Solutions Engineer - Mastercard</h3>
            <p className="text-sm text-gray-700">December, 2023 - Present</p>
            <p className="text-sm text-gray-600">Mastercard Duration: {years} years and {months} months</p>

            <ul className="list-disc pl-4 text-sm">
            <li>Assisted AEs and CSMs in generating $1.6M in recurring revenue by leveraging pre-sales value building and sales engineering expertise to deliver tailored API solutions to enterprise clients, while also providing comprehensive post-sales implementation, integration, and troubleshooting support.</li>
              <li>Collaborated with enterprise partners to integrate the Finicity API, addressing unique business needs and enhancing operational efficiency while supporting robust post-sales processes.</li>
              <li>Worked with internal product teams to align API solutions with customer requirements, ensuring seamless implementation and comprehensive post-sales support for integration and troubleshooting.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-base">API Solutions Engineer - Mastercard</h3>
            <p className="text-sm text-gray-700">August, 2021 - Present</p>
            <p className="text-sm text-gray-700">Duration: {years} years and {months} months</p>
            <ul className="list-disc pl-4 text-sm">
              <li>Implemented Finicity API solutions for enterprise partners, resulting in improved data integration and client satisfaction.</li>
              <li>Diagnosed and resolved complex product bugs, collaborating with product teams to deliver efficient and timely fixes.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-base">Software Engineer - Nyah Digital</h3>
            <p className="text-sm text-gray-700">February, 2020 - August, 2021</p>
            <ul className="list-disc pl-4 text-sm">
              <li>Designed, developed, and implemented custom web solutions, ensuring scalability, performance, and seamless API integration with platforms like GCP, AWS, Twilio, and Stripe.</li>
              <li>Guided clients through API integrations with microservices, providing technical support from implementation to post-go-live optimization.
              </li>
              <li>Collaborated cross-functionally to align technical solutions with business goals, ensuring smooth deployment and client success.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-base">Sales Representative - Vivint</h3>
            <p className="text-sm text-gray-700">June, 2015 - November, 2019</p>
            <ul className="list-disc pl-4 text-sm">
              <li>Met with homeowners door-to-door or over the phone to prospect and present tailored smart home and solar solutions.</li>
              <li>Effectively communicated product benefits.</li>
              <li>Consistently exceeded monthly sales targets, contributing to the team’s overall performance growth.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold border-b pb-2">Education</h2>
        <div className="mt-4">
          <div className="mb-4">
            <h3 className="font-semibold text-base">BloomTech</h3>
            <p className="text-sm text-gray-700">Computer Software Engineering (February, 2020 - January, 2022)</p>
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

      <section className="mb-6">
        <h2 className="text-lg font-bold border-b pb-2">Skills</h2>
        <ul className="list-disc pl-6 text-sm mt-4 grid grid-cols-2 gap-2">
          <li>REST, HTTP, Webhooks</li>
          <li>JaveScript, Node.js. React.js</li>
          <li>SCRUM, AGILE</li>
          <li>Next.js</li>
          <li>Sales, Engineering, Value Building</li>
          <li>CSS</li>
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
        <p>Visit my portfolio: https://river-smith-resume.vercel.app/</p>
        <p>This resume was compiled into PDF format by my Next.js web app. See the code here: <a href="https://github.com/rivyyriv/river_smith_resume" className="text-blue-500 underline">GitHub Repo</a></p>
        <p>© {new Date().getFullYear()} River Smith. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrintResume;
