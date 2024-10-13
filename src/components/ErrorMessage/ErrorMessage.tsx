import React from 'react';
import css from './ErrorMessage.module.css'; 
interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => (
  <div className={css.errorMessage}>
    {error}
  </div>
);

export default ErrorMessage;