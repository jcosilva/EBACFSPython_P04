document.addEventListener('DOMContentLoaded', function() {
    const QuestionButtonClose = document.querySelectorAll('[data-btn-close]');
    const QuestionButtonOpen = document.querySelectorAll('[data-btn-open]');

    for (let i = 0; i < QuestionButtonClose.length; i++) {
        QuestionButtonClose[i].addEventListener('click', function(botao) {
            const TargetNumber = botao.target.dataset.btnClose;

            const AnswerBox = document.querySelector(`[data-answer-box=${TargetNumber}]`);
            AnswerBox.classList.remove('faq__questions__item__answer-opened');
            AnswerBox.classList.add('faq__questions__item__answer-closed');

            const AnswerCloseSign = document.querySelector(`[data-btn-close=${TargetNumber}]`);
            AnswerCloseSign.style.display = 'none';

            const AnswerOpenSign = document.querySelector(`[data-btn-open=${TargetNumber}]`);
            AnswerOpenSign.style.display = '';
        })
    }

    for (let i = 0; i < QuestionButtonOpen.length; i++) {
        QuestionButtonOpen[i].addEventListener('click', function(botao) {
            const TargetNumber = botao.target.dataset.btnOpen;

            const AnswerBox = document.querySelector(`[data-answer-box=${TargetNumber}]`);
            AnswerBox.classList.remove('faq__questions__item__answer-closed');
            AnswerBox.classList.add('faq__questions__item__answer-opened');

            const AnswerCloseSign = document.querySelector(`[data-btn-close=${TargetNumber}]`);
            AnswerCloseSign.style.display = '';

            const AnswerOpenSign = document.querySelector(`[data-btn-open=${TargetNumber}]`);
            AnswerOpenSign.style.display = 'none';
        })
    }
})