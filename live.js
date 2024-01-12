const ffmpeg = require('fluent-ffmpeg');
const { spawn } = require('child_process');

// Informasi tentang live streaming
const streams = [
  {
    rtmpKey: 'id-live-816247604235286-55720081?speSecret=f9e285af8c8da143c9d7edbb425545fc&speTime=65A376C4&pushDomain=push-spe.lvb.shopee.co.id&cdnID=SHOPEE&session_id=55720081',
    rtmpUrl: 'rtmp://push-spe.lvb.shopee.co.id/live/',
    videoSource: 'downloads/nxnx.mp4',
    resolution: '720x1280',
    bitrate: '2000k',
    bufsize: '3000k',
    crf: '23',
    audioBitrate: '128k',
  }
  // Add more streams if needed
];

// Function to create a stream
function createStream(streamInfo) {
  const { rtmpKey, rtmpUrl, videoSource, resolution, bitrate, bufsize, crf } = streamInfo;

  function startStream() {
    const ffmpegProcess = ffmpeg(videoSource)
      .inputOptions([
        '-re',
        '-stream_loop', '-1',
      ])
      .videoCodec('libx264')
      .audioCodec('aac')
      .outputOptions([
        '-preset', 'veryfast',
        '-g', '60',
        '-ar', '44100',
        '-b:a', '128k',
        '-s', resolution,
        '-b:v', bitrate,
        '-bufsize', bufsize,
        '-crf', crf,
      ])
      .format('flv')
      .output(`${rtmpUrl}${rtmpKey}`)
      .on('start', (commandLine) => {
        console.log(`FFmpeg process started: ${commandLine}`);
      })
      .on('stderr', (stderrLine) => {
        console.error(`FFmpeg stderr: ${stderrLine}`);
      })
      .on('end', () => {
        console.log('FFmpeg process finished');
      })
      .on('error', (err) => {
        console.error(`Error in FFmpeg process: ${err}. Retrying...`);
        setTimeout(startStream, 5000); // 5 seconds delay between retries
      })
      .run();
  }

  startStream();
}

// Create and start all streams
const activeStreams = streams.map(createStream);

// Handle proses keluar
process.on('SIGINT', () => {
  console.log('Stopping ffmpeg...');
  activeStreams.forEach((stream) => {
    stream.kill('SIGINT');
  });
  process.exit();
});