

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      
      <div className="container mx-auto p-6 ">
        <div className="flex flex-wrap -mx-4">
          {/* First div (full width on medium devices) */}
          <div className="w-full md:w-full lg:w-1/3 px-4 mb-4 lg:mb-0 bg-blue-600">
            <p className="text-center p-4">Full Width on Medium</p>
          </div>
          {/* Remaining divs (half width on medium devices) */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 bg-green-600">
            <p className="text-center p-4">Half Width on Medium</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 bg bg-pink-500">
            <p className="text-center p-4">Half Width on Medium</p>
          </div>
        </div>
      </div>
    </div>
  );
}
