// window.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector(".form");
//   const name = document.querySelector("._name");
//   const email = document.querySelector("._email");
//   const tel = document.querySelector("._tel");
//   const checkbox = document.querySelector(".checbox__placeholder");
//   const textarea = document.querySelector("._textarea");
//   const submit = document.querySelector("._submit");

//   name.addEventListener("input", () => {
//     name.value = name.value.replace(/\d/g, "");
//   });
//   tel.addEventListener("input", () => {
//     tel.value = tel.value.replace(/\D/g, "");
//   });
//   form.addEventListener("submit", formSend);

//   async function formSend(e) {
//     e.preventDefault();

//     let error = validation(form);

//     let formData = new FormData(form);

//     if(error === 0){
//       submit.classList.add("dispatch")
//       submit.innerHTML = "Отправление";
//       submit.disabled = true
//       setTimeout(() => {
//         submit.innerHTML = "Отправлено!";
//       }, 1500)
//       setTimeout(() => {
//         submit.disabled = false
//         submit.classList.remove("dispatch")
//         submit.innerHTML = "Связаться";
//         form.reset();
//       }, 3000)
//       let response = await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSf03N6Hj1tvaL3723KG9rTPLps2BpascLswuKkAmQb8BxN1sA/formResponse', {
//         method: 'POST',
//         body: formData
//       });
//       if(response.ok){
//         let result = await response.json();
//         console.log(result);
//         form.reset();
        
//       }
//       else{
//         console.log("error");
//       }
//     }
//   }

//   function validation(form) {
//     let err = 0;

//     let formReq = document.querySelectorAll("._req");

//     for (let index = 0; index < formReq.length; index++) {
//       const input = formReq[index];

//       removeError(input)
//       removeError(checkbox)


//       if (input.classList.contains("._email")) {
//         if (testEmail(input)) {
//           addError(input);
//           err++;
//         }
//       } else if (
//         input.getAttribute("type") === "checkbox" && input.checked === false
//       ) {
//           addError(checkbox);
//           console.log(1);
//           err++;
//       }
//       else{
//         if(input.value === ''){
//           addError(input);
//           err++;
//         }
//       }
//     }
//     return err;
//   }
//   let errorClass = "_error";
//   function addError(input) {
//     input.classList.add(errorClass);
//   }
//   function removeError(input) {
//     input.classList.remove(errorClass);
//   }

//   function testEmail(input) {
//     return /^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.*@.+(\..{1,11})?)$/.test(
//       input.value
//     );
//   }
// });
