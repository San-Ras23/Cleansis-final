const form = document.getElementById('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const respuesta = await fetch('https://sheet.best/api/sheets/9e2b910a-a773-4f7d-b1b2-c9fafb21efe1', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Nombre": form.name.value,
            "Email": form.email.value,
            "Message": form.message.value
        })
    });

    console.log(respuesta);
});
