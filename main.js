// document.addEventListener("DOMContentLoaded", function() {
//   var images = document.querySelectorAll('img[data-src]');

//   function lazyLoad() {
//       images.forEach(function(img) {
//           if (img.getBoundingClientRect().top < window.innerHeight) {
//               img.src = img.dataset.src;
//               img.removeAttribute('data-src');
//           }
//       });

//       var videos = document.querySelectorAll('video[data-src]');
//       videos.forEach(function(video) {
//           if (video.getBoundingClientRect().top < window.innerHeight) {
//               var src = video.dataset.src;
//               video.src = src;
//               video.load(); // Lädt das Video
//               video.removeAttribute('data-src');
//           }
//       });
//   }

//   // Initial Lazy Load
//   lazyLoad();

//   // Lazy Load on scroll
//   window.addEventListener('scroll', lazyLoad);
// });


const lazyImages = document.querySelectorAll(".painting");
const observer = new IntersectionObserver((entries, observer) => {
 entries.forEach((entry) => {
  if (entry.isIntersecting) {
   entry.target.src = entry.target.dataset.src;
   observer.unobserve(entry.target); 
  }
 });
});
lazyImages.forEach((image) => {
 observer.observe(image);
});

const lazyBackground = document.querySelectorAll(".backgroundImage");
const observerX = new IntersectionObserver((entries, observer) => {
 entries.forEach((entry) => {
  if (entry.isIntersecting) {
   entry.target.src = entry.target.dataset.src;
   observer.unobserve(entry.target); 
  }
 });
});
lazyBackground.forEach((image) => {
 observerX.observe(image);
});

// const lazyVideos = document.querySelectorAll(".videoX");
// const observerXX = new IntersectionObserver((entries, observer) => {
//  entries.forEach((entry) => {
//   if (entry.isIntersecting) {
//    entry.target.src = entry.target.dataset.src;
//    observer.unobserve(entry.target); 
//   }
//  });
// });
// lazyVideos.forEach((image) => {
//  observerXX.observe(image);
// });
// const lazyImages = document.querySelectorAll(".painting");
// const lazyVideos = document.querySelectorAll(".videoX");
// const lazyBackgrounds = document.querySelectorAll(".backgroundImage");

// function lazyLoad(entries, observer) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             if (entry.target.tagName === 'IMG' || entry.target.tagName === 'VIDEO') {
//                 if (entry.target.tagName === 'IMG') {
//                     entry.target.src = entry.target.dataset.src;
//                 } else if (entry.target.tagName === 'VIDEO') {
//                     const source = entry.target.querySelector('source');
//                     if (source) {
//                         source.src = source.dataset.src;
//                     }
//                 }
//                 observer.unobserve(entry.target);
//             }
//         }
//     });
// }

// const observer = new IntersectionObserver(lazyLoad);

// lazyImages.forEach(image => {
//     observer.observe(image);
// });

// lazyVideos.forEach(video => {
//     observer.observe(video);
// });

// lazyBackgrounds.forEach(background => {
//     observer.observe(background);
// });