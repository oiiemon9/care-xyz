'use client';
import React from 'react';

import Lottie from 'lottie-react';
import loadingAnimation from '/loadingAnimation.json';

export default function LoaderAnimation() {
  return (
    <div className="flex justify-center items-center py-10">
      <Lottie
        className="h-20 w-20"
        animationData={loadingAnimation}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}
