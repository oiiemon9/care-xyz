'use client';
import React from 'react';

import Lottie from 'lottie-react';

export default function LoaderAnimation() {
  return (
    <div className="flex justify-center items-center py-10">
      <Lottie
        className="h-20 w-20"
        animationData={require('../../../public/loadingAnimation.json')}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}
