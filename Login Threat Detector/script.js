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


