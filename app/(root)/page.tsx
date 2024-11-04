import Newsletter from '@/components/Newsletter';
import { Search, ChevronRight, Clock, User, BookOpen } from 'lucide-react';

export default function Home() {
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

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search articles..."
                // value={searchQuery}
                // onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-xl"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-emerald-600 rounded-full hover:bg-emerald-700 transition-colors">
                <Search className="w-6 h-6 text-white" />
              </button>
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
