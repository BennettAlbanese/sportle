
document.getElementById('guessForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const correctDate = {
        year: 1999,
        month: 6,
        day: 24
    };
    
    const guessedYear = parseInt(document.getElementById('year').value);
    const guessedMonth = parseInt(document.getElementById('month').value);
    const guessedDay = parseInt(document.getElementById('day').value);
    
    let feedback = '';
    
    // Year feedback
    if (guessedYear === correctDate.year) {
        feedback += '<span style="color: green;">Year: ' + guessedYear + '</span><br>';
    } else if (Math.abs(guessedYear - correctDate.year) <= 5) {
        feedback += '<span style="color: yellow;">Year: ' + guessedYear + '</span><br>';
    } else {
        feedback += '<span style="color: gray;">Year: ' + guessedYear + '</span><br>';
    }
    
    // Month feedback
    if (guessedMonth === correctDate.month) {
        feedback += '<span style="color: green;">Month: ' + guessedMonth + '</span><br>';
    } else if (Math.abs(guessedMonth - correctDate.month) <= 3) {
        feedback += '<span style="color: yellow;">Month: ' + guessedMonth + '</span><br>';
    } else {
        feedback += '<span style="color: gray;">Month: ' + guessedMonth + '</span><br>';
    }
    
    // Day feedback
    if (guessedDay === correctDate.day) {
        feedback += '<span style="color: green;">Day: ' + guessedDay + '</span><br>';
    } else if (Math.abs(guessedDay - correctDate.day) <= 30) {
        feedback += '<span style="color: yellow;">Day: ' + guessedDay + '</span><br>';
    } else {
        feedback += '<span style="color: gray;">Day: ' + guessedDay + '</span><br>';
    }
    
    document.getElementById('feedback').innerHTML = feedback;
});
