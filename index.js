function getInputValueById(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  if (isNaN(inputValue) || inputValue === "" || inputValue <= 0) {
    alert("Invalid Donation Amount");
  } else {
    document.getElementById('my_modal_4').showModal();
  }

  return inputValue;
}

function getPreviousAmount(id) {
  return parseFloat(document.getElementById(id).innerText);
    
}
// function for history noakhali start
function historyDonationNoakhali(id){
 const donationTaka = getInputValueById(id);
 const historyContainer = document.getElementById('history-section');

 if(donationTaka){
  
   // history item create 
   const realTime = new Date().toLocaleString('en-GB',{timeZoneName: 'short'});
   document.getElementById('history-section');

   // new div create
   const historyItem = document.createElement('div');
   historyItem.className= 'p-5 border-2 rounded-md shadow-md mt-3'
   historyItem.innerHTML = `
   <p class='font-bold mb-5'>${donationTaka} Taka is donated for fsmine-2024 at Noakhali,Bangladesh</p>
   <p class='text-gray-400'>Date:${realTime}</p>

   `;
   
   historyContainer.appendChild(historyItem);
 }
} 
// function for history noakhali end

// function for history feni start
function historyDonationFeni(id){
  const donationTaka = getInputValueById(id);
  const historyContainer = document.getElementById('history-section');
 
  if(donationTaka){
   
    // history item create 
    const realTime = new Date().toLocaleString('en-GB',{timeZoneName: 'short'});
    document.getElementById('history-section');
 
    // new div create
    const historyItem = document.createElement('div');
    historyItem.className= 'p-5 border-2 rounded-md shadow-md mt-3'
    historyItem.innerHTML = `
    <p class='font-bold mb-5'>${donationTaka} Taka is donated for flood relief at feni,Bangladesh</p>
    <p class='text-gray-400'>Date:${realTime}</p>
 
    `;
    
    historyContainer.appendChild(historyItem);
  }
 } 
 // function for history feni end
  
 // function for history quota start
 function historyDonationQuota(id){
  const donationTaka = getInputValueById(id);
  const historyContainer = document.getElementById('history-section');
 
  if(donationTaka){
   
    // history item create 
    const realTime = new Date().toLocaleString('en-GB',{timeZoneName: 'short'});
    document.getElementById('history-section');
 
    // new div create
    const historyItem = document.createElement('div');
    historyItem.className= 'p-5 border-2 rounded-md shadow-md mt-3'
    historyItem.innerHTML = `
    <p class='font-bold mb-3'>${donationTaka} Taka is donated for Aid injurid in teh quota movement, Bangladesh</p>
    <p class='text-gray-400'>Date:${realTime}</p>
 
    `;
    
    historyContainer.appendChild(historyItem);
  }
 } 
// function for history quota end

//noakhali donate
    const noakhaliDonateButton = document.getElementById("noakhali-donate-button");
    noakhaliDonateButton.addEventListener("click", function () {
      
      const noakhaliInputValue = getInputValueById('nouakhali-input-value'); 

      const noakhaliDonateAmountValue = document.getElementById('noakhali-donate-amount');
      const noakhaliCurrentDonateAmount = parseFloat(noakhaliDonateAmountValue.innerText);
          
      const newAmountAddNoakhali = noakhaliCurrentDonateAmount + parseFloat(noakhaliInputValue);
      noakhaliDonateAmountValue.innerText = newAmountAddNoakhali;

    const yourAmountValue = getPreviousAmount('your-amount')
    const newTotalBalance = yourAmountValue - parseFloat(noakhaliInputValue);
    document.getElementById('your-amount').innerText = newTotalBalance;



});

// // feni donate

const feniDonateButton = document.getElementById("feni-donate-button");
feniDonateButton.addEventListener("click", function () {
  
  const feniInputValue = getInputValueById('feni-input-value'); 

  const feniDonateAmountValue = document.getElementById('feni-donate-amount');
  const feniCurrentDonateAmount = parseFloat(feniDonateAmountValue.innerText);
      
  const newAmountAddfeni = feniCurrentDonateAmount + parseFloat(feniInputValue);
  feniDonateAmountValue.innerText = newAmountAddfeni;

const yourAmountValue = getPreviousAmount('your-amount')
const newTotalBalance = yourAmountValue - parseFloat(feniInputValue);
document.getElementById('your-amount').innerText = newTotalBalance;
});



//  quota donate
const quotaDonateButton = document.getElementById("quota-donate-button");
quotaDonateButton.addEventListener("click", function () {
  
  const quotaInputValue = getInputValueById('quota-input-value'); 

  const quotaDonateAmountValue = document.getElementById('quota-donate-amount');
  const quotaCurrentDonateAmount = parseFloat(quotaDonateAmountValue.innerText);
      
  const newAmountAddquota = quotaCurrentDonateAmount + parseFloat(quotaInputValue);
  quotaDonateAmountValue.innerText = newAmountAddquota;

const yourAmountValue = getPreviousAmount('your-amount')
const newTotalBalance = yourAmountValue - parseFloat(quotaInputValue);
document.getElementById('your-amount').innerText = newTotalBalance;
});

// document.getElementById('home').addEventListener('click', function(){
//   window.location.href = 'index.html';
// });

  
// document.getElementById('blog').addEventListener('click', function(){
//   window.location.href = 'blog.html';
// });

//home-btn
const homeBtn = document.getElementById("home");
if(homeBtn){
  homeBtn.addEventListener('click', function(){
  window.location.href ='index.html';
  });
};

// blog btn
const blogBtn = document.getElementById('blog')
 if(blogBtn){
  blogBtn.addEventListener('click', function() {
  window.location.href ='blog.html';
});
 };

//  document.getElementById('my_modal_4').showModal();

  // history button and donate button toggle
    
  const historyTab = document.getElementById("history-tab");
    const donateTab = document.getElementById("donation-tab");

    // history btn tab
    historyTab.addEventListener("click", function () {

    historyTab.classList.add("bg-[#B4F461]", "font-bold");
    donateTab.classList.remove("bg-[#B4F461]", "font-bold");

    document.getElementById("noakhali-donate-card").classList.add("hidden");
    document.getElementById("feni-donate-card").classList.add("hidden");
    document.getElementById("quota-donate-card").classList.add("hidden");
    document.getElementById('history-section').classList.remove('hidden')

   // donation btn

  donateTab.addEventListener('click',function(){
    donateTab.classList.add(
      'bg-[#B4F461]'
    )
    historyTab.classList.remove(
      "bg-[#B4F461]"
    )
    
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById("noakhali-donate-card").classList.remove("hidden");
    document.getElementById("feni-donate-card").classList.remove("hidden");
    document.getElementById("quota-donate-card").classList.remove("hidden");
  })
});


// // history item create div
// document.getElementById('history-section').classList.add('hidden');
// const historyItem = document.createElement('div');
// historyItem.innerHTML = `
// <p class='font-bold mb-5'>${inputValue} Taka is donated from flood relief at Noakhali,Bangladesh</p>
// <p class='text-gray-400 '>Date:${new Date().toLocalString('en-US',{timeZone:'Asia/Dhaka',timeStyle: 'medium',dateStyle:'full'})};</p>

// `;
// const historyContainer = document.getElementById('history-section');
// historyContainer.insertBefore(historyItem,historyContainer.firstChild);


