import React, { Component } from 'react';

class ScrambleText extends Component{
    constructor(){
        super();
        this.chars = ';,"\'()!<>-+/[]{}=*%#_';
        this.phrases = ['Data Engineer', 'Computer Science Undergraduate', 'Avid Programmer'];
        this.textContainer = <div className="scrambleText"/>;
        this.update = this.update.bind(this)
    }

    render(){
        return(
            this.textContainer
        );
    }
    setText(newText) {
        const oldText = this.scrambleElement.innerText;
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 40)
            const end = start + Math.floor(Math.random() * 40)
            this.queue.push({ from, to, start, end })
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }
    update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i]
            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue[i].char = char
                }
                output += `<span class="dud">${char}</span>`
            } else {
                output += from
            }
        }
        this.scrambleElement.innerHTML = output
        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }

    componentDidMount() {
        this.scrambleElement = document.querySelector('.scrambleText');
        let counter = 0;
        const next = () => {
            this.setText(this.phrases[counter]).then(() => {
                setTimeout(next, 800)
            })
            counter = (counter + 1) % this.phrases.length
        };
        next();
    }
}

export default ScrambleText;





