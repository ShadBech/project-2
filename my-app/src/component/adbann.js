// src/components/AdBanner.jsx

import React from 'react';

const AdBanner = () => {
  return (
    <div className="flex space-x-4 p-4">
      <div className="w-1/2 bg-gray-200 rounded-lg flex items-center justify-center p-6">
        <div className="text-center">
        <img
              src="https://s3-alpha-sig.figma.com/img/ef02/d1db/263e787dceaa0e3d8c30e163080b0d2b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mofsdKToKr9SeP5Np2RMzRnwfu7QzsmUAKtCL-7-pRNBUWqD8I2LbIhNphkUScnGGukmtj1rxjBSFWc8zDXXjAokydKqTxFHs3llGPKzsACWUJ7hR08fPvx7BiJTFN6FTznOnNyGciU8iCqbZAZ8ewf3Zr6qU04gCLcBv6RSwIO~~ydaGfXf1zOsvIixFGw4QI2VeTZYXxoSgceKU7q6PlyQwjY1nTWyjqk0BF25GEJkB9KHVyLYf4Wjp8M3UJ~mJBPJ-HG~n7SNKDk8z7oCTPllvA8tp3z0t2SaH8-EO10bVZiDOsYwQJA5C~uMnU0ZuVdQ5g5LNX-eLJEY-FrZeg__"
              alt="Noise Cancelling Headphone"
              className="w-full h-full object-cover rounded-md"
            />
          <h2 className="text-xl font-bold">Noise Cancelling Headphone</h2>
          <p className="text-sm mt-2">Bose Over-Ear Headphone<br/>WiFi, Voice Assistant,<br/>Low Latency Game Mode</p>
          <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-full">BUY NOW</button>
        </div>
      </div>
      <div className="w-1/2 bg-gray-100 rounded-lg flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-xl font-bold">redmi note 12 Pro+ 5g</h2>
          <p className="text-sm mt-2">Rise to the challenge</p>
          <img
              src="https://s3-alpha-sig.figma.com/img/8c32/60e6/8f2363e9e7dcabb1fbce5816640c968f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d5SACbu4-g4esC5CeqrFeZLTIYE8xoWGmNmMJ8mfalX20FtCaO3nK2ySmAvIQqg7sbh1CCiEEQGl2fz4lIDglzNVDgIeJ6e6fXWjVtp~8nYQm57DsliKsbukSdv3~FsNlt4L6Tt8v5y41I9B3Qej8Ozu-W9FuwhTnMEowL4siF6YLc045J9NNmQ-En~KO1BCIEFSBkTIn2r5CGouhIdAU7JvNK4fSCr20OM~lVxb2PpVVEfkc5uWDfnsNNPI7mhyvs1yOHLZpm4w8XijY62MlAdJo~snLMuyGh-3MrznSe3CIZVIxvNWKJP-Sue3Ky4EpTwP618OYhMTDy9RQeq31g__"
              alt="redmi note 12 Pro+ 5g"
              className="w-full h-full object-cover rounded-md"
            />
            <button className="bg-black text-white px-4 rounded-md hover:bg-gray-800 md:ml-40 h-12 mt-4 md:mt-9">
                  SHOP NOW
                </button>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
