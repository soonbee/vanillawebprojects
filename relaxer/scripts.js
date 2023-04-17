const PHASE_IN = 1;
const PHASE_HOLD = 2;
const PHASE_OUT = 3;
let baseTime = new Date().getTime();
let guideText = document.querySelector("#text");
let currentPhase = PHASE_IN;
let text = {
    [PHASE_IN]: "Breathe In!",
    [PHASE_HOLD]: "Hold",
    [PHASE_OUT]: "Breathe Out!",
};

guideText.textContent = text[currentPhase];

setInterval(() => {
  let currentTime = new Date().getTime();
  let gap = (currentTime - baseTime) % 6000;
  let nextPhase = null;
  if (gap < 2400) {
    nextPhase = PHASE_IN;
  } else if (gap < 3600) {
    nextPhase = PHASE_HOLD;
  } else {
    nextPhase = PHASE_OUT;
  };
  if (currentPhase !== nextPhase) {
    currentPhase = nextPhase;
    guideText.textContent = text[currentPhase];
  };
}, 100);
