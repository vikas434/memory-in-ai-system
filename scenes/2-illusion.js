scene({ beats: [
  { say: 'So why does it seem to remember?', draw: p => {
      title('The illusion of memory', seg(p, 0, .85));
      stroke(line([640, 130], [640, 610]), seg(p, .85, 1), { color: C.white, width: 2 });
  } },
  { say: 'In session one, you say, my name is Vikas.', draw: p => {
      write('Session 1', 320, 175, seg(p, 0, .35), { size: 40, color: C.blue, center: true });
      write('You: my name is Vikas', 320, 265, seg(p, .35, 1), { size: 30, center: true });
  } },
  { say: 'A few turns later, you ask, what is my name?', draw: p => {
      write('You: what is my name?', 320, 330, p, { size: 30, center: true });
  } },
  { say: 'It answers, Vikas!', draw: p => {
      write('AI: Vikas!', 300, 395, seg(p, 0, .7), { size: 32, color: C.green, center: true });
      check(410, 385, seg(p, .7, 1), { size: 30 });
  } },
  { say: 'Only because the app sends the whole chat again, every time.', draw: p => {
      stroke(box(130, 222, 380, 200), seg(p, 0, .35), { color: C.yellow });
      arrow([320, 430], [320, 505], seg(p, .35, .55), { color: C.yellow });
      write('whole chat sent again', 320, 552, seg(p, .55, 1), { size: 30, color: C.yellow, center: true });
  } },
  { say: 'Now open session two, and ask again.', draw: p => {
      write('Session 2', 960, 175, seg(p, 0, .4), { size: 40, color: C.orange, center: true });
      write('You: what is my name?', 960, 265, seg(p, .4, 1), { size: 30, center: true });
  } },
  { say: 'It has no idea.', draw: p => {
      write("AI: I don't know", 960, 330, seg(p, 0, .6), { size: 32, color: C.red, center: true });
      write('?', 960, 500, seg(p, .6, 1), { size: 130, color: C.red, center: true });
  } },
  { say: 'The memory lives in the chat, not in the model.', draw: p => {
      write('memory lives in the chat, not the model', 640, 675, p, { size: 34, color: C.yellow, center: true });
  } },
]});
