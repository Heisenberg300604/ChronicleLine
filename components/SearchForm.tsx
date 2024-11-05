import React from 'react'
import { Search } from 'lucide-react';
import Form from 'next/form'
import SearchFormReset from './SearchFormReset';

const SearchForm = ({query}:{query?:string}) => {
    return (
        <div>
            <Form action='/' scroll={false} className="search-form max-w-2xl mx-auto relative" id='search-form'>
                <input
                    name='query'
                    defaultValue={query}
                    type="text"
                    placeholder="Search articles..."
                    className="w-full px-6 py-4 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-xl"
                />
                {query ?
                   <SearchFormReset/> : <button type='submit' className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-emerald-600 rounded-full hover:bg-emerald-700 transition-colors">
                   <Search className="w-6 h-6 text-white" />
               </button>
                }
                
            </Form>
        </div>
    )
}

export default SearchForm
