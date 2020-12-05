import { useEffect, useState } from 'react';

const useAddToHomescreenPrompt = () => {
  const [prompt, setPrompt] = useState(null);

  const promptToInstall = () => {
    if (prompt) {
      return prompt.prompt();
    }
    return Promise.reject(
      new Error(
        'Tried installing before browser sent "beforeinstallprompt" event'
      )
    );
  };

  useEffect(() => {
    console.log('promp');
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('eee');
      e.preventDefault();
      setPrompt(e);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', (e) => {
        console.log('eee');
        e.preventDefault();
        setPrompt(e);
      });
    };
  }, []);

  return [prompt, promptToInstall];
};

export default useAddToHomescreenPrompt;
