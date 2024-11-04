import { auth, signOut } from '@/auth';
import React from 'react';
import Link from 'next/link';

const Navbar = async () => {
    const session = await auth();
    return (
        <header className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-12">
                        <h1 className="text-2xl font-bold text-green-600">
                            ChronicleLine
                        </h1>
                    </div>

                    <nav aria-label="Global">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <Link href="/">
                                    <span className="text-gray-500 transition hover:text-gray-500/75 hover:underline">Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#about">
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

                    <div className="flex items-center gap-4">
                        <div className="flex gap-4">
                            {session && session?.user ? (
                                <form
                                    className="rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                    action={async()=>{
                                        "use server"
                                        await signOut({redirectTo:"/"});
                                    }}
                                >
                                    <button type='submit'>Logout</button>
                                </form>
                            ):(
                                <Link
                                    className="rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                    href="/login"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
