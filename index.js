const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = question.querySelector('.btn');

  btn.addEventListener('click', () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove('show_text');
      }
    });
    question.classList.toggle('show_text');
  });
});
