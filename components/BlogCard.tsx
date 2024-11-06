import React from 'react'
import { Clock, User } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';

export interface BlogCardProps {
    post: {
        _createdAt: string;
        views: number;
        _id: number;
        title: string;
        description: string;
        author: {
            _id: string | number;
            name: string;
        };
        readTime: string;
        image: string;
        category: string;
    };
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-emerald-100">
            <div className="relative h-64">
                <Link href={`/blog/${post._id}`}>
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </Link>
                <div className="absolute top-4 left-4">
                    <Link href={`/?query=${post.category.toLowerCase()}`}></Link>
                    <span className="px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-semibold">
                        {post.category}
                    </span>
                </div>
            </div>
            <div className="p-6">
                <Link href={`/blog/${post._id}`}>
                    <h3 className="text-xl font-bold text-emerald-950 mb-3 hover:text-emerald-700 transition-colors cursor-pointer">
                        {post.title}
                    </h3>
                    <p className="text-emerald-700 mb-4">
                        {post.description}
                    </p>
                </Link>
                <div className="flex items-center justify-between text-sm text-emerald-600">
                    <Link href={`/user/${post.author._id}`}>
                        <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            {post.author.name}
                        </div>
                    </Link>
                    <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2 text-emerald-600">{post.views} views</span>
                        <span className="text-emerald-600">{formatDate(post._createdAt)}</span>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default BlogCard
