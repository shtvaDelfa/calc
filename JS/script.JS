// Получаем элементы кнопок
let bloodCirCoef = document.getElementById("bloodCirculationCoefficient");
let kerdoVegInd = document.getElementById("kerdoVegetativeIndex");
let circInd = document.getElementById("circadianIndex");
let adPotential = document.getElementById("adaptivePotential");
let bladEff = document.getElementById("bladEffect");
let kerdo = document.getElementById("kerdo");
let cirInd = document.getElementById("circadeIndex");
let adaptPot = document.getElementById("potencial");

// Получаем все блоки с формулами
let counts = document.querySelectorAll(".count");

// Функция для скрытия всех блоков с формулами
function hideAllFormulas() {
  counts.forEach((count) => {
    count.classList.add("hidden"); // Скрываем каждый блок
  });
}

// Функция для отображения выбранного блока с формулой
function showSelectedFormula(formulaBlock) {
  formulaBlock.classList.remove("hidden"); // Показываем выбранный блок
}

// Функция для обработки клика по кнопке
function formulsMap(event, formulaBlock) {
  event.stopPropagation(); // Останавливаем всплытие события
  hideAllFormulas(); // Скрываем все блоки
  showSelectedFormula(formulaBlock); // Показываем выбранный блок
}

// Добавляем обработчики событий на кнопки
bloodCirCoef.addEventListener("click", function (event) {
  formulsMap(event, bladEff);
});

kerdoVegInd.addEventListener("click", function (event) {
  formulsMap(event, kerdo);
});

circInd.addEventListener("click", function (event) {
  formulsMap(event, cirInd);
});

adPotential.addEventListener("click", function (event) {
  formulsMap(event, adaptPot);
});

// Изначально скрываем все блоки с формулами
hideAllFormulas();

// let OKbuttons = document.querySelectorAll(".okay")
// let textareas = document.querySelectorAll(".count__textarea")
// console.log(textareas)
// // Реализуем рассчёт коэффициента обратимости кровообращения
// let sistOKbutton = document.getElementById("SistOk")
// let sistTextarea = document.getElementById("sistolic")
// let diastOKbutton = document.getElementById("DiastOk")
// let diastTextarea = document.getElementById("diastolic")
// let hardFreqOKbutton = document.getElementById("HardFreqOk")
// let hardFreqTextarea = document.getElementById("hardReductionFreque")
let bloodCoefficientCount = document.getElementById(
  "theCoefficientOfBloodCirculationReversibility"
);
// sistOKbutton.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     localStorage.setItem("sistolic", sistTextarea.value)
// })
// diastOKbutton.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     localStorage.setItem("diastolic", diastTextarea.value)
// })
// hardFreqOKbutton.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     localStorage.setItem("hard reduction freque", hardFreqTextarea.value)
// })
//
// // Реализуем рассчёт вегетативного индекса Кердо
// let secondFrequeOfHardReductionOkButton = document.getElementById("sHardFreqOk")
// let secondFrequeOfHardReductionTextarea = document.getElementById("sHardReductionFreque")
// let arterialPressureOkbutton = document.getElementById("arterialPressureOk")
// let arterialPressureTextarea = document.getElementById("arterialPressure")
// secondFrequeOfHardReductionOkButton.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     localStorage.setItem("hard reduction freque", secondFrequeOfHardReductionTextarea.value)
// })
// arterialPressureOkbutton.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     localStorage.setItem("arterial", arterialPressureTextarea.value)
// })

// // Реализуем рассчёт Циркадного индекса
// let middleNoonOkButton = document.getElementById("middleNoonOk")
// let middleNoonTextarea = document.getElementById("middleNoonHardFrequency")
// let middleNightOkButton = document.getElementById("middleNightOk")
// let middleNightTextarea = document.getElementById("middleNightHardFrequency")
// let circadeCount = document.getElementById("circadeCount")
// middleNoonOkButton.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     localStorage.setItem("Дневная ЧСС", middleNoonTextarea.value)
// })
// middleNightOkButton.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     localStorage.setItem("Ночная ЧСС", middleNightTextarea.value)
// })

// const harderFreqOkButton = document.getElementById('3hardFreqOk');
// let harderFreqTextarea = document.getElementById('3hardFreq')
// const sistolicalOkButton = document.getElementById('3sistolicOk');
// const sistolicalTextarea = document.getElementById('3sistolic');
// const diastolicalOkButton = document.getElementById('3diastolicOk');
// const diastolicalTextarea = document.getElementById('3diastolic');
// const ageOkButton = document.getElementById('3ageOk');
// const ageTextarea = document.getElementById('3age');
// const weightOkButton = document.getElementById('3weightOk');
// const weightTextarea = document.getElementById('3weight');
// const heightOkButton = document.getElementById('5heightOk');
// const heightTextarea = document.getElementById('5height');

