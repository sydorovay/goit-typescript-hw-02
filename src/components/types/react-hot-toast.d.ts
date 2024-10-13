declare module 'react-hot-toast' {
  export const toast: {
    error: (message: string) => void;
    success: (message: string) => void;
  };

  export const Toaster: React.FC<any>;
}