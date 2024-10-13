import { useState, useEffect, useRef } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import css from './App.module.css';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { ImageType } from './components/types/types'; // Імпорт типу для зображення

const ACCESS_KEY = '6ExAHC6-du7tOAIV_7CaxGFdf31Pi8h-TkJXD2D6UvY';
const BASE_URL = 'https://api.unsplash.com';

const App: React.FC = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const lastImageRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (query) {
      fetchImages();
    }
  }, [query, page]);

  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}/search/photos`, {
        params: {
          query,
          page,
          per_page: 12,
          client_id: ACCESS_KEY,
        },
      });
      const data = response.data;
      setImages((prevImages) => [...prevImages, ...data.results]);
      setHasMore(page < data.total_pages);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
    setLoading(false);
  };

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
    setHasMore(true);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image: ImageType) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearch} />
      <Toaster />
      {error && <ErrorMessage error={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} lastImageRef={lastImageRef} />
      {loading && <Loader />}
      {!loading && images.length === 0 && query && (
        <p className={css.noImagesText}>No images available for loading</p>
      )}
      {images.length > 0 && !loading && hasMore && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      {images.length > 0 && !loading && !hasMore && (
        <p className={css.noImagesText}>No more images available for loading</p>
      )}
      {showModal && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default App;