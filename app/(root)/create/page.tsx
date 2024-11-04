"use client"

import React, { useState } from 'react';
import { ImagePlus, Link2, FileText, Tag } from 'lucide-react';

const page = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        mediaUrl: '',
        category: '',
        content: ''
      });
    
      const categories = [
        'Technology',
        'Lifestyle',
        'Productivity',
        'Culture',
        'Travel',
        'Food',
        'Health',
        'Other'
      ];
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
      };
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      return (
        <div className="min-h-screen bg-emerald-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
              <h1 className="text-4xl font-bold text-emerald-950 mb-8 text-center">Create Your Story</h1>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title Input */}
                <div className="space-y-2">
                  <label className="flex items-center text-emerald-950 font-semibold">
                    <FileText className="w-5 h-5 mr-2" />
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter your blog title"
                    className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    required
                  />
                </div>
    
                {/* Description Input */}
                <div className="space-y-2">
                  <label className="flex items-center text-emerald-950 font-semibold">
                    <FileText className="w-5 h-5 mr-2" />
                    Short Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Brief description of your blog"
                    className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    required
                  />
                </div>
    
                {/* Media URL Input */}
                <div className="space-y-2">
                  <label className="flex items-center text-emerald-950 font-semibold">
                    <ImagePlus className="w-5 h-5 mr-2" />
                    Image/Video URL
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      name="mediaUrl"
                      value={formData.mediaUrl}
                      onChange={handleChange}
                      placeholder="Enter media URL"
                      className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white pl-10"
                    />
                    <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-600" />
                  </div>
                </div>
    
                {/* Category Select */}
                <div className="space-y-2">
                  <label className="flex items-center text-emerald-950 font-semibold">
                    <Tag className="w-5 h-5 mr-2" />
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category.toLowerCase()}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
    
                {/* Blog Content */}
                <div className="space-y-2">
                  <label className="flex items-center text-emerald-950 font-semibold">
                    <FileText className="w-5 h-5 mr-2" />
                    Write Your Blog
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Start writing your blog..."
                    className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white min-h-[300px]"
                    required
                  />
                </div>
    
                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors transform hover:scale-105 duration-200 flex items-center"
                  >
                    Publish Story
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
}

export default page
