"use client";

import Carousel from "@/shared/components/Carousel";
import { ReactImageGalleryItem } from "react-image-gallery";

const images: ReactImageGalleryItem[] = [
   {
      original: "https://c4.wallpaperflare.com/wallpaper/266/364/892/download-nature-full-size-1920x1080-wallpaper-preview.jpg",
      loading: "lazy",
      originalHeight: 100,
   },
   {
      original: "https://c4.wallpaperflare.com/wallpaper/266/364/892/download-nature-full-size-1920x1080-wallpaper-preview.jpg",
      loading: "lazy",
      originalHeight: 100,
   },
   {
      original: "https://www.youtube.com/watch?v=b3nufQMgQKw&ab_channel=FukraInsaan",
      renderItem: (item: any) => {
         const videoId = item.original.split("v=")[1];
         return (
            <div className="video-item">
               <iframe width="100%" className="iframe" src={`https://www.youtube.com/embed/b3nufQMgQKw`} allowFullScreen title={`YouTube Video`}></iframe>
            </div>
         );
      },
   },
];

export default function SingleBlogPage() {
   return (
      <section className="row justify-center">
         <div className="sm:col-12 md:col-10">
            <div className="my-6">
               <Carousel items={images} ribbon="Python" />
            </div>
         </div>
         <div className="sm:col-12 md:col-10">
            <div className="bg-theme-level-2 p-4 mb-6">
               <div className="text-4xl sm:text-2xl my-4 text-theme-level-5"> Tracy Lee: The superpower of becoming an Expert of becoming an Expert</div>
               <div className="text-lg text-theme-level-5">hashtag : #google #angular #ng #ngindia</div>
               <div className="my-2 text-theme-level-5 text-base">
                  - Today, meet Tracy Lee — Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam tempora assumenda quam asperiores voluptate aut pariatur voluptatem nesciunt omnis atque
                  voluptatum fugit cum vitae, odio, dolor rem esse nisi totam!
               </div>
            </div>
         </div>
         <div className="sm:col-12 md:col-10">
            <div className="bg-theme-level-2 p-4 mb-6">
               <p className="my-2 first-letter:text-4xl text-theme-level-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sit quis quia fugit, quisquam rem? Ratione, culpa explicabo voluptate perspiciatis expedita dolore nesciunt
                  repellendus voluptatem earum fugit. Obcaecati, qui nemo?
               </p>
               <p className="my-2 text-theme-level-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ullam hic doloribus itaque at neque rem blanditiis aspernatur temporibus, possimus consequuntur aliquam molestiae
                  velit ipsum saepe ad iure repudiandae quae perferendis modi nemo. Laudantium vero, omnis mollitia alias reprehenderit id tenetur quos ducimus nobis! Laborum eveniet soluta pariatur
                  reiciendis quo, voluptates perferendis impedit. Laudantium, facere laboriosam nisi sit eaque nam, aliquam, dolor iusto quas atque voluptatem ipsa architecto fugiat harum corporis
                  praesentium similique facilis. Ipsum neque eius fugit, atque tempora cumque nemo quisquam eaque totam aperiam quo minima autem vero quam, at quas sit error itaque nobis accusantium
                  consectetur ullam qui enim. Modi voluptatem necessitatibus, atque aspernatur delectus ipsam. Iusto, nemo? Ipsa, dolore tempore ipsam laboriosam voluptate maiores laudantium ea autem
                  similique quaerat magni pedita autem, quia placeat doloribus modi magni aperiam nulla consequatur!
               </p>
               <p className="my-2 text-theme-level-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ullam hic doloribus itaque at neque rem blanditiis aspernatur temporibus, possimus consequuntur aliquam molestiae
                  velit ipsum saepe ad iure repudiandae quae perferendis modi nemo. Laudantium vero, omnis mollitia alias reprehenderit id tenetur quos ducimus nobis! Laborum eveniet soluta pariatur
                  reiciendis quo, voluptates perferendis impedit. Laudantium, facere laboriosam nisi sit eaque nam, aliquam, dolor iusto quas atque voluptatem ipsa architecto fugiat harum corporis
                  praesentium similique facilis. Ipsum neque eius fugit, atque tempora cumque nemo quisquam eaque totam aperiam quo minima autem vero quam, at quas sit error itaque nobis accusantium
                  consectetur ullam qui enim. Modi voluptatem necessitatibus, atque aspernatur delectus ipsam. Iusto, nemo? Ipsa, dolore tempore ipsam laboriosam voluptate maiores laudantium ea autem
                  similique quaerat magni pedita autem, quia placeat doloribus modi magni aperiam nulla consequatur!
               </p>
            </div>
         </div>
      </section>
   );
}
