function getInputValueById(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  if (isNaN(inputValue) || inputValue === "" || inputValue <= 0) {
    alert("Invalid Value! pleace Type valid number");
  } else {
    alert("Congratulation You Donate For Nouakhali Flood");
  }

  return inputValue;
}

function getPreviousAmount(id) {
    const yourAmount = parseFloat(document.getElementById(id).innerText);
    return yourAmount;
}

//noakhali donate
    const noakhaliDonateButton = document.getElementById("noakhali-donate-button");
    noakhaliDonateButton.addEventListener("click", function () {

    const noakhaliInputValue = getInputValueById("nouakhali-input-value");
    const noakhaliDonateAmount = document.getElementById("noakhali-donate-amount");
    noakhaliDonateAmount.innerText = noakhaliInputValue;

    const yourAmountValue = getPreviousAmount('your-amount')
    const newTotalBalance = yourAmountValue - parseFloat(noakhaliDonateAmount);
    document.getElementById('your-amount').innerText = newTotalBalance;
});

// // feni donate

    const feniDonateButton = document.getElementById("feni-donate-button");
    feniDonateButton.addEventListener("click", function () {
    const feniInputValue = getInputValueById("feni-input-value");

    const feniDonateAmount = document.getElementById("feni-donate-amount");
    feniDonateAmount.innerText = feniInputValue;
});

//  quota donate
    const quotaDonateButton = document.getElementById("quota-donate-button");
    quotaDonateButton.addEventListener("click", function () {
    let quotaInputValue = getInputValueById("quota-input-value");

    const quotaDonateAmount = document.getElementById("quota-donate-amount");
    quotaDonateAmount.innerText = quotaInputValue;
});
        // history button and donate button toggle
    const historyTab = document.getElementById("history-tab");
    const donateTab = document.getElementById("donation-tab");
    historyTab.addEventListener("click", function () {
    historyTab.classList.add("bg-[#B4F461]", "font-bold");
    donateTab.classList.remove("bg-[#B4F461]", "font-bold");

    document.getElementById("noakhali-donate-card").classList.add("hidden");
    document.getElementById("feni-donate-card").classList.add("hidden");
    document.getElementById("quota-donate-card").classList.add("hidden");

  //   history section add

  //   const historyItem = document.createElement('div');
  //  historyItem.className =
  //  "p-3 rounded-md border-2"

  //  historyItem.innerHTML=`
  //  <p>${inputValue} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
  //   <p>${new Date().toLocaleDateString()}</p>

  //  `;
  //  const historyContainer = document.getElementById('history-list')
  //  historyContainer.insertBefore(historyItem,historyContainer.firstChild)
});
//  back to donation  button
// const historyTab = document.getElementById('history-tab');
//  const donateTab = document.getElementById('donation-tab');
//  donateTab.addEventListener('click',function(){

//     donateTab.classList.add(

//                  "bg-[#B4F461]",
//                   "font-bold"
//               );
//               historyTab.classList.remove(
//                 'bg-[#B4F461]',
//                'font-bold'
//              );

//  document.getElementById('noakhali-donate-card').classList.remove('hidden')
//  document.getElementById('feni-donate-card').classList.remove('hidden')
//  document.getElementById('quota-donate-card').classList.remove('hidden')

//  });
// //  history section add
//  const historyItem = document.createElement('div');
//  historyItem.className =
//  "p-3 rounded-md border-2"
//  historyItem.innerHTML=`
//  <p>${inputValue} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
//   <p>${new Date().toLocaleDateString()}</p>

//  `;
//  const historyContainer = document.getElementById('history-list')
//  historyContainer.insertBefore(historyItem,historyContainer.firstChild)

//  toggle for donate and history
// const historyTab= document.getElementById('history-tab');
// const donateTab = document.getElementById('donation-tab')
// historyTab.addEventListener('click',function(){

//     historyTab.classList.add(

//        'bg-[#B4F461]',
//         'font-bold'
//     );
//     donateTab.classList.remove(
//         "px-7",
//          "bg-[#B4F461]",
//           " font-bold "
//       );

// });
