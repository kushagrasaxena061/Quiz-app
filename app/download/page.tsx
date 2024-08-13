import React from "react"
import Link from "next/link"

const Download = () => {
  return (
    <Link href="https://console.neon.tech/app/projects/divine-dream-66216156/branches/br-autumn-meadow-a15ce864/tables?database=quiz">
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex items-center justify-center w-full max-w-md p-4 ">
          <button className="px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Download result in excel(csv) - <span className="text-red-600 font-bold">ADMIN ONLY</span>
          </button>
        </div>

      </div>
    </Link>
  );
};

export default Download;
