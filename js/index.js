const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const consentForm = document.getElementById('consent-form');
const modalText = document.getElementById('modal-text');
const modalContainer = document.getElementById('modal-choice-btns');
const decline = document.getElementById('decline');

setTimeout(function(){
    modal.style.display = 'inline';
},1500);

modalCloseBtn.addEventListener("click",function(){
    modal.style.display = 'none';
})
document.getElementById('decline-btn').addEventListener("mouseenter",function(){
    modalContainer.classList.toggle('reverse');
})
consentForm.addEventListener("submit",function(e){
    e.preventDefault();
    const consentFormData = new FormData(consentForm);
    const name = consentFormData.get('fullname');
    modalText.innerHTML = 
    `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">Uploading your data to the dark web...</p>
    </div>
    `;
    setTimeout(function(){
        document.getElementById('uploadText').innerText = `Making the sale...`;
    },1500);

    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = 
        `
        <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
        `;
        modalCloseBtn.disabled = false;
    },3000);
})