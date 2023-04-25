"use strict";

const nums = document.querySelectorAll(".number");
const screen = document.getElementById("result_screen");
let firstNum = "";
let secondNum = "";
let operation = "";
let operation2 = "";
let makeoperation = "";
for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", function () {
    // if (firstNum.includes("g") && nums[i].textContent == ".") {
    //   alert("Invalid operation: decimal point already found");
    //   return;
    // }
    if (firstNum == "0" && nums[i].textContent == "0") {
      alert("Invalid operation: The first number is already 0.");
      return;
    }
    if (
      nums[i].textContent == "0" ||
      nums[i].textContent == "1" ||
      nums[i].textContent == "2" ||
      nums[i].textContent == "3" ||
      nums[i].textContent == "4" ||
      nums[i].textContent == "5" ||
      nums[i].textContent == "6" ||
      nums[i].textContent == "7" ||
      nums[i].textContent == "8" ||
      nums[i].textContent == "9"
    ) {
      firstNum += nums[i].textContent;
      screen.textContent = firstNum;
      operation = firstNum;
      //   console.log(firstNum);
    }
    if (
      nums[i].textContent === "+" ||
      nums[i].textContent === "-" ||
      nums[i].textContent === "/" ||
      nums[i].textContent === "x"
    ) {
      makeoperation = nums[i].textContent;
      screen.textContent = "";
      firstNum = "";
    } else if (nums[i].textContent == "RESET") {
      firstNum = "";
      secondNum = "";
      operation = "";
      operation2 = "";
      makeoperation = "";
      screen.textContent = "0";
    } else if (nums[i].textContent == "DEL") {
      firstNum = firstNum.slice(0, -1);
      screen.textContent = firstNum;
      console.log(firstNum);
    } else if (nums[i].textContent == "=") {
      secondNum = parseInt(operation);
      firstNum = parseInt(firstNum);
      if (makeoperation == "-") {
        screen.textContent = secondNum - firstNum;
        firstNum = secondNum - firstNum;
      } else if (makeoperation == "+") {
        screen.textContent = secondNum + firstNum;
        firstNum = secondNum + firstNum;
      } else if (makeoperation == "x") {
        screen.textContent = secondNum * firstNum;
        firstNum = secondNum * firstNum;
      } else if (makeoperation == "/") {
        screen.textContent = secondNum / firstNum;
        firstNum = secondNum / firstNum;
      }
    }
  });
}

const rangeInput = document.getElementById("rangeInput");

rangeInput.addEventListener("input", function () {
  const value = rangeInput.value;
  let color = "";
  let numberColor = "";
  let calcbg = "";
  let buttonbg = "";
  let buttonCol = "";
  let buttonColorResDel = "";
  let buttonColorResDelBG = "";
  let equal = "";
  let slider = "";
  let sliderC = "";
  let boxshadowcolor = "";
  let boxshadowcolorE = "";
  let equalcolor = "";
  let numberboxshadow = "";
  switch (value) {
    case "3":
      color = "#17062A";
      numberColor = "#FFE53D";
      calcbg = "#1E0936";
      buttonbg = "#1E0936";
      buttonCol = "#331C4D";
      equal = "#00DED0";
      slider = "#1E0936";
      sliderC = "#00DED0";
      buttonColorResDel = "#FFFFFF";
      buttonColorResDelBG = "#56077C";
      boxshadowcolor = "inset 0px -4px 0px #BE15F4";
      boxshadowcolorE = "inset 0px -4px 0px #6CF9F1";
      equalcolor = "#1A2327";
      numberboxshadow = "inset 0px -4px 0px #881C9E";
      break;
    case "2":
      color = "#E6E6E6";
      numberColor = "#36362C";
      calcbg = "#EEEEEE";
      buttonbg = "#D2CDCD";
      buttonCol = "#E5E4E1";
      equal = "#C85402";
      slider = "#D2CDCD";
      sliderC = "#C85402";
      buttonColorResDel = "#FFFFFF";
      buttonColorResDelBG = "#378187";
      boxshadowcolor = "inset 0px -4px 0px #1B6066";
      boxshadowcolorE = "inset 0px -4px 0px #873901";
      equalcolor = "#FFFFFF";
      numberboxshadow = "inset 0px -4px 0px #A79E91";
      break;
    default:
      break;
  }
  document.body.style.backgroundColor = color;
  const headertext1 = document.getElementById("name");
  headertext1.style.color = numberColor;
  const headertext2 = document.getElementById("name2");
  headertext2.style.color = numberColor;
  const headertext3 = document.getElementsByClassName("t_num");
  for (let i = 0; i < headertext3.length; i++) {
    headertext3[i].style.color = numberColor;
  }
  const result = document.getElementById("result");
  result.style.background = calcbg;
  const screen_txt = document.getElementById("result_screen");
  screen_txt.style.color = numberColor;
  const operations = document.getElementById("operations");
  operations.style.background = buttonbg;
  const sliderbg = document.getElementById("rangeInput");
  sliderbg.style.background = slider;
  const numbers = document.getElementsByClassName("number");
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].style.color = numberColor;
    numbers[i].style.backgroundColor = buttonCol;
    numbers[i].style.boxShadow = numberboxshadow;
  }
  const del = document.getElementsByClassName("del");
  for (let i = 0; i < del.length; i++) {
    del[i].style.color = buttonColorResDel;
    del[i].style.backgroundColor = buttonColorResDelBG;
    del[i].style.boxShadow = boxshadowcolor;
  }
  const reseti = document.getElementById("resetbtn");
  reseti.style.color = buttonColorResDel;
  reseti.style.backgroundColor = buttonColorResDelBG;
  reseti.style.boxShadow = boxshadowcolor;
  const counti = document.getElementById("countbtn");
  counti.style.color = equalcolor;
  counti.style.backgroundColor = sliderC;
  counti.style.boxShadow = boxshadowcolorE;
  const range = document.getElementById("rangeInput");
  range.style.setProperty("--thumb-background-color", sliderC);
});
