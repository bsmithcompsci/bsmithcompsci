import { getAllBlogFilesNormalized, getBlogFile } from "@/utils/markdown";
import { notFound } from "next/navigation";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { components } from "@/utils/markdown_components";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

interface PageProps 
{
    params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
    const markdownFiles = getAllBlogFilesNormalized();

    return markdownFiles.map(file => {
        const segments = file.replace(/\.md$/, "").split(path.sep);
        return { slug: segments };
    });
}

export default async function BlogPage({ params }: PageProps) {
    const { slug } = await params;

    const fullSlug = slug.join('/');
    
    // Read the blog file to ensure it exists
    const filePath = getBlogFile(fullSlug);
    if (filePath === null) {
        // If the file does not exist, trigger a 404
        notFound();
        return; // Not possible, but makes the IDE happy.
    }

    const fileContents = fs.readFileSync(filePath, "utf-8");

    // You can parse the markdown content here and render it as needed
    const { content, data } = matter(fileContents, {});
    
    return (
        <main className="min-h-screen relative">
            {/* Background Image */}
            {data.background_image && (
                <div className="fixed inset-0 -z-10 w-screen h-screen">
                    <Image 
                        src={data.background_image}
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>
            )}
                        
            <article className={"max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8" + (data.background_image ? " text-gray-200" : "")}>
                {/* Banner Image */}
                {data.banner_image && (
                    <div className="mb-8 -mx-4 sm:mx-0 rounded-lg overflow-hidden">
                    <Image 
                        src={data.banner_image} 
                        alt="Banner" 
                        className="w-full h-64 sm:h-96 object-cover"
                        width={1600}
                        height={600}
                    />
                    </div>
                )}
                
                {/* Article Content */}
                <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                    <MDXRemote source={content} components={components} />
                </div>
            </article>
        </main>
    );
}