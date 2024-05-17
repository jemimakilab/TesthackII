const lines = [
    "[INFO] Connecting to server 192.168.1.1...",
    "[INFO] Connection established.",
    "[INFO] Bypassing security protocols...",
    "[INFO] Access granted to root directory.",
    "[INFO] Extracting data...",
    "[INFO] Data extraction complete.",
    "[INFO] Injecting malicious code...",
    "[INFO] Code injection successful.",
    "[INFO] Initiating system override...",
    "[INFO] System override complete.",
    "[INFO] Logging off...",
    "[DEBUG] <User>: Authentication required.",
    "[DEBUG] <System>: Authentication granted.",
    "[DEBUG] <Root>: Access to secure vault.",
    "[WARN] Unauthorized access detected.",
    "[WARN] Security breach at 0x1F4A9.",
    "[ERROR] System integrity compromised.",
    "[ERROR] Unable to restore security settings.",
    "[INFO] Shutting down all connections...",
    "[INFO] Re-routing network traffic...",
    "[DEBUG] <Admin>: Requesting backup.",
    "[DEBUG] <Firewall>: Rules updated.",
    "[INFO] Data transmission initiated.",
    "[INFO] Data transmission completed.",
    "[ERROR] Unexpected termination of process.",
    "[ERROR] Kernel panic: fatal error.",
    "[DEBUG] <User>: Restarting services...",
    "[DEBUG] <Root>: Verifying data integrity...",
    "[INFO] Clean up in progress...",
    "[INFO] Cleanup complete.",
    "[DEBUG] <System>: Ready for next command.",
    "[INFO] Backup system online.",
    "[WARN] Potential threat detected.",
    "[ERROR] Threat level: CRITICAL.",
    "[INFO] Initializing countermeasures...",
    "[INFO] Countermeasures failed.",
    "[ERROR] System override in progress...",
    "[ERROR] System override complete.",
    "[INFO] Attempting last resort...",
    "[INFO] Last resort successful.",
    "[INFO] Disconnecting from server...",
    "[INFO] Disconnection complete.",
    "[DEBUG] <Root>: Finalizing operations.",
    "[DEBUG] <System>: All operations complete.",
];

function typeText(text, element, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, Math.random() * 50);  // Random typing speed
        } else if (callback) {
            callback();
        }
    }
    type();
}

function displayHackerText() {
    const outputElement = document.getElementById('output');
    let currentIndex = 0;

    function typeNextLine() {
        if (currentIndex < lines.length) {
            typeText(lines[currentIndex] + '\n', outputElement, typeNextLine);
            currentIndex++;
        } else {
            setTimeout(() => {
                typeText('\nHacking complete! ', outputElement, () => {
                    const completeText = document.createElement('span');
                    completeText.classList.add('complete');
                    typeText('SYSTEM INJECTED', completeText, () => {
                        outputElement.appendChild(completeText);
                        setTimeout(() => {
                            const hackerMessage = document.createElement('div');
                            hackerMessage.classList.add('hacker-message');
                            typeText('\nHacked by Jemima, your system will never go back.', hackerMessage, () => {
                                outputElement.appendChild(hackerMessage);
                            });
                        }, 3000);  // Wait 3 seconds before showing the hacker message
                    });
                });
            }, 3000);  // Wait 3 seconds before "Hacking complete! SYSTEM INJECTED" appears
        }
    }

    typeNextLine();
}

document.getElementById('startButton').addEventListener('click', () => {
    document.getElementById('startButton').classList.add('hidden');
    const outputElement = document.getElementById('output');
    outputElement.style.display = 'block';
    displayHackerText();
});
