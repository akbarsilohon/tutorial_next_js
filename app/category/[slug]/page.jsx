import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getPostsByCategory } from '@/libs/posts';
import BlogListClient from '@/components/BlogListClient';
import '@/style/blog.css';

export async function generateMetadata({ params }){
    const resolvedParams = await params;
    const slug = decodeURIComponent(resolvedParams.slug);

    const formattedCategory = slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : 'Category';

    return {
        title: `${formattedCategory.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Next Js`,
        description: `read all article about ${formattedCategory} on Next Js.`,
        alternates: {
            canonical: `/category/${resolvedParams.slug}`,
        },
    }
}


export default function CategoryPage({ params }) {
    return (
        <section className="blogPostWith_Sidebar">
            <Suspense fallback={<CategorySuspense />}>
                <CategoryContent params={params} />
            </Suspense>

            <div className="blogSidebar">
                {/* <div className="blogAdsStiky">
                    Your Adsense
                </div> */}
            </div>
        </section>
    );
}

async function CategoryContent({ params }) {
    const resolvedParams = await params;
    const slug = decodeURIComponent(resolvedParams.slug);
    const initialPosts = getPostsByCategory(slug, 10, 0);
    if (!initialPosts || initialPosts.length === 0) {
        notFound();
    }

    return (
        <BlogListClient
            initialPosts={initialPosts}
            category={slug}
        />
    );
}


async function CategorySuspense() {
    return (
        <div className="blogListContainer">
            <div className="blog_header">
                <span className="cat_suspende suspande_heading"></span>
            </div>

            <div className="blogs_art">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="blogCard">
                        {/* Skeleton artikel */}
                    </div>
                ))}
            </div>
        </div>
    );
}