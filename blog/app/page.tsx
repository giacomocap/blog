import Header from './Header';
import Footer from './Footer';
import ExperienceCard from './ExperienceCard';
import ProjectCard from './ProjectCard';
import Image from 'next/image';
import profilePic from '../public/headshot.png';

export const metadata = {
  title: 'Giacomo Cappellozza - Full-Stack Developer',
  description: 'Full-Stack developer portfolio of Giacomo Cappellozza, showcasing skills, experiences, and projects.',
};

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <section id="about" className="my-8 text-center mt-16">
          <Image
            src={profilePic}
            alt="Giacomo Cappellozza"
            className="rounded-full mx-auto mb-4"
            width={150}
            height={150}
          />
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="text-lg mt-4">Full-Stack developer with a strong engineering background, proficient in UI/UX development and in complex API and database integration, using a diverse and modern tech stack. Extensive experience in Microsoft tech stack, Dynamics 365, and PowerApps. Quality and value-driven. Quick learner and tech enthusiast.</p>
        </section>
        <section id="experience" className="my-8">
          <h2 className="text-2xl font-bold">Experience</h2>
          <ExperienceCard
            title="Software Engineer"
            company="AgostiniLab | Padua, IT - Remote"
            period="2020 - Present"
            description={[
              "Designed, developed, and deployed a web-based event and inventory manager application using C#, .NET, Entity Framework, MSSQL server, Identity Server for auth and frontend in React and Fluent UI.",
              "Collaborated to deliver a custom Microsoft Dynamics 365 Sales and Power Apps solution for Pharma to multiple enterprise customers.",
              "Backend in C# and Power Apps workflows, frontend components using TypeScript, multiple complex SPA in React, implemented GitHub actions for DevOps.",
              "Provided training for Power Apps, Microsoft Dynamics, React and C# to junior developers.",
              "Studied and implemented AI assistants using CopilotStudio and Azure OpenAI.",
              "Developed Angular 14 SPA for retail.",
              "Created various landing pages and portals using Next.js, Typescript and Tailwind CSS.",
              "Experience deploying Linux and Windows servers, Proxmox.",
              "Worked with HOP for ETL and ClickHouse."
            ]}
          />
        </section>
        <section id="projects" className="my-8">
          <h2 className="text-2xl font-bold">Projects</h2>
          <ProjectCard
            title="Web-Based Event and Inventory Manager"
            description="Designed, developed, and deployed a web-based event and inventory manager application using C#, .NET, Entity Framework, MSSQL server, Identity Server for auth and frontend in React and Fluent UI."
          />
          <ProjectCard
            title="Custom Microsoft Dynamics 365 Sales and Power Apps Solution"
            description="Collaborated to deliver a custom Microsoft Dynamics 365 Sales and Power Apps solution for Pharma to multiple enterprise customers."
          />
          {/* Add more ProjectCards as needed */}
        </section>
        <section id="skills" className="my-8">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["Web Development", "C#, .NET, Entity Framework, SQL", "Typescript, Javascript", "Next.js, React, Fluent UI, Tailwind CSS", "Power Apps, Microsoft Dynamics 365", "Project management life-cycle"].map((skill, index) => (
              <span key={index} className="bg-white text-gray-800 py-1 px-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">{skill}</span>
            ))}
          </div>
        </section>
        <section id="contact" className="my-8">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p>Email: <a href="mailto:99giacomo@gmail.com" className="text-blue-500">99giacomo@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/giacomo-cappellozza/" className="text-blue-500">linkedin.com/in/giacomo-cappellozza</a></p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
