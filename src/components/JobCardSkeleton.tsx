const JobCardSkeleton = () => {
  return (
    <div className="w-full border rounded border-gray-200 p-4 bg-[#FCFAEE]">
      <div className="my-3 flex items-start gap-x-4 w-full animate-pulse">
        <div className="flex mt-1 items-center gap-x-3">
          <div className="w-[70px] h-[50px] rounded-md bg-gray-300 shimmer"></div>
        </div>
        <div className="flex-1">
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2 shimmer"></div>
          <div className="flex items-center gap-x-2 text-[#696969]">
            <div className="flex items-center gap-x-2">
              <div className="w-[20px] h-[20px] bg-gray-300 rounded-full shimmer"></div>
              <div className="h-3 bg-gray-300 rounded w-24 shimmer"></div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="w-[20px] h-[20px] bg-gray-300 rounded-full shimmer"></div>
              <div className="h-3 bg-gray-300 rounded w-20 shimmer"></div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="w-[40px] h-[40px] bg-gray-300 rounded shimmer"></div>
              <div className="h-3 bg-gray-300 rounded w-16 shimmer"></div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="w-[20px] h-[20px] bg-gray-300 rounded-full shimmer"></div>
              <div className="h-3 bg-gray-300 rounded w-12 shimmer"></div>
            </div>
          </div>
          <div className="flex items-center gap-x-2 my-2">
            <div className="w-16 h-6 bg-gray-300 rounded-2xl shimmer"></div>
            <div className="w-16 h-6 bg-gray-300 rounded-2xl shimmer"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="h-3 bg-gray-300 rounded w-20 shimmer"></div>
      </div>
    </div>
  );
};

export default JobCardSkeleton;
