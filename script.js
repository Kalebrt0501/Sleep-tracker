let totalHours = 0;

document.getElementById('addSleep').addEventListener('click', function() {
    let hours = parseInt(document.getElementById('hours').value);

    if (!isNaN(hours)) {
        totalHours += hours;
        document.getElementById('totalHours').textContent = totalHours;
        updateStatus(hours);
    } else {
        alert('Enter a valid number');
    }
});

document.getElementById('resetSleep').addEventListener('click', function() {
    totalHours = 0;
    document.getElementById('totalHours').textContent = totalHours;
    document.getElementById('statusMessage').textContent = ""; 
    document.getElementById('statusMessage').className = "";
});

function updateStatus(hours) {
    let statusMessage = document.getElementById('statusMessage');

    if (hours >= 9) {
        statusMessage.textContent = "You need to cut back to 8 hours";
        statusMessage.className = "warning";
        
    }else if (hours === 8) {
        statusMessage.textContent = "You are getting good sleep";
        statusMessage.className = "good";
    } else if (hours === 7) {
        statusMessage.textContent = "Go to bed a little earlier";
        statusMessage.className = "warning";
    } else {
        statusMessage.textContent = "Try to find time to take a nap";
        statusMessage.className = "bad";
    }
}
