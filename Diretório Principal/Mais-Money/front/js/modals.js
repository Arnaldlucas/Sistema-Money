document.addEventListener('DOMContentLoaded', () => {
    const openBtnDespesa = document.getElementById("modal-despesa");
    const modalDespesa = document.getElementById("modalDialog");
    const closeBtnDespesa = document.getElementById("closeBtn");
    const backdropDespesa = document.getElementById("backdrop");

    openBtnDespesa.onclick = function() {
        backdropDespesa.style.display = 'block';
        modalDespesa.style.display = 'block';
    };

    closeBtnDespesa.onclick = function() {
        backdropDespesa.style.display = 'none';
        modalDespesa.style.display = 'none';
    };

    backdropDespesa.onclick = function() {
        backdropDespesa.style.display = 'none';
        modalDespesa.style.display = 'none';
    };

    const openBtnGanho = document.getElementById("modal-ganho");
    const modalGanho = document.querySelector("dialog");
    const closeBtnGanho = document.getElementById("fechar");
    const fundoPreto = document.getElementById("fundoBorrado");

    openBtnGanho.onclick = function () {
        modalGanho.showModal();
    };

    closeBtnGanho.onclick = function () {
        modalGanho.close();
    };

    fundoPreto.onclick = function() {
        fundoPreto.style.display = 'none';
        modalGanho.close();
    };

    const openBtnReceita = document.getElementById("abrir-receita");
    const modalReceita = document.getElementById("dialog-receita");
    const closeBtnReceita = document.getElementById("x-receita");

    openBtnReceita.onclick = function () {
        modalReceita.showModal();
    };

    closeBtnReceita.onclick = function () {
        modalReceita.close();
    };



   
});
