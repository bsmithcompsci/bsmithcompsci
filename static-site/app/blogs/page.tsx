import { getAllMarkdownFiles, getBlogsPath } from "@/utils/markdown";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export function getBlogCategories() : string[] {
    const blogPath = getBlogsPath();
    const categories = new Set<string>();
    const items = fs.readdirSync(blogPath);

    for (const item of items) {
        const fullPath = path.join(blogPath, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            categories.add(item);
        }
    }

    return Array.from(categories);
}

export function getBlogsWithCategories(strip: boolean = true) : Map<string, string[]> {
    const blogPath = getBlogsPath();
    const categoryMap = new Map<string, string[]>();

    // Walk through each directory, sub-directory collecting all the files.
    const items = getAllMarkdownFiles(blogPath);

    for (const item of items) {
        const segments = item.split(path.sep);
        if (segments.length > 1) {
            const category = segments[0];
            const blogName = strip ? segments.slice(1).join('/').replace(/\.md$/, '').replace(/(^|[\\\/])\d+_/g, '$1').replace(/[\\\/]index$/, '') : segments.slice(1).join('/');
            if (!categoryMap.has(category)) {
                categoryMap.set(category, []);
            }
            categoryMap.get(category)?.push(blogName);
        }
    }

    return categoryMap;
}

class BlogDisplay {
    constructor(
        public slug: string, 
        public slugSanitized: string, 
        public title: string, 
        public description: string, 
        public date: string, 
        public group?: string,
        public subgroup?: string
    ) { }
}

function createBlogDisplays(data: Map<string, string[]>): Map<string, BlogDisplay[]> {
    const displayMap = new Map<string, BlogDisplay[]>();

    data.forEach((blogs, category) => {
        const displays: BlogDisplay[] = blogs.map(slug => {
            const filePath = path.join(getBlogsPath(), category, slug);

            const fileContents = fs.readFileSync(filePath, "utf-8");
            const { data } = matter(fileContents, {});

            // Modify Date to be without .000Z
            if (typeof data.date === 'object' && data.date instanceof Date) {
                data.date = data.date.toISOString().replace('.000Z', '');
            }

            let group = undefined;
            let subgroup = undefined;
            switch (category) {
                case 'projects':
                    const segments = slug.split('/');
                    group = segments.length > 1 ? segments[0] : undefined;
                    subgroup = segments.length > 2 ? segments[1] : undefined;
                    break;
                case 'knowledge':
                    const parts = slug.split('/');
                    group = parts.length > 1 ? parts[0] : undefined;
                    subgroup = parts.length > 2 ? parts[1] : undefined;
                    break;
                default:
                    break;
                // Add more category-specific logic if needed
            }

            // Placeholder values; replace with actual metadata extraction if needed
            return new BlogDisplay(
                slug,
                slug.replace(/\.md$/, '').replace(/(^|[\\\/])\d+_/g, '$1').replace(/[\\\/]index$/, ''),
                data.title || slug.split('/').pop() || "Untitled",
                data.description || "This is a sample description for the blog post.",
                data.date,
                group,
                subgroup
            );
        });
        displayMap.set(category, displays);
    });

    // Sort each category's blogs by date descending
    displayMap.forEach((displays) => {
        displays.sort((a, b) => {
            if (a.date && b.date) {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            } else if (a.date) {
                return -1;
            } else if (b.date) {
                return 1;
            }
            return 0;
        });
    });

    return displayMap;
}

export default function BlogsPage() {
    const categories = getBlogsWithCategories(false);
    const blogDisplays = createBlogDisplays(categories);

    return (
        <main className="container mx-auto px-4 py-8 max-w-6xl">
            <h1 className="text-4xl font-bold text-center mb-12">Blogs</h1>
            
            {/* Categories Sections */}
            {Array.from(blogDisplays.keys()).map(category => (
            <section id={category} key={category} className="mb-12">
                <h4 className="text-2xl font-semibold mb-6 pb-3 border-b border-gray-300">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Group blogs by group and subgroup */}
                    {(() => {
                        const blogsInCategory = blogDisplays.get(category)?.filter(blog => blog.date) || [];
                        const grouped = new Map<string, Map<string | undefined, BlogDisplay[]>>();
                        
                        blogsInCategory.forEach(blog => {
                            const groupKey = blog.group || 'ungrouped';
                            if (!grouped.has(groupKey)) {
                                grouped.set(groupKey, new Map());
                            }
                            const subgroupMap = grouped.get(groupKey)!;
                            const subgroupKey = blog.subgroup;
                            if (!subgroupMap.has(subgroupKey)) {
                                subgroupMap.set(subgroupKey, []);
                            }
                            subgroupMap.get(subgroupKey)?.push(blog);
                        });

                        {/* Render grouped blogs */}
                        return Array.from(grouped.entries()).map(([groupKey, subgroupMap]) => (
                            <div key={groupKey} className="col-span-full">
                                {groupKey !== 'ungrouped' && (
                                    <h5 className="text-xl font-semibold mb-4 text-gray-700">
                                        {groupKey.charAt(0).toUpperCase() + groupKey.slice(1)}
                                    </h5>
                                )}
                                {/* Render subgroups */}
                                {Array.from(subgroupMap.entries()).map(([subgroupKey, groupBlogs]) => (
                                    <div key={subgroupKey || 'no-subgroup'} className="mb-8">
                                        {subgroupKey && Array.from(subgroupMap.keys()).indexOf(subgroupKey) > 0 && (
                                            <hr className="my-6 border-t border-gray-200" />
                                        )}
                                        {subgroupKey && (
                                            <h6 className="text-lg font-medium mb-3 text-gray-600">
                                                {
                                                    (() => {
                                                        const title = subgroupKey.replaceAll('_', ' ').replaceAll('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                                                        return title;
                                                    })()
                                                }
                                            </h6>
                                        )}
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {groupBlogs.map(blog => (
                                                <a 
                                                    key={blog.slug} 
                                                    href={`/blogs/${category}/${blog.slugSanitized}`}
                                                    className="col-span-full block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                                                >
                                                    <div className="flex gap-4">
                                                        <div className="shrink-0 w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                                                            <span className="text-2xl">📝</span>
                                                        </div>
                                                            
                                                        <div className="flex-1 min-w-0">
                                                            <h5 className="font-semibold text-lg line-clamp-1">
                                                                {blog.title}
                                                            </h5>
                                                            <p className="text-sm text-gray-500 mb-2">
                                                                {blog.date && (
                                                                    <span>Posted on {new Date(blog.date).toLocaleDateString()}</span>
                                                                ) || "Date not available"}
                                                            </p>
                                                            <p className="text-sm text-gray-700 line-clamp-2 mb-1">
                                                                {blog.description}
                                                            </p>
                                                            <span className="text-xs text-gray-400">Read more...</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ));
                    })()}
                </div>
            </section>
            ))}
        </main>
    );
}