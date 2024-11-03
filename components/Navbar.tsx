import { auth, signOut } from '@/auth';
import React from 'react';
import Link from 'next/link';

const Navbar = async () => {
    const session = await auth();
    return (
        <header className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <h1 className="text-2xl font-bold text-teal-600">
                            ChronicleLine
                        </h1>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link href="/">
                                        <span className="text-gray-500 transition hover:text-gray-500/75 hover:underline">Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <span className="text-gray-500 transition hover:text-gray-500/75 hover:underline">About</span>
                                    </Link>
                                </li>
                                {session && session?.user ? (
                                    <li>
                                    <Link href="/create">
                                        <span className="text-gray-500 transition hover:text-gray-500/75 hover:underline">Create</span>
                                    </Link>
                                </li>
                                ):<></>}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            {session && session?.user ? (
                                <form
                                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                action={async()=>{
                                    "use server"

                                    await signOut({redirectTo:"/"});
                                }}
                            >
                                <button type='submit'>Logout</button>
                            </form>
                            ):(
                                <Link
                                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                href="/login"
                            >
                                Login
                            </Link>
                            )}
                        </div>

                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
