document.addEventListener('DOMContentLoaded', function () {
    const textoEntrada = document.getElementById('texto-entrada');
    const textoSalida = document.getElementById('texto-salida');
    const placeholderSalida = document.getElementById('placeholder-salida');
    const botonEncriptar = document.getElementById('boton-encriptar');
    const botonDesencriptar = document.getElementById('boton-desencriptar');
    const botonCopiar = document.getElementById('boton-copiar');

    const encriptar = (texto) => {
        return texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    };

    const desencriptar = (texto) => {
        return texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    };

    const filtrarTexto = (texto) => {
        return texto.toLowerCase().replace(/[^a-z\s]/g, '');
    };

    const actualizarPlaceholder = () => {
        if (textoEntrada.value.trim()) {
            placeholderSalida.style.display = 'none';
        } else {
            placeholderSalida.style.display = 'block';
            textoSalida.value = '';
            botonCopiar.style.display = 'none';
        }
    };

    textoEntrada.addEventListener('input', () => {
        textoEntrada.value = filtrarTexto(textoEntrada.value);
        actualizarPlaceholder();
    });

    botonEncriptar.addEventListener('click', () => {
        const textoEncriptado = encriptar(textoEntrada.value);
        textoSalida.value = textoEncriptado;
        placeholderSalida.style.display = 'none';
        botonCopiar.style.display = 'block';
    });

    botonDesencriptar.addEventListener('click', () => {
        const textoDesencriptado = desencriptar(textoEntrada.value);
        textoSalida.value = textoDesencriptado;
        placeholderSalida.style.display = 'none';
        botonCopiar.style.display = 'block';
    });

    botonCopiar.addEventListener('click', () => {
        textoSalida.select();
        document.execCommand('copy');
    });

    actualizarPlaceholder();  // Para actualizar el estado inicial
});
