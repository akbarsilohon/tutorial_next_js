import { notFound } from 'next/navigation';
import { getPostsByPage } from '@/libs/posts';
import BlogListClient from '@/components/BlogListClient';
import '@/style/blog.css';

export async function generateMetadata() {
    return {
        title: 'Next Js | Tutorial Next Js dari Nol Hingga Mahir',
        description: 'Belajar Next Js dari nol hingga mahir di KodingLog.com.',
        alternates: {
            canonical: '/',
        },
    };
}

export default function Home(){
    const initialPosts = getPostsByPage(10, 0);

    return (
        <section className="blogPostWith_Sidebar">
            {initialPosts && initialPosts.length > 0 ? (
                <BlogListClient initialPosts={initialPosts} />
            ) : (
                <p>Empty.</p>
            )}
            <div className="blogSidebar">
                {/* <div className="blogAdsStiky">
                    Advertisment
                </div> */}
            </div>
        </section>
    );
}