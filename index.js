const password = document.querySelector("#password");
console.log(password);
const background = document.querySelector("#background");
const submitBtn=document.querySelector("#submit-btn");
password.addEventListener("input", (e) => {
  e.preventDefault();
  const input = e.target.value;
  //console.log(input);
  const length=input.length;
  console.log(length);
  const blurValue=(20-length*2);
  background.style.filter=`blur(${blurValue}px)`;
});
submitBtn.addEventListener("click",()=>{
    background.style.filter="blur(20px)";
    password.value="";
})