import Dropdown from "@/components/dropdown";
import Image from "next/image";
import Link from "next/link";

declare type EmploymentType = 'full-time' | 'part-time' | 'contract' | 'volunteer';
declare type ProjectType = 'Project' | 'Team';

interface Job {
  title: string;
  employment_type: EmploymentType;
  start_date: string;
  end_date?: string;
  description: string;
  responsibilities?: string[];
}

interface Project {
  title: string;
  type: ProjectType;
  description?: string;
  jobs?: Job[];
  href: string;
}

interface Experience {
  company: string;
  icon_logo?: string;
  start_date: string;
  end_date?: string;
  description?: string;
  projects?: Project[];
  href?: string;
}

export default function Home() {
  const personal_email: string = "mailto:bsmithcompsci+portfolio@gmail.com";

  const project_types_counter: Map<string, string[]> = new Map([
    ["Games", [
      "Project Campsite",
      "Mirandus",
      "Tavern Games",
      "Bardic: Quest for Love",
      "Telegram Train Tapper Game",
      "0n1 Tapper Game",
    ]],
    ["Technology", [
      "VitalXP Game Engine",
    ]],
  ]);

  const skills: Map<string, string[]> = new Map([
    ["Programming Languages", ["C++", "Rust", "Go", "TypeScript", "Python", "C#", "Java", "Bash/Shell Scripting"]],
    ["Cloud & DevOps", ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "Ansible", "FluxCD", "Jenkins", "CI/CD", "Microservices"]],
    ["Game Development", ["Unity", "Godot"]],
    ["Monitoring & Logging", ["Prometheus", "Grafana", "Grafana Loki", "Datadog", "ELK Stack", "Splunk"]],
    ["Other Skills", ["Linux", "Networking", "Agile Methodologies"]],
  ]);

  const experienceProjects: Experience[] = [
    {
      company: "Campsite Games",
      icon_logo: "https://campsitegames.com/_next/image?url=%2Fimages%2Flogos%2FCampsite%20Games%20Logo%20Design.png&w=384&q=75",
      start_date: "2025-01-02",
      description: "Campsite Games is an indie game studio focused on creating immersive and innovative gaming experiences across various platforms.",
      projects: [
        {
          title: "Project Campsite",
          type: "Project",
          jobs: [
            {
              title: "Chief Technology Officer | Founder",
              employment_type: "full-time",
              start_date: "2025-01-02",
              description: "Leading the technology strategy and development for Campsite Games, overseeing all technical aspects of game development and infrastructure.",
              responsibilities: [
                "Define and implement the technical vision for the company, aligning with business goals and market trends.",
                "Oversee the development of game engines, tools, and pipelines to ensure efficient production workflows.",
                "Manage a team of engineers and collaborate with designers and artists to deliver high-quality gaming experiences."
              ],
            }
          ],
          href: "/blogs/projects/12"
        }
      ],
      href: "https://campsitegames.com/"
    },
    {
      company: "Gala Games",
      icon_logo: "https://imgs.search.brave.com/SS6HX8ko3wEM6X2g_25Bh3WHMqD2yfa1r61LSCEOA9k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdXBw/b3J0LmdhbGEuY29t/L2hjL2FydGljbGVf/YXR0YWNobWVudHMv/MjMzNjU4MTY3NTYz/Nzk",
      start_date: "2022-06-01",
      end_date: "2024-12-02",
      description: "Gala Games is a blockchain gaming platform focused on creating player-owned gaming experiences.",
      projects: [
        {
          title: "Core Team",
          type: "Team",
          jobs: [
            {
              title: "DevOps Engineer",
              employment_type: "full-time",
              start_date: "2024-05-01",
              end_date: "2024-12-02",
              description: "Automating the deployment and management of Gala Games' node infrastructure to ensure reliability and scalability.",
              responsibilities: [
                "Developed infrastructure-as-code solutions using Terraform and Ansible to automate node deployments.",
                "Implemented monitoring and alerting systems to maintain high availability of node services.",
                "Collaborated with development teams to streamline CI/CD pipelines for faster feature releases."
              ],
            }
          ],
          href: "/blogs/projects/6"
        },
        {
          title: "Mirandus & Tavern Games",
          type: "Project",
          jobs: [
            {
              title: "DevOps Engineer",
              employment_type: "full-time",
              start_date: "2024-05-01",
              end_date: "2024-12-02",
              description: "Supported the Mirandus game development team by managing cloud infrastructure and deployment pipelines.",
              responsibilities: [
                "Maintained and optimized cloud infrastructure on AWS to support game development and testing environments.",
                "Automated deployment processes to facilitate rapid iteration and testing of game builds.",
                "Worked closely with developers to ensure smooth integration of new features into the live environment."
              ],
            }
          ],
          href: "/blogs/projects/8"
        }
      ],
      href: "https://games.gala.com/"
    },
    {
      company: "Breadwork Games",
      icon_logo: "https://static.wixstatic.com/media/3efd23_d71b4ae14eff484a86428cec6a3900a5%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/3efd23_d71b4ae14eff484a86428cec6a3900a5%7Emv2.png",
      start_date: "2023-07-01",
      end_date: "2024-05-01",
      description: "Breadwork Games is an indie game studio focused on creating innovative and engaging gaming experiences across multiple platforms.",
      projects: [
        {
          title: "Bardic: Quest for Love",
          type: "Project",
          jobs: [
            {
              title: "Lead Software Engineer",
              employment_type: "volunteer",
              start_date: "2023-07-01",
              end_date: "2024-05-01",
              description: "Led the software engineering efforts for Bardic: Quest for Love, a narrative-driven RPG that combines storytelling with strategic gameplay.",
              responsibilities: [
                "Architected and implemented core game systems using Unity and C#, ensuring a smooth and engaging player experience.",
                "Coordinated with artists and designers to integrate assets and mechanics that enhanced the game's narrative and visual appeal.",
                "Optimized game performance across multiple platforms, including PC and consoles, to reach a wider audience."
              ],
            }
          ],
          href: "/blogs/projects/9"
        }
      ],
      href: "https://www.breadworkgames.com/"
    },
    {
      company: "Immutable.AI",
      icon_logo: "https://imgs.search.brave.com/St6NErpR0KtVich3BMx9l93N5-JkcYMnfl6QCrnJIvk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMCpEZkYyUTR4/YjNxU3p4SENu",
      start_date: "2022-01-01",
      end_date: "2024-06-01",
      description: "Immutable.AI focused on gamifying AI data labeling and developing engaging Telegram-based games.",
      projects: [
        {
          title: "Telegram Train Tapper Game",
          description: "Contract game development for interactive tapper games on the Telegram platform.",
          type: "Project",
          jobs: [
            {
              title: "Game Developer",
              employment_type: "contract",
              start_date: "2022-01-01",
              end_date: "2023-06-01",
              description: "Developed engaging tapper games for the Telegram platform, focusing on user engagement and viral mechanics.",
              responsibilities: [
                "Built interactive game mechanics optimized for mobile web experiences within Telegram.",
                "Implemented real-time leaderboards and social features to drive user engagement.",
                "Optimized game performance for various mobile devices and network conditions."
              ],
            }
          ],
          href: "/blogs/projects/3"
        },
        {
          title: "0n1 Tapper Game",
          type: "Project",
          description: "A tapper game designed to engage users with the 0n1 NFT community on Telegram.",
          jobs: [
            {
              title: "Game Developer",
              employment_type: "contract",
              start_date: "2023-07-01",
              end_date: "2024-06-01",
              description: "Created a tapper game that integrated with the 0n1 NFT community, enhancing user interaction and retention.",
              responsibilities: [
                "Designed game mechanics that rewarded players with NFT-related incentives.",
                "Integrated blockchain elements to allow users to showcase their NFTs within the game.",
                "Collaborated with the 0n1 community to gather feedback and iterate on game features."
              ],
            }
          ],
          href: "/blogs/projects/4"
        }
      ],
      href: "https://www.linkedin.com/company/immu-ai/"
    },
    {
      company: "VitalXP",
      icon_logo: "https://imgs.search.brave.com/tFepHxkhd6-cwYl8fJXioMV-vSvRaO3PapF_xE5EWPY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb2lu/LWltYWdlcy5jb2lu/Z2Vja28uY29tL2Nv/aW5zL2ltYWdlcy8y/OTM2OC9sYXJnZS92/aXRhbC5wbmc_MTY5/NjUyODMxNQ",
      start_date: "2022-01-01",
      end_date: "2023-06-01",
      description: "VitalXP was developing a proprietary game engine built from the ground up, designed specifically for VR and Stadia platforms to deliver next-generation gaming experiences.",
      projects: [
        {
          title: "VitalXP Game Engine",
          type: "Project",
          jobs: [
            {
              title: "Software Engineer",
              employment_type: "full-time",
              start_date: "2022-01-01",
              end_date: "2023-06-01",
              description: "Contributed to the development of a cutting-edge game engine tailored for VR and cloud gaming platforms, focusing on performance optimization and seamless user experiences.",
              responsibilities: [
                "Developed core engine features using C++ and Rust, ensuring high performance and low latency for VR applications.",
                "Collaborated with cross-functional teams to integrate cloud gaming capabilities, optimizing for Google Stadia's architecture.",
                "Implemented advanced rendering techniques to enhance visual fidelity in immersive environments."
              ],
            }
          ],
          href: "/blogs/projects/2"
        }
      ],
      href: "https://www.linkedin.com/company/vitalxp"
    },
  ];

  return (
    <main>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold text-gray-900">Brandon Smith</Link>
              </div>
              <div className="flex items-center space-x-4">
                <Dropdown trigger={<span className="text-gray-700 hover:text-gray-900 cursor-pointer">Blog</span>}>
                  <a href="/blogs/projects/1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Knowledge</a>
                  <a href="/blogs/projects/2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Opinions</a>
                  <a href="/blogs/projects/3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Projects</a>
                </Dropdown>
                <Link href="/#contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */} 
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="relative h-48 w-48 md:h-80 md:w-80 mx-auto rounded-full overflow-hidden">
              <Image
              src="/profile/20250802_084532.jpg"
              alt="Brandon Smith - Profile Picture"
              fill
              className="object-cover object-[60%_30%]"
              />
            </div>
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{"Hi, I'm Brandon Smith!"}</h1>
              <p className="text-lg text-gray-600 mb-4">
                {"I'm a "} <strong>DevOps and Software Engineer</strong> {"specializing in automation and eliminating development friction. "}
                {"I transform complex challenges into streamlined solutions that empower teams to innovate and deliver faster."}
              </p>
              <p className="text-gray-600">
                {"Here's a snapshot of my skills and experience. Feel free to explore my work and get in touch!"}
              </p>
              {/* Skills */}
              <div className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                  {Array.from(skills.entries()).map(([category, categorySkills], index) => (
                  <div key={category} className={index > 0 ? "border-l border-gray-300 pl-2" : ""}>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  ))}
                </div>
              </div>
              {/* Get In Touch Button */}
              <div className="mt-6 flex justify-center">
                <a href={personal_email} className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience & Projects</h2>
          {/* Pills with Counters of various Industry Projects */}
          <div className="mb-8 flex flex-wrap gap-3">
            {Array.from(project_types_counter.entries()).map(([type, projects]) => (
                <div
                  key={type}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium flex items-center gap-2 relative group"
                >
                  <span>{type}</span>
                  <span className="bg-blue-600 text-white rounded-full px-2 py-0.5 text-xs font-semibold">
                    {projects.length}
                  </span>
                  <div className="absolute hidden group-hover:block bg-gray-900 text-white text-xs rounded-md p-2 bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-10">
                    <ul className="text-left space-y-1">
                      {projects.map((project) => (
                        <li key={project}>• {project}</li>
                      ))}
                    </ul>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
            ))}
          </div>

          {/* Experience Cards */}
          <div className="flex flex-col space-y-6">
            {experienceProjects
              .sort((a, b) => {
              const dateA = a.end_date ? new Date(a.end_date).getTime() : new Date().getTime();
              const dateB = b.end_date ? new Date(b.end_date).getTime() : new Date().getTime();
              return dateB - dateA;
              })
              .map((experience: Experience) => (
              <div key={experience.company} className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                    {experience.icon_logo && (
                      <div className="relative h-8 w-8 shrink-0">
                        <Image
                          src={experience.icon_logo}
                          alt={`${experience.company} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    <h3 className="text-2xl font-semibold text-gray-900">{experience.company}</h3>
                    </div>
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(experience.start_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} -{' '}
                    {experience.end_date ? new Date(experience.end_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present'}
                  </p>
                  {experience.description && (
                    <p className="text-gray-600 mb-4">{experience.description}</p>
                  )}
                </div>
                
                {experience.projects && experience.projects.length > 0 && (
                  <div className="space-y-4 mt-6">
                    {experience.projects
                    .sort((a, b) => {
                      const getLatestJobDate = (project: Project) => {
                        if (!project.jobs || project.jobs.length === 0) return 0;
                        return Math.max(...project.jobs.map(job => 
                        job.end_date ? new Date(job.end_date).getTime() : new Date().getTime()
                        ));
                      };
                      return getLatestJobDate(b) - getLatestJobDate(a);
                    })
                    .map((project: Project, index: number) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-4">
                      <a
                      href={project.href}
                      className="block hover:bg-gray-50 transition-colors duration-300 py-2"
                      >
                        <h3 className="text-xs font-bold text-gray-700">{project.type}</h3>
                        <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                        {project.description && (
                          <p className="text-gray-700 mb-3">{project.description}</p>
                        )}
                        {project.jobs && project.jobs.length > 0 && (
                          <div className="mt-4 space-y-3 ml-4">
                          {project.jobs.map((job: Job, jobIdx: number) => (
                            <div key={jobIdx} className="border-l-2 border-gray-300 pl-3 py-1">
                              <h5 className="text-md font-semibold text-gray-800">{job.title}</h5>
                                <p className="text-xs text-gray-500 mb-1">
                                  {new Date(job.start_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} -{' '}
                                  {job.end_date ? new Date(job.end_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present'}
                                </p>
                                <p className="text-sm text-gray-700 mb-2">{job.description}</p>
                                {job.responsibilities && job.responsibilities.length > 0 && (
                                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                  {job.responsibilities.map((responsibility, respIdx) => (
                                    <li key={respIdx}>{responsibility}</li>
                                  ))}
                                  </ul>
                                )}
                            </div>
                          ))}
                          </div>
                        )}
                        <span className="text-blue-600 font-medium text-sm mt-2 inline-block">Learn more →</span>
                      </a>
                    </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!"}
          </p>
          <a
            href={personal_email}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Contact Me
          </a>
        </section>
      </div>
    </main>
  );
}
