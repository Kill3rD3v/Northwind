const btnSignUp = document.getElementById("btnSignUp"),
  formSignIN = document.getElementById("formSignIN"),
  formVerde = document.getElementById("formVerde"),
  formSignUP = document.getElementById("formSignUP"),
  VHead1 = document.getElementById("VHead1"),
  VHead2 = document.getElementById("VHead2"),
  btnText = document.getElementById("btnText"),
  formVerde1 = document.getElementById("formVerde1"),
  VHead11 = document.getElementById("VHead11"),
  VHead21 = document.getElementById("VHead21"),
  btnText1 = document.getElementById("btnText1"),
  btnSignUp1 = document.getElementById("btnSignUp1");

btnSignUp.addEventListener("click", () => {
  formVerde.classList.add("saltoIzq");
  VHead1.classList.add("hDer");
  VHead2.classList.add("hDer");
  btnText.classList.add("hDer");
  formSignIN.classList.add("formBlancaDer");
  formSignUP.classList.add("formCreate");
  VHead11.classList.add("hDer1");
  VHead21.classList.add("hDer1");
  btnText1.classList.add("hDer1");
  formSignUP.classList.remove("hidden");
  formVerde1.classList.remove("hidden");
  //
  formSignUP.classList.remove("formCreate2");
  formVerde.classList.remove("saltoIzq2");
  VHead1.classList.remove("hDer2");
  VHead2.classList.remove("hDer2");
  btnText1.classList.remove("hDer2");
  btnText.classList.remove("hDer2");
  formSignIN.classList.remove("formBlancaDer2");
});

btnSignUp1.addEventListener("click", () => {
  formVerde.classList.remove("saltoIzq");
  VHead1.classList.remove("hDer");
  VHead2.classList.remove("hDer");
  btnText.classList.remove("hDer");
  formSignIN.classList.remove("formBlancaDer");
  formSignUP.classList.remove("formCreate");
  VHead11.classList.remove("hDer1");
  VHead21.classList.remove("hDer1");
  btnText1.classList.remove("hDer1");

  formSignUP.classList.add("hidden");
  formVerde1.classList.add("hidden");

  //
  formSignUP.classList.add("formCreate2");
  formVerde.classList.add("saltoIzq2");
  VHead1.classList.add("hDer2");
  VHead2.classList.add("hDer2");
  btnText1.classList.add("hDer2");
  btnText.classList.add("hDer2");
  formSignIN.classList.add("formBlancaDer2");
});
