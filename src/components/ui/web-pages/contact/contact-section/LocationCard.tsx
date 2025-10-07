export default function LocationCard() {
  return (
    <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl shadow-lg p-4 flex items-start gap-3">
      {/* Orange Location Icon */}
      <div className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      </div>

      {/* Location Details */}
      <div className="flex-1">
        <h5 className="text-orange-500 font-semibold text-base mb-1">
          Betopia Limited
        </h5>
        <p className="text-gray-600 text-sm leading-relaxed">
          C/A, Ak Khandaker Road Kaderia Tower J-28/8-B, Mohakhali, Dhaka 1213
        </p>
      </div>
    </div>
  );
}
