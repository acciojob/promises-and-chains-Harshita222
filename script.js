document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = document.getElementById('age').value;
    const name = document.getElementById('name').value;

    if (!age || !name) {
        alert('Please enter valid details');
        return;
    }

    validateAge(age, name)
        .then(message => alert(message))
        .catch(error => alert(error));
});

function validateAge(age, name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    });
}
