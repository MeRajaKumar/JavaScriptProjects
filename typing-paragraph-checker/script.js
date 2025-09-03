let startTime, endTime;
const paragraph = document.getElementById("paragraph").innerText;
const inputBox = document.getElementById("inputBox");
const resultModal = document.getElementById("resultModal");
const resultText = document.getElementById("resultText");

inputBox.addEventListener("input", function() {
    if (!startTime) startTime = new Date();
    if (inputBox.value === paragraph) {
        endTime = new Date();
        let timeTaken = (endTime - startTime) / 1000;
        let wordCount = paragraph.trim().split(/\s+/).length;
        
        // Show the modal with results
        resultText.innerHTML = `Time Taken: <strong>${timeTaken}</strong> seconds<br>Word Count: <strong>${wordCount}</strong>`;
        resultModal.style.display = "block";
    }
});

function resetTest() {
    inputBox.value = "";
    startTime = null;
    endTime = null;
}

function closeModal() {
    resultModal.style.display = "none";
    resetTest();
}