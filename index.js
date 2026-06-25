class Counter {
    constructor(element) {
        this.element = element;
        this.count = Number(localStorage.getItem('count')) || 0;
        this.init();
    }

    increment = () => {
        this.count += 5;
        this.element.textContent = this.count;
        localStorage.setItem('count', this.count);
    }

    decrement = () => {
        this.count -= 5;
        this.element.textContent = this.count;
        localStorage.setItem('count', this.count);
    }

    init = () => {
        this.element.textContent = this.count;
        document.addEventListener('keydown', (event) => {
            if (event.code === 'Space') {
                this.increment();
            } else if (event.code === 'Delete') {
                this.decrement();
            }
        });
    }
}

const counter = new Counter(document.getElementById('counter'));
