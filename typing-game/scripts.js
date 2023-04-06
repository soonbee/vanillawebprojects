function* RandomWordGenerator() {
    const words = [
        'sigh',
        'tense',
        'airplane',
        'ball',
        'pies',
        'juice',
        'warlike',
        'bad',
        'north',
        'dependent',
        'steer',
        'silver',
        'highfalutin',
        'superficial',
        'quince',
        'eight',
        'feeble',
        'admit',
        'drag',
        'loving'
    ].sort(() => Math.random() - 0.5);
    let cur = 0;
    while (cur < words.length) {
        yield words[cur++];
    }
}
const randomWordGenerator = RandomWordGenerator();

function startGame() {
    const nextWord = randomWordGenerator.next().value;   
    document.querySelector("#game-target").textContent = nextWord;
}

startGame();
