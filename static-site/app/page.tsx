import { components } from "@/utils/markdown_components";
import {
  ProfileWorkExperienceData,
  ProfileWorkExperienceProjectJobData,
  ProjectWorkExperienceProjectData,
  readProfileData,
} from "@/utils/profile-data";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { FaEnvelope, FaGithub, FaGlobe, FaLink, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

class TimeSpan {
  years: number;
  months: number
  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  constructor(start: Date, end: Date) {
    let delta = Math.abs(end.getTime() - start.getTime()) / 1000;

    this.years = Math.floor(delta / 31536000);
    delta -= this.years * 31536000;

    this.months = Math.floor(delta / 2592000);
    delta -= this.months * 2592000;

    this.days = Math.floor(delta / 86400);
    delta -= this.days * 86400;

    this.hours = Math.floor(delta / 3600) % 24;
    delta -= this.hours * 3600;

    this.minutes = Math.floor(delta / 60) % 60;
    delta -= this.minutes * 60;

    this.seconds = Math.floor(delta % 60);
  }

  toString(): string {
    const parts: string[] = [];
    if (this.years > 0) parts.push(`${this.years} ${this.years === 1 ? "year" : "years"}`);
    if (this.months > 0) parts.push(`${this.months} ${this.months === 1 ? "month" : "months"}`);
    if (this.days > 0) parts.push(`${this.days} ${this.days === 1 ? "day" : "days"}`);
    if (this.hours > 0) parts.push(`${this.hours} ${this.hours === 1 ? "hour" : "hours"}`);
    if (this.minutes > 0) parts.push(`${this.minutes} ${this.minutes === 1 ? "minute" : "minutes"}`);
    if (this.seconds > 0) parts.push(`${this.seconds} ${this.seconds === 1 ? "second" : "seconds"}`);
    
    if (parts.length > 2) {
      return parts.slice(0, 2).join(", ");
    }
    
    return parts.join(", ");
  }
}

export default function Home() {
  const profileData = readProfileData();
  const skills = Object.keys(profileData.about_me.skills);
  const skillsGridCols: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 md:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-1 md:grid-cols-3 lg:grid-cols-6",
  };
  const bio_markdown: string = profileData.about_me.markdown.join("\n\n");
  const years_of_experience_companys: Record<string, TimeSpan> = {};
  
  const start_of_career = new Date(profileData.work_experience.reduce((earliest, experience) => {
    const experienceStartDate = new Date(experience.start_date);
    return experienceStartDate < earliest ? experienceStartDate : earliest;
  }, new Date()));

  const last_recorded_experience = new Date(profileData.work_experience.reduce((latest, experience) => {
    const experienceEndDate = experience.end_date ? new Date(experience.end_date) : new Date();
    return experienceEndDate > latest ? experienceEndDate : latest;
  }, new Date(0)));
  const total_years_of_experience = new TimeSpan(start_of_career, last_recorded_experience);
  profileData.work_experience.forEach((experience: ProfileWorkExperienceData) => {
    const startDate = new Date(experience.start_date);
    const endDate = experience.end_date ? new Date(experience.end_date) : new Date();
    const timeSpan = new TimeSpan(startDate, endDate);
    years_of_experience_companys[experience.company] = timeSpan;
  });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="relative h-48 w-48 md:h-80 md:w-80 mx-auto rounded-full overflow-hidden">
            <Image
              src="/profile/20250802_084532.jpg"
              alt="Brandon Smith - Profile Picture"
              fill
              draggable={false}
              className="object-cover object-[60%_30%]"
            />
          </div>
          <div className="md:col-span-2">
            <div>
              <MDXRemote source={bio_markdown} components={components} />
            </div>
            {/* Skills */}
            <div className="mt-6">
              <div
                className={
                  `grid gap-2 ` +
                  (skillsGridCols[skills.length] || "grid-cols-1")
                }
              >
                {Object.entries(profileData.about_me.skills).map(
                  ([category, categorySkills], index) => (
                    <div
                      key={category}
                      className={
                        index > 0 ? "border-l border-gray-300 pl-2" : ""
                      }
                    >
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">
                        {category}
                      </h3>
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
                  )
                )}
              </div>
            </div>

            {/* Socials */}
            <div className="mt-6 flex flex-wrap gap-3">
              {Object.entries(profileData.about_me.socials).map(([key, value]) => {
                const getIcon = () => {
                  const iconClass = "text-xl";
                  switch (key.toLowerCase()) {
                    case 'github':
                      return <FaGithub className={iconClass} />;
                    case 'linkedin':
                      return <FaLinkedin className={iconClass} />;
                    case 'twitter':
                    case 'x':
                      return <FaXTwitter className={iconClass} />;
                    case 'email':
                    case 'mailto':
                      return <FaEnvelope className={iconClass} />;
                    case 'website':
                      return <FaGlobe className={iconClass} />;
                    default:
                      return <FaLink className={iconClass} />;
                  }
                };

                const formatLabel = (key: string) => {
                  switch (key.toLowerCase()) {
                    case 'mailto':
                      return 'Contact Me';
                    default:
                      return key.charAt(0).toUpperCase() + key.slice(1);
                  }
                };

                return (
                  <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                  >
                  {getIcon()}
                  <span>{formatLabel(key)}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Experience & Projects
        </h2>
        {/* Total Years of Experience */}
        <div className="mb-6 text-gray-700">
          <p className="text-lg">
            Total Years of Experience:{" "}
            <span className="font-semibold">
              {total_years_of_experience.toString()}
            </span>
          </p>
        </div>
        {/* Pills with Counters of various Industry Projects */}
        <div className="mb-8 flex flex-wrap gap-3">
          {Object.entries(profileData.project_types_counter).map(
            ([type, projects]) => (
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
            )
          )}
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col space-y-6">
          {profileData.work_experience
            .sort((a, b) => {
              const dateA = a.end_date
                ? new Date(a.end_date).getTime()
                : new Date().getTime();
              const dateB = b.end_date
                ? new Date(b.end_date).getTime()
                : new Date().getTime();
              return dateB - dateA;
            })
            .map((experience: ProfileWorkExperienceData) => (
              <div
                key={experience.company}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    {experience.icon_logo && (
                      <div className="relative h-15 w-15 shrink-0">
                        <Image
                          src={experience.icon_logo}
                          alt={`${experience.company} logo`}
                          fill
                          draggable={false}
                          className="object-contain"
                        />
                      </div>
                    )}
                    {experience.href ? (
                      <a
                        href={experience.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        <h3 className="text-2xl font-semibold text-gray-900">
                          {experience.company}
                        </h3>
                      </a>
                    ) : (
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {experience.company}
                      </h3>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(experience.start_date).toLocaleDateString(
                      "en-US",
                      { month: "short", year: "numeric" }
                    )}{" "}
                    -{" "}
                    {experience.end_date
                      ? new Date(experience.end_date).toLocaleDateString(
                          "en-US",
                          { month: "short", year: "numeric" }
                        )
                      : "Present"}
                      {" "}
                      ({years_of_experience_companys[experience.company].toString()})
                  </p>
                  {experience.description && (
                    <p className="text-gray-600 mb-4">
                      {experience.description}
                    </p>
                  )}
                </div>

                {experience.projects && experience.projects.length > 0 && (
                  <div className="space-y-4 mt-6">
                    {experience.projects
                      .sort((a, b) => {
                        const getLatestJobDate = (
                          project: ProjectWorkExperienceProjectData
                        ) => {
                          if (!project.jobs || project.jobs.length === 0)
                            return 0;
                          return Math.max(
                            ...project.jobs.map(
                              (job: ProfileWorkExperienceProjectJobData) =>
                                job.end_date
                                  ? new Date(job.end_date).getTime()
                                  : new Date().getTime()
                            )
                          );
                        };
                        return getLatestJobDate(b) - getLatestJobDate(a);
                      })
                      .map((project, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-blue-600 pl-4"
                        >
                          <a
                            href={project.href}
                            className="block hover:bg-gray-50 transition-colors duration-300 py-2"
                          >
                            <h3 className="text-xs font-bold text-gray-700">
                              {project.type}
                            </h3>
                            <h4 className="text-lg font-semibold text-gray-900">
                              {project.name}
                            </h4>
                            {project.description && (
                              <p className="text-gray-700 mb-3">
                                {project.description}
                              </p>
                            )}
                            {/* Jobs within Project */}
                            {project.jobs && project.jobs.length > 0 && (
                              <div className="mt-4 space-y-3 ml-4">
                                {project.jobs.map((job, jobIdx) => (
                                  <div
                                    key={jobIdx}
                                    className="border-l-2 border-gray-300 pl-3 py-1"
                                  >
                                    <h5 className="text-md font-semibold text-gray-800">
                                      {job.title}
                                    </h5>
                                    <p className="text-xs text-gray-500 mb-1">
                                      {new Date(
                                        job.start_date
                                      ).toLocaleDateString("en-US", {
                                        month: "short",
                                        year: "numeric",
                                      })}{" "}
                                      -{" "}
                                      {job.end_date
                                        ? new Date(
                                            job.end_date
                                          ).toLocaleDateString("en-US", {
                                            month: "short",
                                            year: "numeric",
                                          })
                                        : "Present"} ({new TimeSpan(new Date(job.start_date), job.end_date ? new Date(job.end_date) : new Date()).toString()})
                                    </p>
                                    <p className="text-sm text-gray-700 mb-2">
                                      {job.description}
                                    </p>
                                    {job.responsibilities &&
                                      job.responsibilities.length > 0 && (
                                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                          {job.responsibilities.map(
                                            (responsibility, respIdx) => (
                                              <li key={respIdx}>
                                                {responsibility}
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      )}
                                  </div>
                                ))}
                              </div>
                            )}
                            <span className="text-blue-600 font-medium text-sm mt-2 inline-block">
                              Learn more →
                            </span>
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
      <section
        id="contact"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
        <p className="text-gray-600 mb-4">
          {
            "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!"
          }
        </p>
        <a
          href={profileData.about_me.socials.mailto}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Contact Me
        </a>
      </section>
    </main>
  );
}
