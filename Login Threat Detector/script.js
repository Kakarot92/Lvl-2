function loginThreatDetector(failedAttempts, unusualLocation, recognizedDevice) {
    if (failedAttempts >= 5) {
        return "Account Locked";
    } else if (unusualLocation === true && recognizedDevice === false) {
        return "Suspicious";
    } else if (unusualLocation === true && failedAttempts >= 3) {
        return "Suspicious";
    }
    
    else {
        return "Login Approved";
    }
}


let number = document.getElementById("failedAttempts");
let spot = document.getElementById("unusualLocation");
let device = document.getElementById("recognizedDevice");
let result = document.getElementById("result");

let scanBtn = document.getElementById("scanBtn");

scanBtn.addEventListener("click", function() {
    let numberOfTry = parseInt(number.value);
    let isUnusualLocation = spot.checked;
    let isRecognizedDevice = device.checked;
    let threatLevel = loginThreatDetector(numberOfTry, isUnusualLocation, isRecognizedDevice);
    result.textContent = threatLevel;
});