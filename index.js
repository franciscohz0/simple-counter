class Contador {
    constructor(elemento) {
        this.elemento = elemento;
        this.contador = Number(localStorage.getItem('contador')) || 0;
        this.iniciar();
    }

    sumar = () => {
        this.contador += 5;
        this.elemento.textContent = this.contador;
        localStorage.setItem('contador', this.contador);
    }

    restar = () => {
        this.contador -= 5;
        this.elemento.textContent = this.contador;
        localStorage.setItem('contador', this.contador);
    }

    iniciar = () => {
        this.elemento.textContent = this.contador;
        document.addEventListener('keydown', (event) => {
            if (event.code === 'Space') {
                this.sumar();
            } else if (event.code === 'Delete') {
                this.restar();
            }
        });
    }
}

const contador = new Contador(document.getElementById('contador'));
