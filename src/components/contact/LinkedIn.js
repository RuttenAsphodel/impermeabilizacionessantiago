import React, { useState } from 'react';
//import { X, ExternalLink } from 'lucide-react';

const LinkedInProfileLink = ({ username }) => {
  const [isVisible,] = useState(true);
  const profileUrl = `https://www.linkedin.com/in/${username}`;
  //const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(profileUrl)}`;
//  const profileName = 'Impermeabilizaciones Luis Espricaute'

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-0">
      <div className="relative flex flex-col items-start space-y-2">
        {/* <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          <X size={16} />
        </button> */}
        
        <a 
          href={profileUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="w-10 h-10">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
          {/* <span className="font-semibold text-sm">{profileName}</span>
          <ExternalLink size={14} /> */}
        </a>
        
        {/* <div className="flex space-x-2">
          <a 
            href={`https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=${username}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-600 py-1 px-2 rounded transition-colors duration-200"
          >
            Seguir
          </a>
          <a 
            href={shareUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 py-1 px-2 rounded transition-colors duration-200"
          >
            Compartir
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default LinkedInProfileLink;