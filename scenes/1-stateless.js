scene({ beats: [
  { say: 'Why does an AI forget you?', draw: p => {
      write('Why does an AI forget you?', 60, 85, seg(p, 0, .85), { size: 52, color: C.yellow });
      stroke(curve([58, 104], [700, 102], [380, 112]), seg(p, .85, 1), { color: C.yellow, width: 4 });
  } },
  { say: 'A language model is like a pure function.', draw: p => {
      stroke(box(530, 280, 220, 160), seg(p, 0, .5), { color: C.blue });
      write('LLM', 640, 378, seg(p, .5, 1), { size: 64, color: C.blue, center: true });
  } },
  { say: 'Words go in as tokens,', draw: p => {
      write('tokens in', 220, 368, seg(p, 0, .55), { size: 36, color: C.green, center: true });
      arrow([320, 360], [520, 360], seg(p, .55, 1));
  } },
  { say: 'and out comes the next token.', draw: p => {
      arrow([760, 360], [960, 360], seg(p, 0, .45));
      write('next token', 1085, 368, seg(p, .45, 1), { size: 36, color: C.orange, center: true });
  } },
  { say: 'The weights never change.', draw: p => {
      write('weights: frozen', 640, 500, seg(p, 0, 1), { size: 32, color: C.pink, center: true });
  } },
  { say: 'So after it answers, it keeps nothing.', draw: p => {
      write('memory = 0', 640, 630, seg(p, 0, .6), { size: 52, color: C.red, center: true });
      stroke(oval(640, 615, 175, 52), seg(p, .6, 1), { color: C.red });
  } },
]});
