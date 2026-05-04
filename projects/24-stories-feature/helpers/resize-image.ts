export const resizeImage = (
  base64: string,
  maxWidth = 1080,
  maxHeight = 1920,
  outputType = 'image/jpeg',
  quality = 0.9,
) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = base64;

    img.onload = () => {
      const { width, height } = img;

      const ratio = Math.min(maxWidth / width, maxHeight / height, 1);
      const newWidth = width * ratio;
      const newHeight = height * ratio;

      const canvas = document.createElement('canvas');
      canvas.width = newWidth;
      canvas.height = newHeight;

      const ctx = canvas.getContext('2d');
      if (!ctx) return reject(new Error('Canvas not supported'));

      ctx.drawImage(img, 0, 0, newWidth, newHeight);

      resolve(canvas.toDataURL(outputType, quality));
    };

    img.onerror = reject;
  });
};
