import { useState, useEffect } from 'react';

// Constants
const INITIAL_TIME = {
  hours: 23,
  minutes: 45,
  seconds: 34
};

const INITIAL_STUDENTS_COUNT = 1247;
const STUDENT_INCREMENT_INTERVAL = 8000;
const TIMER_INTERVAL = 1000;

const INTERSECTION_OBSERVER_OPTIONS = {
  threshold: 0.3,
  rootMargin: '0px 0px -20% 0px'
};

export const useCountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);

  useEffect(() => {
    const savedTime = localStorage.getItem('countdownTime');
    if (savedTime) {
      const parsedTime = JSON.parse(savedTime);
      setTimeLeft(parsedTime);
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let newTime;
        if (prev.seconds > 0) {
          newTime = { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          newTime = { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          newTime = { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          newTime = prev;
        }

        localStorage.setItem('countdownTime', JSON.stringify(newTime));
        return newTime;
      });
    }, TIMER_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
};

export const useStudentsCounter = () => {
  const [studentsCount, setStudentsCount] = useState(INITIAL_STUDENTS_COUNT);

  useEffect(() => {
    const studentTimer = setInterval(() => {
      setStudentsCount(prev => prev + Math.floor(Math.random() * 3));
    }, STUDENT_INCREMENT_INTERVAL);

    return () => clearInterval(studentTimer);
  }, []);

  return studentsCount;
};

export const useVideoIntersection = (ref: React.RefObject<HTMLElement | null>) => {
  const [isVideoInView, setIsVideoInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVideoInView(entry.isIntersecting);
        });
      },
      INTERSECTION_OBSERVER_OPTIONS
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return isVideoInView;
};
