document.getElementById('dniForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores introducidos por el usuario
    const dni = document.getElementById('dni').value;
    const letraUsuario = document.getElementById('letra').value.toUpperCase();

    // Array de letras correspondiente
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    // Comprobar que el número de DNI es válido
    if (dni < 0 || dni > 99999999 || isNaN(dni)) {
        document.getElementById('resultado').textContent = "El número de DNI proporcionado no es válido.";
        document.getElementById('resultado').classList.add('visible');
        return;
    }

    // Calcular la letra correspondiente
    const indiceLetra = dni % 23;
    const letraCalculada = letras[indiceLetra];

    // Comparar la letra proporcionada por el usuario con la calculada
    if (letraCalculada !== letraUsuario) {
        document.getElementById('resultado').textContent = `La letra que has indicado no es correcta. La letra correcta es ${letraCalculada}.`;
    } else {
        document.getElementById('resultado').textContent = "El número y la letra de DNI son correctos.";
    }

    document.getElementById('resultado').classList.add('visible');
});
