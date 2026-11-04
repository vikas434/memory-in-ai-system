const H = [50, 150, 250, 350], X = i => 120 + i * 115, BASE = 560;
const bar = (i, p) => {
  stroke(box(X(i), BASE - H[i], 80, H[i]), seg(p, 0, .7), { color: C.blue });
  write(String(H[i]), X(i) + 40, BASE - H[i] - 14, seg(p, .7, 1), { size: 28, center: true });
};
scene({ beats: [
  { say: 'Replaying the whole chat does not scale.', draw: p => {
      title("Replay doesn't scale", seg(p, 0, .8));
      stroke(line([90, BASE], [580, BASE]), seg(p, .8, 1), { color: C.white, width: 3 });
  } },
  { say: 'Every turn resends all the earlier turns.', draw: p => {
      bar(0, seg(p, 0, .5)); bar(1, seg(p, .5, 1));
  } },
  { say: 'So the tokens per call keep growing.', draw: p => {
      bar(2, seg(p, 0, .5)); bar(3, seg(p, .5, 1));
  } },
  { say: 'The total cost grows quadratically.', draw: p => {
      write('tokens per call', 335, 600, seg(p, 0, .4), { size: 26, center: true });
      write('cost ~ n squared', 335, 660, seg(p, .4, 1), { size: 38, color: C.red, center: true });
  } },
  { say: 'And every model has a context window. Say, a hundred and twenty eight thousand tokens.', draw: p => {
      write('context window: 128K', 960, 240, seg(p, 0, .35), { size: 30, color: C.blue, center: true });
      stroke(box(720, 262, 480, 110), seg(p, .35, .6), { color: C.blue });
      for (let i = 0; i < 5; i++) stroke(box(735 + i * 92, 287, 76, 60), seg(p, .6 + i * .08, .68 + i * .08), { color: C.white, width: 3 });
  } },
  { say: 'When it fills up, the oldest turns fall out.', draw: p => {
      stroke(line([737, 289], [809, 345]), seg(p, 0, .25), { color: C.red });
      stroke(line([809, 289], [737, 345]), seg(p, .25, .5), { color: C.red });
      write('dropped', 773, 405, seg(p, .5, 1), { size: 26, color: C.red, center: true });
  } },
  { say: 'That is a sliding window.', draw: p => {
      arrow([760, 450], [1190, 450], seg(p, 0, .5), { color: C.green });
      write('sliding window', 975, 505, seg(p, .5, 1), { size: 36, color: C.green, center: true });
  } },
]});
