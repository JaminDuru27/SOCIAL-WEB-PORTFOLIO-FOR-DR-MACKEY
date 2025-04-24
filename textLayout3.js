function textLayout3({src, head, main, descr, btnsArray, to}){
    const res = {
        load(){
            this.element = document.createElement('div')  
            this.element.classList.add('textLayout3')
            this.element.classList.add('bg')
            this.element.style.backgroundImage = `url('${src}')`
            this.element.style.backgroundRepeat = `no-repeat`
            this.element.style.backgroundSize = `cover`
            let html = `
            <div class='wrap flex-center'>
            <div class="head">${head}</div>
            <div class="main">${main}</div>
            <div class="descr">${descr}</div>
            <div class='link1'>
            ` 
            btnsArray.forEach(btn=>{
                html += `
                <a class='glare'href="${btn[0]}">${btn[1]}</a>
                `
            })      
            html +=`</div></div>`
            this.element.innerHTML += html
            to.append(this.element)
        }
    }
    res.load()
    return res
}

tree['textLayout3'] = textLayout3