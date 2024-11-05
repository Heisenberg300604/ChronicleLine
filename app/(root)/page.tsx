import BlogCard from '@/components/BlogCard';
import Newsletter from '@/components/Newsletter';
import SearchForm from '@/components/SearchForm';
import { Clock, User } from 'lucide-react';

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {

  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date().toISOString(),
      views: 55,
      _id: 1,
      title: "The Future of AI in Content Creation",
      description: "Exploring how artificial intelligence is revolutionizing the way we create and consume content...",
      author: { _id: 1, name: "Alex Rivers" },
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      category: "Technology"
    },
    {
      _createdAt: new Date().toISOString(),
      views: 52,
      _id: 2,
      title: "Sustainable Living in 2024",
      description: "Practical tips and insights for adopting an eco-friendly lifestyle in the modern world...",
      author: { _id: 2, name: "Sarah Chen" },
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?auto=format&fit=crop&q=80&w=800",
      category: "Lifestyle"
    },
    {
      _createdAt: new Date().toISOString(),
      views: 62,
      _id: 3,
      title: "Digital Minimalism",
      description: "How to maintain focus and productivity in an increasingly connected world...",
      author: { _id: 3, name: "Mark Thompson" },
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Productivity"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        <section className="relative h-[80vh] bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Chronicle Line
            </h1>
            <p className="text-xl md:text-2xl text-green-50 mb-12 max-w-2xl mx-auto">
              Where Generation Z finds their voice. Discover stories that shape tomorrow.
            </p>
            <SearchForm query={query} />
          </div>
        </section>
        {/* AlL BLOG POSTS WILL BE SHOWN HERE ! */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-emerald-950 mb-12 text-center">
              {query ? `Search results for "${query}"` : `Latest Stories`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        </section>

        <section id='about' className="py-20 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-emerald-950 mb-6">
                The Voice of Tomorrow
              </h2>
              <p className="text-xl text-emerald-800 mb-2 leading-relaxed">
                Chronicle Line is more than just a blog—it's a movement. We're dedicated
                to amplifying the voices of the latest generation, sharing cutting-edge
                insights, and fostering meaningful conversations about the future.
              </p>
              <div className="space-y-4 text-center">
                <p className="text-xl text-emerald-800 leading-relaxed">
                  We explore a range of topics from technology innovations and social
                  justice, to environmental awareness and cultural shifts. Through our
                  diverse community of writers and thought leaders, we aim to make
                  complex issues accessible, and inspire action and understanding among
                  readers.
                </p>
                <p className="text-xl text-emerald-800 leading-relaxed">
                  Our mission is to create a platform that encourages open dialogue and
                  nurtures new ideas, bridging the gap between generations and
                  fostering a shared vision for a better tomorrow.
                </p>
                <p className="text-xl text-emerald-800 leading-relaxed">
                  Join us in exploring the stories, experiences, and innovations that
                  define this pivotal era. Together, let's empower a new wave of
                  changemakers.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Newsletter />
      </div>
    </>
  );
}
