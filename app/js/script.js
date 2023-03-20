const customRadio = document.getElementById("custom");
const customInput = document.getElementById("custom-input");

customInput.onclick = () => {
  customRadio.click();
};

const bill = document.getElementById("bill");
const nop = document.getElementById("numberOfPeople");
const btn = document.getElementById("btn");
const messageBill = document.getElementById("message-bill");
const messageNop = document.getElementById("message-nop");

const toggleBill = () => {
  messageBill.classList.add("show");
  messageBill.classList.remove("hide");
  bill.classList.add("bill__input--red");
};

const toggleBillAgain = () => {
  messageBill.classList.add("hide");
  messageBill.classList.remove("show");
  bill.classList.remove("bill__input--red");
};

const toggleNop = () => {
  messageNop.classList.add("show");
  messageNop.classList.remove("hide");
  nop.classList.add("bill__input--red");
};

const toggleNopAgain = () => {
  messageNop.classList.add("hide");
  messageNop.classList.remove("show");
  nop.classList.remove("bill__input--red");
};

btn.addEventListener("click", () => {
  const checkedRadio = document.querySelector(
    'input[name="radioname"]:checked'
  );

  const tip = (checkedRadio.value * bill.value) / 100;
  const TipPerPerson = tip / nop.value;

  const customTip = (customInput.value * bill.value) / 100;
  const customTipPerPerson = customTip / nop.value;

  const totalTip = (parseInt(bill.value) + tip) / nop.value;
  const totalCustomTip = (parseInt(bill.value) + customTip) / nop.value;

  const resultAmount = document.getElementById("amount-per-person");
  const resultTotal = document.getElementById("total-per-person");

  const render = () => {
    if (document.getElementById("custom").checked) {
      resultAmount.textContent = customTipPerPerson.toFixed(2);
      resultTotal.textContent = totalCustomTip.toFixed(2);
    } else {
      resultAmount.textContent = TipPerPerson.toFixed(2);
      resultTotal.textContent = totalTip.toFixed(2);
    }
  };

  if (bill.value == 0) {
    toggleBill();
  } else {
    toggleBillAgain();
  }

  if (nop.value == 0) {
    toggleNop();
  } else {
    toggleNopAgain();
  }

  if (bill.value > 0 && nop.value > 0) {
    render();
  }
});

const list = document.querySelectorAll(".bill__labl");

list.forEach((item) =>
  item.addEventListener("click", () => {
    list.forEach((item) => item.classList.remove("bill__labl--active"));
    item.classList.add("bill__labl--active");
  })
);
