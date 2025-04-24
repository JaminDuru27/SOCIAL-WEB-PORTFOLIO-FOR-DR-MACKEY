function textLayout2({src, head, main, descr, btnsArray}){
    const res = {
        load(){
            this.element = document.createElement('div')
            this.element.classList.add('textLayout2')
            this.element.style.backgroundImage = `url("${src}")`
            this.element.innerHTML +=  `
            <div class="wrap right flex column flexStart">
                <div class="head">${head}</div>
                <div class="main">${main}</div>
                <div class="descr">${descr}</div>
            </div>
            `
            const awrap = document.createElement('div')
            awrap.classList.add(`awrap`)
            awrap.classList.add(`social1`)
            btnsArray.forEach(arr=>{
                awrap.innerHTML += `
                <a href="${arr[0]}">${arr[1]}</a>
                `
            })
            this.element.querySelector(`.wrap`).append(awrap)

            document.body.append(this.element)
        }
    }
    res.load()
    return res
}


tree['textLayout2'] = textLayout2