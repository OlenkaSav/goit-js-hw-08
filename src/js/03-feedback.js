import throttle from "lodash.throttle";

const loginForm = document.querySelector(".feedback-form");
const emailForm = loginForm.elements.email;
const messageForm = loginForm.elements.message;
const submitBtn = loginForm.querySelector("button");
let formData ={};

loginForm.addEventListener("input", throttle(onFormInput, 500));
loginForm.addEventListener('submit', onFormSubmit);


onFormAutofill();

function onFormSubmit(event){
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
    console.log(formData);
    formData={};
  }

function onFormInput(event){
    formData[event.target.name]=event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function onFormAutofill(){
        const formSavedInfo =JSON.parse(localStorage.getItem('feedback-form-state'));
    formData={...formSavedInfo}
        if(formSavedInfo){
        const {email="", message=""}=formSavedInfo;
        emailForm.value=email;
        messageForm.value=message;
   
    }

};

