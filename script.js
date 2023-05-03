// class Calculator{
//     screen;
//     id;
//     element;
//     color;

//     constructor(element,color){
//         this.element = element;
//         this.id = element.id;
//         this.color = color;
//         this.display()
//     }

//     display(){
//         this.element.innerHTML = 
//         `<input type="text" disabled>
//         <div>
//             <button class="btn ${this.color}">1</button>
//             <button class="btn ${this.color}">2</button>
//             <button class="btn ${this.color}">3</button>
//             <button class="btn ${this.color}">4</button>
//             <button class="btn ${this.color}">5</button>
//             <button class="btn ${this.color}">6</button>
//             <button class="btn ${this.color}">7</button>
//             <button class="btn ${this.color}">8</button>
//             <button class="btn ${this.color}">9</button>
//             <button class="btn ${this.color}">0</button>
//             <button class="btn ${this.color}">*</button>
//             <button class="btn ${this.color}">-</button>
//             <button class="btn ${this.color}">+</button>
//             <button class="btn ${this.color}">=</button>
//         </div>
//         `

//         this.screen = document.querySelector('#'+this.id+'input');
//         let btns = document.querySelectorAll('#'+this.id+'button');
//         btns.forEach((el)=>{
//             el.addEventListener('click',(e)=>{
//                 if(e.target.innerHTML == '='){
//                     try{
//                         this.screen.value = eval(this.screen.value)
//                     }catch(e){
//                         alert('Invalid operation')
//                         this.screen.value = ''
//                     }
//                     return;
//                 }
//                 this.screen.value += e.target.innerHTML;
//             })
//         })
//     }
// }

// new Calculator(document.querySelector('#show'),'btn-success')



class Calculator{
      screen;
      id;
      element;
      color;
        constructor(element, color){
          // console.log(this.color);
          this.element=element;
          this.id=element.id;
          this.color=color;
        
          this.display()

        }

        display(){
          this.element.innerHTML=`
          <input type="text" class="mt-3 p-3 w-50">
          <div class="mb-3 ">
            <button class='btn p-4 ${this.color}'>1</button>
            <button class='btn p-4 ${this.color}'>2</button>
            <button class='btn p-4 ${this.color}'>3</button>
            <button class='btn p-4 ${this.color}'>4</button>
            <button class='btn p-4 ${this.color}'>5</button>
            <button class='btn p-4 ${this.color}'>6</button>
            <button class='btn p-4 ${this.color}'>7</button>
            <button class='btn p-4 ${this.color}'>8</button>
            <button class='btn p-4 ${this.color}'>9</button>
            <button class='btn p-4 ${this.color}'>0</button>
            <button class='btn p-4 ${this.color}'>+</button>
            <button class='btn p-4 ${this.color}'>-</button>
            <button class='btn p-4 ${this.color}'>*</button>
            <button class='btn p-4 ${this.color}'>/</button>
            <button class='btn p-4 ${this.color}'>=</button>
          </div>  
          `
          this.screen=document.querySelector("#"+this.id+" input");
          let btns=document.querySelectorAll("#"+this.id+" button")
          btns.forEach((el)=>{
            el.addEventListener("click",(e)=>{
              if (e.target.innerHTML=="=") {
                try{
                  this.screen.value=eval(this.screen.value)
                }catch(e){
                  alert("invalid operation")
                  this.screen.value=""
                }
                return
              }
              this.screen.value+=e.target.innerHTML
            })
          })
        }
    }

    new Calculator(document.querySelector("#show1"),' btn-success')
    new Calculator(document.querySelector("#show2"), 'btn-info')

