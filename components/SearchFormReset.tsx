"use client"

import { ResetIcon } from '@radix-ui/react-icons'
import React from 'react'

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector(".search-form") as HTMLFormElement;
        if (form) form.reset();
    }
    return (
        <button type='reset' onClick={reset} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-emerald-600 rounded-full hover:bg-emerald-700 transition-colors">
            <ResetIcon className="w-6 h-6 text-white" />
        </button>
    )
}

export default SearchFormReset
