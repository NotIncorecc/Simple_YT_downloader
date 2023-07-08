const id = 'dQw4w9WgXcQ';
const videoUrl = `https://www.youtube.com/watch?v=${id}`;
const fs = require('fs');
const ytdl = require('ytdl-core');
const typ = ['audioonly','videoonly','audioandvideo']

ytdl.getInfo(videoUrl)
  .then(info => {
    const title = info.videoDetails.title;
    console.log(`Downloading audio from "${title}"...`);
    return ytdl(videoUrl, { filter: typ[0] }).pipe(fs.createWriteStream(`${title.slice(0,20)}.mp3`));
  })
  .then(() => console.log('Audio download finished'))
  .catch(err => console.error('Error occurred while downloading audio:', err));
