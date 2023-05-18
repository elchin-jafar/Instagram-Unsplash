import styles from './Header.module.css';
import avatar from '../assets/avatar.jpg';
import { useNavigate } from 'react-router-dom';

function NewHeader() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/feed');
  }
  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.logo} onClick={handleClick}>
          <a className={styles['no-underline']} href="#">
            Instagram
          </a>
        </div>
        <div className={styles['navigation-search-container']}>
          <i className={styles['fa fa-search']}></i>
          <input
            className={styles['search-field']}
            type="text"
            placeholder="Search"
          />
          <div className={styles['search-container']}>
            <div className={styles['search-container-box']}>
              <div className={styles['search-results']}></div>
            </div>
          </div>
        </div>

        <div className="ml-4 flex items-center">
          <button
            className="flex-shrink-0 p-1 border-transparent text-gray-700 rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
            aria-label="Notifications"
          >
            <svg
              onClick={handleClick}
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>

          <button
            className="flex-shrink-0 p-1 border-transparent text-gray-700 rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
            aria-label="Notifications"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
            </svg>
          </button>

          <button
            className="flex-shrink-0 p-1 border-transparent text-gray-700 rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
            aria-label="Notifications"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>

          <button
            className="flex-shrink-0 p-1 border-transparent text-gray-700 rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
            aria-label="Notifications"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          {/* <!-- Profile dropdown --> */}
          <div className={`ml-4 relative flex-shrink-0 ${styles.responsive}`}>
            <div>
              <button
                className="flex rounded-full border-gray-700 transition duration-150 ease-in-out"
                id="user-menu"
                aria-label="User menu"
                aria-haspopup="true"
              >
                <img className="h-8 w-8 rounded-full" src={avatar} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewHeader;
