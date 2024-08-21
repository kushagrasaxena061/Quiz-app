"use client"
// components/AnimatedList.js
import React, { useState } from 'react';

const AnimatedList = ({ rounds, urls }: any) => {
    const [clicked, setClicked] = useState(Array(rounds.length).fill(false));

    const handleClick = (index: any) => {
        if (!clicked[index]) {
            const newClicked = [...clicked];
            newClicked[index] = true;
            setClicked(newClicked);

            window.location.assign(urls[index])
        }

    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
            {rounds.map((round: any, index: any) => (
                <div
                    key={index}
                    onClick={() => handleClick(index)}
                    className={`flex flex-col justify-between items-center p-4 w-48 h-48 
                      bg-gradient-to-br from-blue-50 to-blue-100 
                      border border-blue-200 rounded-lg shadow-lg 
                      transform transition-all duration-500 ease-in-out 
                      hover:scale-105 hover:shadow-xl cursor-pointer
                      ${clicked[index] ? 'opacity-50 cursor-not-allowed' : ''}`}
                    style={{
                        animationDelay: `${index * 0.2}s`,
                        animationFillMode: 'both',
                    }}
                >
                    <div className="text-lg font-semibold text-blue-800">Quiz {index + 1}</div>
                    <div className="mt-4 text-center text-gray-700">
                        <p>{clicked[index] ? 'Already Taken' : 'Test your knowledge'}</p>
                    </div>
                    <div
                        className={`mt-4 py-2 px-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white 
                        rounded-md shadow-lg transition-colors duration-300 
                        ${clicked[index] ? 'bg-gray-400 cursor-not-allowed' : 'hover:from-blue-500 hover:to-blue-700'}`}
                    >
                        {clicked[index] ? 'Completed' : 'Start'}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AnimatedList;



// "use client"
// import React, { useEffect, useState } from 'react';

// const AnimatedList = ({ rounds, urls }: any) => {
//     // Load initial state from localStorage
//     const [clicked, setClicked] = useState(() => {
//         const storedState = localStorage.getItem('clickedState');
//         return storedState ? JSON.parse(storedState) : Array(rounds.length).fill(false);
//     });

//     // Save the state to localStorage whenever it changes
//     useEffect(() => {
//         localStorage.setItem('clickedState', JSON.stringify(clicked));
//     }, [clicked]);

//     const handleClick = (index: any) => {
//         if (!clicked[index]) {
//             const newClicked = [...clicked];
//             newClicked[index] = true;
//             setClicked(newClicked);

//             window.location.assign(urls[index]);
//         }
//     };

//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
//             {rounds.map((round: any, index: any) => (
//                 <div
//                     key={index}
//                     onClick={() => handleClick(index)}
//                     className={`flex flex-col justify-between items-center p-4 w-48 h-48
//                       bg-gradient-to-br from-blue-50 to-blue-100
//                       border border-blue-200 rounded-lg shadow-lg
//                       transform transition-all duration-500 ease-in-out
//                       hover:scale-105 hover:shadow-xl cursor-pointer
//                       ${clicked[index] ? 'opacity-50 cursor-not-allowed' : ''}`}
//                     style={{
//                         animationDelay: `${index * 0.2}s`,
//                         animationFillMode: 'both',
//                     }}
//                 >
//                     <div className="text-lg font-semibold text-blue-800">Quiz {index + 1}</div>
//                     <div className="mt-4 text-center text-gray-700">
//                         <p>{clicked[index] ? 'Already Taken' : 'Test your knowledge'}</p>
//                     </div>
//                     <div
//                         className={`mt-4 py-2 px-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white
//                         rounded-md shadow-lg transition-colors duration-300
//                         ${clicked[index] ? 'bg-gray-400 cursor-not-allowed' : 'hover:from-blue-500 hover:to-blue-700'}`}
//                     >
//                         {clicked[index] ? 'Completed' : 'Start'}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default AnimatedList;