// harderFreqOkButton.addEventListener('click', (e)=>{
//     localStorage.setItem("ЧСС", harderFreqTextarea.value)
// })
// sistolicalOkButton.addEventListener('click', (e)=>{
//     localStorage.setItem("ЧСС", sistolicalTextarea.value)
// })
// diastolicalOkButton.addEventListener('click', (e)=>{
//     localStorage.setItem("ЧСС", diastolicalTextarea.value)
// })
// ageOkButton.addEventListener('click', (e)=>{
//     localStorage.setItem("ЧСС", ageTextarea.value)
// })
// weightOkButton.addEventListener('click', (e)=>{
//     localStorage.setItem("ЧСС", harderFreqTextarea.value)
// })
// harderFreqOkButton.addEventListener('click', (e)=>{
//     localStorage.setItem("ЧСС", harderFreqTextarea.value)
// })
// harderFreqOkButton.addEventListener('click', (e)=>{
//     localStorage.setItem("ЧСС", harderFreqTextarea.value)
// })
// harderFreqOkButton.addEventListener('click', (e)=>{
//     localStorage.setItem("ЧСС", harderFreqTextarea.value)
// })
let resultTextBlock = document.getElementById("text");

let clearButtons = document.querySelectorAll(".clear");
let textareas = document.querySelectorAll(".count__textarea");
clearButtons.forEach((button, i) => {
  {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      textareas[i].value = "";
    });
  }
});
let OKButtons = document.querySelectorAll(".okay");
OKButtons.forEach((button, i) => {
  {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      localStorage.setItem(i + 1, textareas[i].value);
    });
  }
});
bloodCoefficientCount.addEventListener("click", (e) => {
  e.stopPropagation();
  let systolicPressure = localStorage.getItem(1);
  let diastolicPressure = localStorage.getItem(2);
  let frequeOfHardReduction = localStorage.getItem(3);
  let coefficientOfBloodCirculation =
    (systolicPressure - diastolicPressure) * frequeOfHardReduction;
  if (coefficientOfBloodCirculation == 2600) {
    resultTextBlock.textContent = "Норма!";
  } else if (coefficientOfBloodCirculation > 2600) {
    resultTextBlock.textContent =
      "Обратите внимание!!!" + coefficientOfBloodCirculation;
    resultTextBlock.style.color = `red`;
  }
});
kerdoCount.addEventListener("click", (e) => {
  e.stopPropagation();
  let frequeOfHardReduction = localStorage.getItem(4);
  let arterialPressure = localStorage.getItem(5);
  let vegetativeIndexKerdo =
    (1 - arterialPressure / frequeOfHardReduction) * 100;
  if (vegetativeIndexKerdo >= -15 && vegetativeIndexKerdo <= 15) {
    resultTextBlock.textContent = "Норма";
  } else {
    resultTextBlock.textContent = "Обратите внимание!!!" + vegetativeIndexKerdo;
    resultTextBlock.style.color = `red`;
  }
});
circadeCount.addEventListener("click", (e) => {
  e.stopPropagation();
  let noonFrequency = localStorage.getItem(6);
  let nightFrequency = localStorage.getItem(7);
  let circadeIndex = noonFrequency / nightFrequency;
  if (circadeIndex >= 1.24 && circadeIndex <= 1.44) {
    resultTextBlock.textContent = "Норма.";
  } else {
    resultTextBlock.textContent = `Обратите внимание!!! ` + circadeIndex;
    resultTextBlock.style.color = `red`;
  }
});
const adaptiveCount = document.getElementById("adaptivePotencial");
adaptiveCount.addEventListener("click", (e) => {
  e.stopPropagation();
  //частота пульса
  let frequeOfHardReduction = localStorage.getItem(8);
  //систолическое артериальное давление
  let sistolicPressure = localStorage.getItem(9);
  //диастолическое артериальное давление
  let diastolicPressure = localStorage.getItem(10);
  //возраст
  let age = localStorage.getItem(11);
  //масса тела
  let bodyWeight = localStorage.getItem(12);
  // рост
  let height = localStorage.getItem(13);
  //АП=0,011хЧП+0,014хСАД+0,008хДАД+0,014хВ+0,009хМТ-0,009хР-0,273
  let adaptivePotencial =
    0.011 * frequeOfHardReduction +
    0.014 * sistolicPressure +
    0.008 * diastolicPressure +
    0.014 * age +
    0.009 * bodyWeight -
    0.009 * height -
    0.273;
  if (adaptivePotencial < 2.6) {
    resultTextBlock.textContent = "Норма.";
  } else {
    resultTextBlock.textContent = `Обратите внимание!!! ` + adaptivePotencial;
    resultTextBlock.style.color = `red`;
  }
});


// let numbers = document.querySelectorAll(".numbers__item")
// let textarea = document.getElementById("textArea")
// numbers.forEach((number, i)=>{
//     number.addEventListener('click', function(eve){
//         eve.stopPropagation();
//         textareas.find.value.add(numbers[i].textContent);
//     })
// })



let activeTextarea = null; // Переменная для хранения активного поля ввода

textareas.forEach((textarea) => {
  textarea.addEventListener("focus", function () {
    activeTextarea = textarea; // Обновляем активное поле ввода
  });
});

// Обработчики для кнопок с цифрами
let numbers = document.querySelectorAll(".numbers__item");
numbers.forEach((number) => {
  number.addEventListener("click", function (e) {
    e.stopPropagation();
    if (activeTextarea) {
      activeTextarea.value += number.textContent; // Добавляем цифру в активное поле
    } else {
      console.log("Нет активного поля ввода."); // Сообщение для отладки
    }
  });
});

// Пример для автоматического фокуса при выборе блока
bloodCirCoef.addEventListener("click", function (event) {
  formulsMap(event, bladEff);
  let firstTextarea = bladEff.querySelector(".count__textarea");
  if (firstTextarea) {
    firstTextarea.focus();
    activeTextarea = firstTextarea;
  }
});