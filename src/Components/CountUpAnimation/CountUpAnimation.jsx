'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function CountUpAnimation({
  start = 0,
  end = 0,
  duration = 5,
  suffix = '',
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div ref={ref}>
      {inView && (
        <CountUp start={start} end={end} duration={duration}>
          {({ countUpRef }) => (
            <p className="text-3xl font-bold text-gray-900">
              <span ref={countUpRef}></span>
              {suffix}
            </p>
          )}
        </CountUp>
      )}
    </div>
  );
}
