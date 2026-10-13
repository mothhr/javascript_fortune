// JavaScript
console.log('Hello world!');

const drawButton = document.querySelector('#drawButton');
const resultDisplay = document.querySelector('#resultDisplay');

// ボタンがクリックされたら、動作させる
drawButton.addEventListener('click', () => {

    // 0から1未満のランダムな数字を生成する
    const randomNumber = Math.random();
    console.log(randomNumber); // コンソールに表示（確認用）


    if (randomNumber < 0.2) {
        resultDisplay.textContent = '大吉';

    } else if (randomNumber < 0.4) {
        resultDisplay.textContent = '中吉';

    } else if (randomNumber < 0.6) {
        resultDisplay.textContent = '吉';

    } else if (randomNumber < 0.8) {
        resultDisplay.textContent = '凶';    

    // どちらでもない場合
    } else {
        resultDisplay.textContent = '大凶';
    }
});