import SignInWithGitHub from '@/components/signingithub';
import SignInWithGoogle from '@/components/signingoogle';
import React from 'react';

export default function LoginPagePreview() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-white shadow-md rounded-lg p-8">
        <div className="space-y-2 text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Welcome to ChronicleLines
          </h2>
          <p className="text-sm text-gray-600">
            Please sign in to continue
          </p>
        </div>
        <div className="space-y-6">
          <div className="flex flex-col gap-4">
            <SignInWithGoogle />
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>
            <SignInWithGitHub />
          </div>
        </div>
      </div>
    </div>
  );
}
