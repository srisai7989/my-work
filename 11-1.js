function checkQuiz() {
    const answers = {
        q1: "Bill Gates",
        q2: "H2O",
        q3: "JavaScript",
        q4: "Mars"
    };

    let score = 0;
    let total = 4;

    for (let key in answers) {
        let selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
            score++;
        }
    }

    document.getElementById("result").innerHTML = `<h3>You scored ${score} out of ${total}.</h3>`;
}