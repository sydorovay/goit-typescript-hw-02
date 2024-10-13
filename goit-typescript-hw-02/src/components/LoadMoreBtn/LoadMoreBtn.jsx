import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div className={css.loadMore}>
      <button className={css.button} onClick={onLoadMore}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;