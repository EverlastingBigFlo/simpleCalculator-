class calculator{
    screen;
    id;
    element;
    color;

    constructor(element,color){
        this.element = element;
        this.id = element.id;
        this.color = color;
        this.display()
    }

    display(){
        this.element.innerHTML = 
        `<input type="text" disabled>
        <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
            <button>*</button>
            <button>-</button>
            <button>+</button>
            <button>=</button>
        </div>
        `

        this.screen = document.querySelector('#'+this.id+'input');
        let btns = document.querySelectorAll('#'+this.id+'button')
        btns.forEach((el)=>{
            el.addEventListener('click',(e)=>{
                if(e.target.innerHTML == '='){
                    try{
                        this.screen.value = eval(this.screen.value)
                    }catch(e){
                        alert('Invalid operation')
                        this.screen.value = ''
                    }
                    return;
                }
                this.screen.value += e.target.innerHTML
            })
        })
    }
}

new calculator(document.querySelector('#show'))