const inputNumber = document.getElementById("getInputNumber");
const display = document.getElementById("displayResult");

function isPlindromeNumber(num) {
  const str = String(num);
  const reserverd = [...str].reverse("").join("");
  return str === reserverd;
}

function startToCheck() {
  event.preventDefault();
  const number = inputNumber.value;
  if (isPlindromeNumber(number)) {
    display.innerHTML = `${number} is a symmetry number!`;
  } else {
    display.innerHTML = `${number} is not a symmetry number!`;
  }
}

// Đây là cách 1 dùng các tiện ích trong mảng để làm như splice để tách ra thành từng phần tử chuỗi.
// sau đó dùng reserve để đảo thứ tự chuỗi trong mảng.
// dùng join để gộp tất cả lại một mảng lớn.
