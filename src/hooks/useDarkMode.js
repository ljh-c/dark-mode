import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [isDark, setIsDark] = useLocalStorage('prefer_dark', false);

  useEffect(() => {
    if (isDark) {
      console.log('Value in storage is dark!');
      document.body.classList.add('dark-mode');
    } else {
      console.log('Value in storage is not dark!')
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);

  return [isDark, setIsDark];
};

export default useDarkMode;