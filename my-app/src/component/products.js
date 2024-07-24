// src/components/BestSeller.jsx

import React from 'react';

const BestSeller = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">BEST SELLER IN THIS CATEGORY</h2>
      <div className="flex space-x-4 overflow-x-auto">
        <div className="w-60 bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center">
          <div className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full mb-2">SAVE $59.00</div>
          <img src="https://s3-alpha-sig.figma.com/img/0197/5265/23fafbf3635c4b46e1fde819e1dc2ecb?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wm2oKQLuyAqF~ciTAHhoiMDhWNevq5Ph6CDvYqKndRONgmbOrrWuFYJnZqcjTJF5bCzvSX3F7LHyNq5bDvKd9ksHIcCLK9Xxj7QNAZAvPXJ~fSVxzcUqiIK-eRoMewMrSmN1ei0nVBO~LM9zbtgZH2S5jhneNZUVocPGynxhZxIm1iSzf7KZnHGMFIBorIJ7rQLe7V1bI3OqcFeeyVwZS0tPTZhnwfdUzLzL4wJ~RgLIH4xMnsS43Gm3JodWpaBBAfW7UougcyAInXQDbGC69ypAUENc7WetiN7j1G7jOtlQerNV59wOhKvd-kHN4ROkTj822VY3iQONO3QeIkNcuA__" alt="Product 1" className="w-24 mb-4" />
          <h3 className="text-sm text-gray-700 mb-2">uLock Mini case 2.0, Xenon i10 / 32GB / SSD 512GB / VGA 2GB</h3>
          <div className="text-red-500 font-bold text-lg mb-1">$1,729.00 <span className="line-through text-gray-500">$2,119.00</span></div>
          <div className="text-green-500 text-sm font-bold mb-1">FREE SHIPPING</div>
          <div className="text-red-500 text-sm">Out of stock</div>
        </div>
        <div className="w-60 bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center">
          <div className="bg-gray-100 text-gray-800 text-xs font-bold px-2 py-1 rounded-full mb-2">SAVE</div>
          <img src="https://s3-alpha-sig.figma.com/img/a6db/a9c6/0c4399ce199fd5657145a6a95461ef81?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fq8cRHxUrcb~UPCFNQ299P1-sRIFm8rRI5kxqdOAM5wlV6gDe6mfqDVaYiWxhlMAvy7suiCLEVr5T0m17MliMFJhcWx~7S5dapiNj4ZQ81Meiaw7epjxqh5NdtWiJOeXqcX~LiUXj8VO10UPomUDjCfQWOlkZhxx0uNLUi39-mJBI96-3NZ3kN-QrpScxK1A29xEelneMq0APU7sb5L~B6YE0nrSxlT1js1RZFz2fjADCaErICwQ10Y-u6r2C~sr5aIDtUC2QuSMfal0sPP02r-O9A~mug9TwlG32cLdmMRMjUuY-dD8PxKxIxpDJL13vxL1qaV~7PQlmT1ScMlOGw__" alt="Product 2" className="w-24 mb-4" />
          <h3 className="text-sm text-gray-700 mb-2">Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop</h3>
          <div className="text-gray-900 font-bold text-lg mb-1">$979.00 - $1,259.00</div>
          <div className="text-gray-500 text-sm font-bold mb-1">$2.98 SHIPPING</div>
          <div className="text-gray-500 text-sm">PRE-ORDER</div>
        </div>
        <div className="w-60 bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center">
          <div className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full mb-2">SAVE $3.00</div>
          <img src="https://s3-alpha-sig.figma.com/img/6c00/b1b2/1e6859ec3f40138bedd69be262e356d3?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jSlEhzfeH4tnxBoQQPlkf~wQHtDoW3rmNCJBZ5X3Ks3vlCNV2ke9GQUelh5F3w9bYXiw9zysZIR5uSzdJUL~ce10ExU22olepcGF9JYkf5Ng-UmBS93~1uCHH68h5jSuQXqztAsmiQZZ5vrQl7sxR2LSWIf~7JJrr49rYi7rXUBJ2-MY4rmGtQAbHAMxrot8SoLg0Uu7Svxwm6jnqyrHbbXm-iRO5FpR3-BSrh62~HPlZObzZ53M69DYRiuxj7K25VQ~Hw7XDqDQataW49Wr7XEjWrzmgrAgMGwCCAh3kkJQE5sJv8m0B5ni8V37Xyav-QyuhRcmKPw7TQ1psJD5AA__" alt="Product 3" className="w-24 mb-4" />
          <h3 className="text-sm text-gray-700 mb-2">iSmart 24V Charger</h3>
          <div className="text-red-500 font-bold text-lg mb-1">$9.00 <span className="line-through text-gray-500">$12.00</span></div>
          <div className="text-gray-500 text-sm font-bold mb-1">$3.98 SHIPPING</div>
          <div className="text-gray-500 text-sm">Contact</div>
        </div>
        <div className="w-60 bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center">
          <div className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full mb-2">SAVE $199.00</div>
          <img src="https://s3-alpha-sig.figma.com/img/70fb/3352/120a006a36410fe660bdcf040428d535?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J5tGZd1IPDXdZLNvtNaA4x7EEV1852Kz-WN5vpItQT2qD-0foIQEODGcAErGba~pjpYBhPVoEBcKP1aY8KTv47yOnJifo2RyRJJ4ejpSKASlKduDiGTsm6SH6eAhhyvCIdmdm4dZcYh-UNwVXQwdjf6zSMlKIfxEUZUrnK5aHJGcxuDyJmns~rS8FNu5xPx1JgmZs24GuF-VqZEHwuHjPtr7bWjtGLCRhb9h-Cq7DpBk0mqu9NbNvgEOV6HPY4PZgzcIwivkbJT466ay5AHwVcNEHSFUU8IFHAfy2sxjeke4xMpmpPvuQh0epy8SupZ3DqVgIJcK4hoKXN36A2Ly0g__" alt="Product 4" className="w-24 mb-4" />
          <h3 className="text-sm text-gray-700 mb-2">OPod Pro 12.9 Inch M1 2023, 64GB + WiFi, GPS</h3>
          <div className="text-red-500 font-bold text-lg mb-1">$569.00 <span className="line-through text-gray-500">$759.00</span></div>
          <div className="text-green-500 text-sm font-bold mb-1">FREE SHIPPING</div>
          <div className="text-green-500 text-sm">In stock</div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
