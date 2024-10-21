document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    document.getElementById('usernameDisplay').innerText = username;
    
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    let iterations = 0;

    function printArray(arr) {
        let groupsHtml = `
            <div class="column">Group One:<br>`;
        for (let i = 0; i < 7; i++) {
            groupsHtml += arr[i] + '<br>';
        }
        groupsHtml += `</div><div class="column">Group Two:<br>`;
        for (let i = 7; i < 14; i++) {
            groupsHtml += arr[i] + '<br>';
        }
        groupsHtml += `</div><div class="column">Group Three:<br>`;
        for (let i = 14; i < arr.length; i++) {
            groupsHtml += arr[i] + '<br>';
        }
        groupsHtml += '</div>';
        document.getElementById('numberGroups').innerHTML = groupsHtml;
    }

    function updateRoundMessage(iteration) {
        let message = '';
        if (iteration === 1) {
            message = 'Second time';
        } else if (iteration === 2) {
            message = 'Please select one last time';
        }
        document.getElementById('roundMessage').innerText = message;
    }

    function performEdits(arr, choice) {
        let temp = new Array(arr.length);
        if (choice == 1) {
            temp[0] = arr[7];
            temp[7] = arr[8];
            temp[14] = arr[9];
            temp[1] = arr[10];
            temp[8] = arr[11];
            temp[15] = arr[12];
            temp[2] = arr[13];
            temp[9] = arr[0];
            temp[16] = arr[1];
            temp[3] = arr[2];
            temp[10] = arr[3];
            temp[17] = arr[4];
            temp[4] = arr[5];
            temp[11] = arr[6];
            temp[18] = arr[14];
            temp[5] = arr[15];
            temp[12] = arr[16];
            temp[19] = arr[17];
            temp[6] = arr[18];
            temp[13] = arr[19];
            temp[20] = arr[20];
        } else if (choice == 2) {
            temp[0] = arr[0];
            temp[7] = arr[1];
            temp[14] = arr[2];
            temp[1] = arr[3];
            temp[8] = arr[4];
            temp[15] = arr[5];
            temp[2] = arr[6];
            temp[9] = arr[7];
            temp[16] = arr[8];
            temp[3] = arr[9];
            temp[10] = arr[10];
            temp[17] = arr[11];
            temp[4] = arr[12];
            temp[11] = arr[13];
            temp[18] = arr[14];
            temp[5] = arr[15];
            temp[12] = arr[16];
            temp[19] = arr[17];
            temp[6] = arr[18];
            temp[13] = arr[19];
            temp[20] = arr[20];
        } else {
            temp[0] = arr[7];
            temp[7] = arr[8];
            temp[14] = arr[9];
            temp[1] = arr[10];
            temp[8] = arr[11];
            temp[15] = arr[12];
            temp[2] = arr[13];
            temp[9] = arr[14];
            temp[16] = arr[15];
            temp[3] = arr[16];
            temp[10] = arr[17];
            temp[17] = arr[18];
            temp[4] = arr[19];
            temp[11] = arr[20];
            temp[18] = arr[0];
            temp[5] = arr[1];
            temp[12] = arr[2];
            temp[19] = arr[3];
            temp[6] = arr[4];
            temp[13] = arr[5];
            temp[20] = arr[6];
        }
        return temp;
    }

    document.getElementById('submitGroup').addEventListener('click', function() {
        const choice = parseInt(document.getElementById('groupSelect').value);
        array = performEdits(array, choice);
        iterations++;
        if (iterations < 3) {
            updateRoundMessage(iterations);  // Update message based on iteration
            printArray(array);
        } else {
            document.getElementById('gameArea').style.display = 'none';
            document.getElementById('result').style.display = 'block';
            document.getElementById('result').innerText = 'The number you imagined is: ' + array[10];
        }
    });

    updateRoundMessage(iterations);  // Initialize the first message if needed
    printArray(array);
});
