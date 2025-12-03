import { isProd } from "@/next.config";
import fs from "fs";
import path from "path";

export function getProfileInfoPath(): string {
    if (!isProd) {
        return path.join(process.cwd(), "../", "profile.jsonc");
    } else {
        return path.join(process.cwd(), ".pages", "profile.jsonc");
    }
}

export declare type SocialType = 'github' | 'linkedin' | 'twitter' | 'facebook' | 'instagram' | 'website' | 'mailto';
export declare type EmployementType = 'full-time' | 'part-time' | 'contract' | 'volunteer';
export declare type ProjectType = 'team' | 'project';

export interface ProfileAboutMeData {
    profile_picture: string;
    markdown: string[];
    socials: Record<SocialType, string>;
    skills: Record<string, string[]>;
}

export interface ProfileWorkExperienceData {
    company: string;
    description: string;
    href: string;
    start_date: string;
    end_date?: string;
    icon_logo?: string;
    projects: ProjectWorkExperienceProjectData[];
}

export interface ProjectWorkExperienceProjectData {
    name: string;
    type: ProjectType;
    href?: string;
    start_date: string;
    end_date?: string;
    description: string[];
    jobs: ProfileWorkExperienceProjectJobData[];
}

export interface ProfileWorkExperienceProjectJobData {
    title: string;
    description: string;
    location: string;
    start_date: string;
    end_date?: string;
    employment_type?: EmployementType;
    responsibilities: string[];
}

export interface ProfileData {
    about_me: ProfileAboutMeData;
    project_types_counter: Record<string, string[]>;
    work_experience: ProfileWorkExperienceData[];
}

export function readProfileData(): ProfileData {
    const profilePath = getProfileInfoPath();
    const fileContents = fs.readFileSync(profilePath, "utf-8");
    const data: ProfileData = JSON.parse(fileContents);
    return data;
}