scene({ beats: [
  { say: 'So, just make the window bigger?', draw: p => {
      write('Just make it bigger?', 60, 85, p, { size: 52, color: C.yellow });
  } },
  { say: 'Say, a million tokens.', draw: p => {
      write('1,000,000 tokens', 640, 165, seg(p, 0, .3), { size: 30, color: C.blue, center: true });
      stroke(box(80, 185, 1120, 110), seg(p, .3, .5), { color: C.blue });
      for (let i = 0; i < 36; i++) { const x = 105 + i * 30.5; stroke(line([x, 210], [x, 270]), seg(p, .5 + i * .0135, .52 + i * .0135), { color: C.white, width: 2 }); }
  } },
  { say: 'But only three messages really matter.', draw: p => {
      [594.5, 625, 655.5].forEach((x, i) => stroke(line([x, 205], [x, 275]), seg(p, i * .12, .12 + i * .12), { color: C.yellow, width: 7 }));
      write('only 3 matter', 625, 455, seg(p, .4, .8), { size: 34, color: C.yellow, center: true });
      arrow([625, 415], [625, 305], seg(p, .8, 1), { color: C.yellow });
  } },
  { say: 'The model\'s attention gets spread thin. Lost in the middle.', draw: p => {
      write('lost in the middle', 640, 540, p, { size: 46, color: C.red, center: true });
  } },
  { say: 'And the cost still grows every turn.', draw: p => {
      write('and still costly', 640, 610, p, { size: 32, color: C.orange, center: true });
  } },
  { clear: true, say: 'The fix: keep memory outside the model.', draw: p => {
      write('The fix: memory outside', 60, 85, seg(p, 0, .5), { size: 52, color: C.yellow });
      stroke(box(90, 260, 300, 170), seg(p, .5, .8), { color: C.green });
      write('Memory store', 240, 355, seg(p, .8, 1), { size: 34, color: C.green, center: true });
  } },
  { say: 'Pick only what is relevant,', draw: p => {
      write('pick relevant', 480, 315, seg(p, 0, .45), { size: 26, color: C.yellow, center: true });
      arrow([400, 345], [565, 345], seg(p, .45, .65));
      stroke(box(575, 285, 200, 120), seg(p, .65, .85), { color: C.blue });
      write('small context', 675, 352, seg(p, .85, 1), { size: 28, color: C.blue, center: true });
  } },
  { say: 'and send just that to the model.', draw: p => {
      arrow([785, 345], [935, 345], seg(p, 0, .3));
      stroke(box(945, 275, 220, 140), seg(p, .3, .65), { color: C.orange });
      write('LLM', 1055, 362, seg(p, .65, 1), { size: 54, color: C.orange, center: true });
  } },
  { say: 'Memory means retrieve, not replay.', draw: p => {
      write('memory = retrieve, not replay', 640, 570, seg(p, 0, .85), { size: 42, color: C.yellow, center: true });
      check(985, 545, seg(p, .85, 1), { size: 36 });
  } },
]});
