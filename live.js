const ffmpeg = require('fluent-ffmpeg');
const spawn = require('child_process').spawn;

// Ganti dengan informasi rtmp key dan url dari Facebook
const rtmpKey = 'FB-883859429845417-0-Abwedqcir6FBZ3vI';
const facebookRtmpUrl = 'rtmps://live-api-s.facebook.com:443/rtmp/';

// Path ke file video atau sumber video yang ingin Anda streaming
const videoSource = 'ujiCoba.mp4';

// Buat stream ffmpeg
const ffmpegProcess = spawn('ffmpeg', [
  '-re', // real-time mode
//   '-stream_loop', '-1', // Nilai -1 berarti looping tak terbatas
  '-i', videoSource,
  '-c:v', 'libx264',
  '-preset', 'medium',
  '-c:a', 'aac',
  '-g', '60',
  '-ar', '44100',
  '-b:a', '128k',
//   '-s', '720x1280',Resolusi
//   '-b:v', '2M',
//   '-bufsize', '3000k',
//   '-crf', '23',
  '-strict', 'experimental',
  '-f', 'flv',
  `${facebookRtmpUrl}${rtmpKey}`
]);

// Tangkap event output dari ffmpeg
ffmpegProcess.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ffmpegProcess.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ffmpegProcess.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

// Handle proses keluar
process.on('SIGINT', () => {
  console.log('Stopping ffmpeg...');
  ffmpegProcess.kill('SIGINT');
  process.exit();
});
