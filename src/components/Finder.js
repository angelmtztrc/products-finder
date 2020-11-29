import PropTypes from 'prop-types';

const Finder = ({ keyword, setKeyword, status, setStatus }) => {
  // handle the data of the select
  const handleSelect = e => {
    setStatus(e.target.value);
  };

  // handle the data of the input
  const handleChange = e => {
    setKeyword(e.target.value);
  };

  return (
    <div className="flex justify-between mt-10">
      <div>
        <label className="block text-white text-sm font-bold uppercase">
          Used/New
        </label>
        <div className="relative">
          <select
            value={status}
            onChange={handleSelect}
            className="pr-8 px-4 py-1 rounded-lg focus:outline-none appearance-none ring-2"
          >
            <option value="">-- CHOOSE --</option>
            <option value="used">USED</option>
            <option value="new">NEW</option>
          </select>
          <span className="absolute right-0 top-0 mt-1">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
      <div>
        <label className="block text-white text-sm font-bold uppercase">
          Search for a product
        </label>
        <input
          value={keyword}
          onChange={handleChange}
          className="px-4 py-1 rounded-lg focus:outline-none appearance-none ring-2"
        />
      </div>
    </div>
  );
};

Finder.propTypes = {
  keyword: PropTypes.string.isRequired,
  setKeyword: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired
};

export default Finder;
