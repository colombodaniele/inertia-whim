// Check song order, title, and the local audio asset referenced by the music carousel.
const assert = require('node:assert/strict');
const fs = require('node:fs');

const html = fs.readFileSync('index.html', 'utf8');
const musicSection = html.match(/<section class="music-list carousel[^>]*>([\s\S]*?)<\/section>/u)?.[1];
assert.ok(musicSection, 'Music carousel exists');

const tracks = [...musicSection.matchAll(/<article class="track-card carousel-card"[^>]*>([\s\S]*?)<\/article>/gu)]
  .map(([, card]) => ({
    title: card.match(/<h2>([^<]+)<\/h2>/u)?.[1],
    source: card.match(/<audio\b[^>]*\bsrc="([^"]+)"/u)?.[1]
  }));

assert.equal(tracks[2]?.title, 'Carousel', 'New song is third and uses the requested title');
assert.equal(decodeURIComponent(tracks[2].source), 'Music/Demo 18 V3 261025.mp3', 'Third song points to the requested MP3');

const audioPath = decodeURIComponent(tracks[2].source);
const audio = fs.readFileSync(audioPath);
const hasId3Tag = audio.subarray(0, 3).toString('ascii') === 'ID3';
const hasMpegFrame = audio[0] === 0xff && (audio[1] & 0xe0) === 0xe0;
assert.ok(hasId3Tag || hasMpegFrame, 'Referenced asset has an MP3 signature');

console.log('Music carousel smoke checks passed.');
