import { useState } from 'react';
import Header from '../components/Header';
import styles from './Profile.module.css';
import { useNavigate, useLoaderData } from 'react-router-dom';
import BasicModal from '../components/Modal';
import { useDispatch } from 'react-redux';
import { modalActions } from '../store/modal-slice';

export default function ProfilePage() {
  const [currentImg, setCurrentImg] = useState('');
  const dispatch = useDispatch();
  const response = useLoaderData();
  function handleImage(photo) {
    setCurrentImg(photo);
    dispatch(modalActions.open());
  }

  return (
    <>
      <div className="insta-clone">
        <Header />
        <BasicModal photo={currentImg} />
        {/* <!--body start--> */}
        {/* <!--profile data--> */}
        <div className="bg-gray-100 h-auto px-48">
          <div
            className={`flex md:flex-row-reverse flex-wrap ${styles.responsive}`}
          >
            <div className="w-full md:w-3/4 p-4 text-center">
              <div className={`${styles.onOneLine} text-left pl-4 pt-3`}>
                <span className="text-gray-700 text-2xl mr-2">
                  {response[0].user.first_name}
                </span>
              </div>

              <div className={`text-left pl-4 pt-3`}>
                <span className="text-base font-semibold text-gray-700 mr-2">
                  <b>{response[0].user.total_photos}</b> posts
                </span>
                <span className="text-base font-semibold text-gray-700 mr-2">
                  <b>{response[0].user.total_likes}</b> followers
                </span>
                <span className="text-base font-semibold text-gray-700">
                  <b>{response[0].user.total_collections}</b> following
                </span>
              </div>

              <div className="text-left pl-4 pt-3">
                <span className="text-lg font-bold text-gray-700 mr-2">
                  {response[0].user.name}
                </span>
              </div>

              <div className="text-left pl-4 pt-3">
                <p className="text-base font-medium text-blue-700 mr-2">
                  {response[0].user.bio}
                </p>
                <p className="text-base font-medium text-gray-700 mr-2">{`#${Object.values(
                  response[0].user.social
                )
                  .map(value => value)
                  .join(' ')}`}</p>
              </div>
            </div>

            <div className="w-full md:w-1/4 p-4 text-center">
              <div className="w-full relative md:w-3/4 text-center mt-8">
                <button
                  className="flex rounded-full"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                >
                  <img
                    className={`${styles.profilePhoto} w-28 rounded-full`}
                    src={response[0].user.profile_image.large}
                    alt="profilePhoto"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* <!--status show icon--> */}

          <hr className={`border-gray-500 mt-6 ${styles.responsive}`} />
          <hr
            className={`w-20 border-t-1 ml-64 border-gray-800 ${styles.responsive}`}
          />

          {/* <!--post icon and title--> */}
          <div
            className={`flex flex-row mt-4 justify-center mr-16 ${styles.responsive}`}
          >
            <div className="flex text-gray-700 text-center py-2 m-2 pr-5">
              <div className="flex">
                <button
                  className="border-transparent text-gray-800 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
                  aria-label="Notifications"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              <div className="flex ml-2 mt-1">
                <h3 className="text-sm font-bold text-gray-800 mr-2">POSTS</h3>
              </div>
            </div>

            <div className="flex text-gray-700 text-center py-2 m-2 pr-5">
              <div className="flex">
                <button
                  className="border-transparent text-gray-600 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
                  aria-label="Notifications"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              <div className="flex  ml-2 mt-1">
                <h3 className="text-sm font-medium text-gray-700 mr-2">IGTV</h3>
              </div>
            </div>

            <div className="flex text-gray-700 text-center py-2 m-2 pr-5">
              <div className="flex ">
                <button
                  className="border-transparent text-gray-600 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
                  aria-label="Notifications"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>
              <div className="flex  ml-2 mt-1">
                <h3 className="text-sm font-medium text-gray-700 mr-2">
                  SAVED
                </h3>
              </div>
            </div>

            <div className="flex text-gray-700 text-center py-2 m-2 pr-5">
              <div className="flex ">
                <button
                  className="border-transparent text-gray-600 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
                  aria-label="Notifications"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </button>
              </div>
              <div className="flex  ml-2 mt-1">
                <h3 className="text-sm font-medium text-gray-700 mr-2">
                  TAGGED
                </h3>
              </div>
            </div>
          </div>

          {/* <!--post images--> */}

          <div className={styles.gridContainer}>
            {response.map(data => (
              <div
                key={data.id}
                className={`${styles.gridPhotoWrapper}`}
                onClick={() => handleImage(data)}
              >
                <img
                  src={data.urls.small}
                  className={`${styles.gridItem} w-full h-full`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const profileLoader = async ({ params }) => {
  const { username } = params;
  const response = await fetch(
    `https://api.unsplash.com/users/${username}/photos/?per_page=30&client_id=ZRYIbgpUWEVo4o_1apdz5wxs4ujLhd18wIy8N1kXMa8`
  );

  // const response = await fetch(`https://api.unsplash.com/users/${username}`);
  // const json = await response.json();
  // log(json);
  return response;
};
