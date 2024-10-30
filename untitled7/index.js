// 1. Calculate Average and Grade
function calculateAverage() {
    const studentInputs = document.querySelectorAll("#studentInputs .input-group");
    let totalScore = 0;
    let studentCount = 0;

    studentInputs.forEach((inputGroup) => {
        const score = parseFloat(inputGroup.children[1].value);
        if (!isNaN(score)) {
            totalScore += score;
            studentCount++;
        }
    });

    if (studentCount === 0) {
        document.getElementById("averageGrade").innerText = "Please enter valid scores.";
        return;
    }

    const average = totalScore / studentCount;
    let grade;

    if (average >= 90) grade = 'A';
    else if (average >= 80) grade = 'B';
    else if (average >= 70) grade = 'C';
    else if (average >= 60) grade = 'D';
    else grade = 'F';

    document.getElementById("averageGrade").innerText = `Average Score: ${average.toFixed(2)}, Grade: ${grade}`;
}

// Function to add another student input field
function addStudentInput() {
    const studentInputs = document.getElementById("studentInputs");
    const newInput = document.createElement("div");
    newInput.classList.add("input-group", "mb-3");
    newInput.innerHTML = `
    <input type="text" class="form-control" placeholder="Student Name" required />
    <input type="number" class="form-control" placeholder="Score" required min="0" max="100" />
  `;
    studentInputs.appendChild(newInput);
}

// 2. Keydown Event Listener
document.getElementById("inputField").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        document.getElementById("enterMessage").innerText = "Enter key pressed!";
    }
});

// 3. Double Click Event Listener
document.getElementById("dblClickButton").addEventListener("dblclick", function () {
    document.getElementById("dblClickMessage").innerText = "Button was double-clicked!";
});

// 4. Progress Bar Update
let progress = 0;
function updateProgress() {
    if (progress < 100) progress += 20;
    document.getElementById("progressBar").style.width = `${progress}%`;
    document.getElementById("progressBar").setAttribute("aria-valuenow", progress);
}

// 5. FizzBuzz Generation with Bootstrap Styling
function generateFizzBuzz() {
    const fizzBuzzList = document.getElementById("fizzBuzzList");
    fizzBuzzList.innerHTML = ""; // Clear previous list

    for (let i = 1; i <= 100; i++) {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");

        if (i % 3 === 0 && i % 5 === 0) {
            listItem.textContent = "FizzBuzz";
            listItem.classList.add("bg-warning");
        } else if (i % 3 === 0) {
            listItem.textContent = "Fizz";
            listItem.classList.add("bg-success", "text-white");
        } else if (i % 5 === 0) {
            listItem.textContent = "Buzz";
            listItem.classList.add("bg-info", "text-white");
        } else {
            listItem.textContent = i;
        }

        fizzBuzzList.appendChild(listItem);
    }
}
