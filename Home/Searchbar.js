'use client';
import { FiSearch } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const router = useRouter();

  const handlesearch = () => {
    router.push('/services');
  };

  return (
    <div className="bg-black px-4 py-4 flex justify-center">
      <div className="w-full max-w-2xl flex items-center border border-gray-300 rounded-md bg-white overflow-hidden">
        <input
          type="text"
          placeholder="Search for workouts..."
          className="w-full px-4 py-2 text-sm text-gray-800 focus:outline-none"
        />
        <button
          className="bg-[#FF4F5A] px-4 py-2 text-white"
          onClick={handlesearch}
        >
          <FiSearch size={18} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
