const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
        const buttonValue = buttonsEl[i].textContent;
        if (buttonValue === "AC") {
            allClearResult();
        } else if (buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "()") {
            appendParenthesis();
        } else if (buttonValue === "=") {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
}


// すべて削除する関数
function allClearResult() {
    inputFieldEl.value = "";
}
// 1つ前の入力を削除する関数
function clearResult() {
    inputFieldEl.value = inputFieldEl.value.slice(0, -1);
}

// カッコを判定して入力する関数
function appendParenthesis() {
    const currentText = inputFieldEl.value;

    // 現在のテキストに含まれる "(" と ")" の個数を数える
    const openCount = (currentText.match(/\(/g) || []).length;
    const closeCount = (currentText.match(/\)/g) || []).length;

    // 開きカッコ '(' の方が多ければ ')' を入力、それ以外は '(' を入力
    if (openCount > closeCount) {
        inputFieldEl.value += ")";
    } else {
        inputFieldEl.value += "(";
    }
}
// 計算結果を出力する関数　
function calculateResult() {
    try {
        // 表示用の「×」や「÷」を、JavaScriptで計算できる「*」や「/」に置き換える
        let formattedInput = inputFieldEl.value
            .replace(/×/g, "*")
            .replace(/÷/g, "/");

        // カッコの中身も含めて自動で正しく計算される
        inputFieldEl.value = eval(formattedInput);
    } catch (error) {
        inputFieldEl.value = "Error";
    }
}
// 入力を上書きではなく、追加する関数
function appendValue(buttonValue) {
    inputFieldEl.value += buttonValue; 
}