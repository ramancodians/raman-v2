import { TbArrowDown } from "react-icons/tb";
import MyImage from "./../assets/khushbu-tamershwari.png";
import Amex from "./../assets/amex.svg";
import Mercedes from "./../assets/mercedes-benz.png";
import Tesco from "./../assets/tesco.png";
import Wipro from "./../assets/wipro.png";

const technicalSkills = [
  "JavaScript (ES6+), TypeScript",
  "React.js, Next.js, Angular",
  "Node.js, Express.js, NestJS",
  "HTML5, CSS3, SCSS, Tailwind CSS, Bootstrap",
  "RESTful APIs, GraphQL",
  "Database Management (PostgreSQL, MySQL, MongoDB, Oracle)",
  "Cloud Platforms (AWS, GCP, Azure)",
  "CI/CD (GitHub Actions, Jenkins, Docker, Kubernetes)",
  "Microservices Architecture & Serverless Computing",
  "Authentication & Security (OAuth, JWT, SSO, OWASP Security Best Practices)",
  "Testing Frameworks (Jest, Mocha, Cypress, Selenium)",
  "DevOps & Infrastructure as Code (Terraform, Ansible, Docker, Kubernetes)",
  "Version Control (Git, GitHub, GitLab, Bitbucket)",
  "Agile & Scrum Methodologies",
  "Offline-first & Progressive Web Apps (PWA, IndexedDB, Service Workers)",
];

const Company = ({
  image = Amex,
  imageAlt = "American Express",
  companyName = "American Express",
  duration = "Aug 2022 - Present",
  role = "Senior Engineer I",
  list = [
    "Led a team of 10 members, driving collaboration and project success in a fast-paced environment.",
    "Developed and enhanced a customer-facing application enabling seamless American Express card applications.",
    "Worked on the UK market, the highest revenue-generating international segment, ensuring optimal performance and user experience.",
    "Contributed to significant revenue growth by implementing strategic improvements and optimizing application workflows.",
  ],
}) => {
  return (
    <div>
      {/* Header */}
      <div className="flex gap-4 mt-4 items-center ">
        <div className="w-12">
          <img src={image} alt={imageAlt} className=" rounded-md" />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-lg">{companyName}</p>
          <h5 className="text-sm text-slate-400 relative -top-1">{duration}</h5>
          <h4 className="relative -top-2">{role}</h4>
        </div>
      </div>
      <div className="border-t borde-2 mt-2 mb-4"></div>
      <ul className="list-disc px-4 flex flex-col gap-4 mt-4">
        {list.map((str, idx) => (
          <li key={idx} className="">
            {str}
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center  md:flex-row">
          <div>
            <img
              src={MyImage}
              alt="Khushbu Tameshwari"
              className="rounded-full max-w-[200px]"
            />
          </div>
          <div className="px-10">
            <h1 className="text-2xl font-semibold mt-4">
              Hi,
              <br />I am Khushbu Tameshwari
            </h1>
            <h2 className="text-lg mt-2 max-w-lg">
              I am a Seniour Full Stack Engineer, with more than 8 years of
              experience in building web applications at scale.
            </h2>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-center items-center">
          <span className="mb-4 text-slate-400">
            Scroll down to see my work
          </span>
          <TbArrowDown className="text-3xl animate-bounce text-slate-400" />
        </div>
      </div>
      <div className="container mx-auto min-h-screen flex flex-col px-10">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="flex flex-col gap-16 mb-40">
          <Company />
          <Company
            companyName="Mercedes Benz Research and Development India"
            role="Senior Software Engineer"
            duration="Feb 2021 - Aug 2022"
            image={Mercedes}
            imageAlt="Mercedes Benz"
            list={[
              "Responsible for all digital transformation projects development in the department, working with German counterparts and internal projects. Leading and guiding the team of three",
              "developers for end-to-end web application development. Responsible for full lifecycle support from requirements analysis through design, coding, testing, debugging",
              "implementation and integration according to plan and schedule.",
            ]}
          />
          <Company
            companyName="Alten Calsoft Labs | Tesco (Client)"
            role="Senior Software Engineer"
            duration="Jul 2018 - Jan 2021"
            image={Tesco}
            imageAlt="Alten Calsoft Labs"
            list={[
              "Developed reusable, scalable components and published them for organization-wide use.",
              "Created Global Header module and published it to Nexus registry, used across multiple Tesco applications.",
              "Frontend and backend development for Enterprise Portal Apps using React, Redux, and Node.js.",
              "Developed the report generation app using Node.js.",
              "Used Enzyme and React Testing Library for unit testing.",
              "Worked on Cypress and TestProject for creating automation test suites.",
              "Integrated AppDynamics, SonarQube, and Google Analytics into the application.",
              "Supported the team as a Scrum Master on a rotational basis.",
              "Monitored applications using Splunk.",
            ]}
          />
          <Company
            companyName="Wipro Technology"
            role="Senior Software Engineer"
            duration="Sept 2015 - Jul 2018"
            image={Wipro}
            imageAlt="Wipro Technology"
            list={[
              "Worked on multiple projects using React and Angular.",
              "Developed and provided entire lifecycle support for the WLQ feedback app used by Wipro employees for appraisals.",
              "Worked on the backend for the WLQ app using Rest API, Core Java, and Oracle Database.",
              "Implemented the offline functionality of the web applications using IndexedDB.",
              "Provided responsiveness and accessibility to the applications.",
            ]}
          />
        </div>
      </div>

      {/* Education */}
      <div className="container mx-auto  flex flex-col px-10 my-20">
        <h2 className="text-2xl font-semibold my-4">Education</h2>

        <div>
          <h3 className="text-lg font-semibold">Bachelor of Engineering</h3>
          <h4 className="font-semibold">Computer Science and Engineering</h4>
          <h4 className="mt-2">
            {`Lakshmi Narayan College Of Technolgy, Bhopal (RGPV) | 2011 - 2015`}
          </h4>
          <h5 className="text-sm"></h5>
        </div>
      </div>

      {/* sKILLS */}
      <div className="container mx-auto flex flex-col px-10 my-10">
        <h2 className="text-2xl font-semibold my-4">Technical Skills</h2>
        <div>
          <h3 className="text-lg font-semibold">Bachelor of Engineering</h3>
          <h4 className="font-semibold">Computer Science and Engineering</h4>
          <h4 className="mt-2">
            {`Lakshmi Narayan College Of Technolgy, Bhopal (RGPV) | 2011 - 2015`}
          </h4>
          <h5 className="text-sm"></h5>
        </div>
      </div>
    </div>
  );
};

export default App;
