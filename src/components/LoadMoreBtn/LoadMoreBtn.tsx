import React from 'react';
import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => (
  <button className={css.loadMoreBtn} onClick={onLoadMore}>
    Load More
  </button>
);

export default LoadMoreBtn;