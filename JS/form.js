function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

window.onload = function() {
    const model = getQueryParam('model');
    if (model) {
        document.getElementById('modele').value = model;
        document.getElementById('type_question').value = 'louer';
        toggleQuestionField();
    }
}

function toggleQuestionField() {
    const questionType = document.getElementById('type_question').value;
    const modelSection = document.getElementById('model-section');
    const otherQuestionSection = document.getElementById('other-question-section');

    if (questionType === 'louer') {
        modelSection.style.display = 'block';
        otherQuestionSection.style.display = 'none';
    } else if (questionType === 'contacter') {
        modelSection.style.display = 'none';
        otherQuestionSection.style.display = 'block';
    }else {
      modelSection.style.display = 'none';
        otherQuestionSection.style.display = 'none';
    }
}