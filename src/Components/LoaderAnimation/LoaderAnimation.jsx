'use client';
import React from 'react';

import Lottie from 'lottie-react';
import loadingAnimation from '/public/loadingAnimation.json';

export default function LoaderAnimation() {
  return (
    <div>
      <p className="text-4xl">loading......</p>
      <Lottie animationData={loadingAnimation} loop={true} autoplay={true} />
    </div>
  );
}
