import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const usePageTracking = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const trackingId = import.meta.env.REACT_APP_GA_TRACKING_ID;
    if (trackingId) {
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      (window as any).gtag('send', 'page_view', {
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  }, [initialized, location]);
};

export default usePageTracking;
