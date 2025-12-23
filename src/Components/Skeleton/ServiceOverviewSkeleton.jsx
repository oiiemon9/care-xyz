import React from 'react';

export default function ServiceOverviewSkeleton() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-white border border-gray-300 p-8 rounded-3xl animate-pulse">
      {/* Image Skeleton */}
      <div className="relative h-[350px] rounded-3xl overflow-hidden bg-gray-200">
        <div className="absolute bottom-10 left-10 space-y-3">
          <div className="h-8 w-48 bg-gray-300 rounded"></div>
          <div className="h-5 w-36 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div>
        {/* Header */}
        <div className="flex items-center gap-5 mb-8">
          <div className="w-20 h-20 bg-gray-200 rounded-2xl"></div>
          <div className="space-y-3">
            <div className="h-7 w-48 bg-gray-300 rounded"></div>
            <div className="h-5 w-36 bg-gray-300 rounded"></div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-3 mb-8">
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-11/12 bg-gray-200 rounded"></div>
          <div className="h-4 w-10/12 bg-gray-200 rounded"></div>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-5">
          {[1, 2, 3].map((_, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="h-12 w-40 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}
