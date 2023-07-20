
import sharp from 'sharp'
export const grayscaleController = (req, res) => {
  const buffer = req.file.buffer;

  sharp(buffer)
    .greyscale()
    .toBuffer()
    .then((grayscaleBuffer) => {
      res.set('Content-Type', 'image/png');
      res.send(grayscaleBuffer);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while processing the image.' });
    });
};
export const invertFilterController = (req, res) => {
    const buffer = req.file.buffer;

    sharp(buffer)
    .negate()
    .toBuffer()
    .then((invertedBuffer) => {
      res.set('Content-Type', 'image/png');
      res.send(invertedBuffer);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while processing the image.' });
    });
};
export const bwFilterController = (req, res) => {
const buffer = req.file.buffer;

sharp(buffer)
  .toColorspace('b-w')
  .toBuffer()
  .then((bwBuffer) => {
    res.setHeader('Content-Type', 'image/png');
    res.send(bwBuffer);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while processing the image.' });
  });
};

// export const invertFilterController = async(req, res) => {
//     try{
//       const image = await loadImage(req.file.buffer);
//     const canvas = createCanvas(image.width, image.height);
//     const ctx = canvas.getContext('2d');

//     // Draw the image on the canvas
//     ctx.drawImage(image, 0, 0);

//     // Get the image data from the canvas
//     const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     const data = imageData.data;

//     // Invert the color of each pixel in the image data (including the alpha channel)
//     for (let i = 0; i < data.length; i += 4) {
//       data[i] = 255 - data[i];         // Red component
//       data[i + 1] = 255 - data[i + 1]; // Green component
//       data[i + 2] = 255 - data[i + 2]; // Blue component
//       // Invert the alpha component as well
//       data[i + 3] = 255 - data[i + 3]; // Alpha component
//     }

//     // Put the modified image data back to the canvas
//     ctx.putImageData(imageData, 0, 0);

//     // Convert the canvas to a buffer as a JPEG image
//     const invertedBuffer =canvas.toBuffer('image/jpeg');

//     // Set the Content-Disposition header to trigger the download
//     res.set('Content-Disposition', 'attachment; filename="inverted_image.jpg"');

//     // Send the negated image buffer as the response
//     res.send(invertedBuffer);
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'An error occurred while processing the image.' });
//     }
// };


export const converterController = async (req, res) => {
  try {
    const buffer = req.file.buffer;

    sharp(buffer)
      .jpeg() // Convert to JPEG format
      .toBuffer()
      .then((jpegBuffer) => {
        res.setHeader('Content-Type', 'image/jpeg'); // Set the content type to JPEG
        res.send(jpegBuffer);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while processing the image.' });
      });
      
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while converting the image.' });
  }
};




