"use client";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

export default function Carousel({ items, ribbon }: { items: ReactImageGalleryItem[]; ribbon: string }) {
   return (
      <div className="relative">
         <span className="text-xl bg-black text-white p-3 px-6 absolute top-0 left-0 z-10">{ribbon}</span>
         <ImageGallery
            items={items}
            showPlayButton={false}
            showFullscreenButton={false}
            thumbnailPosition={"bottom"}
            renderLeftNav={(onClick, disabled) => {
               return (
                  <button
                     type="button"
                     className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                     disabled={disabled}
                     onClick={onClick}>
                     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none bg-white">
                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                     </span>
                  </button>
               );
            }}
            renderRightNav={(onClick, disabled) => {
               return (
                  <button
                     type="button"
                     className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                     data-carousel-next=""
                     disabled={disabled}
                     onClick={onClick}>
                     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                     </span>
                  </button>
               );
            }}
            showBullets={true}
         />
      </div>
   );
}
