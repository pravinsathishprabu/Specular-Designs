// utils/preloadImages.js
export function preloadImages(imageUrls, onProgress) {
  let loaded = 0;
  const total = imageUrls.length;

  return Promise.all(
    imageUrls.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loaded++;
          onProgress(Math.round((loaded / total) * 100));
          resolve();
        };
        img.onerror = reject;
      });
    })
  );
}
