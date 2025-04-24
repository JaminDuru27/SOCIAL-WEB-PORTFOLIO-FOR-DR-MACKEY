function progressBar({to, color = "#fff", width = 200}){
    const res = {
        value: 0,
        getValue(){
            this.bodyH = document.body.getBoundingClientRect().height
            this.lastElement = document.body.querySelector('footer')
            const b = this.lastElement.getBoundingClientRect()
            const step = (b.y - b.height) / 100
            console.log(((b.y - b.height)/step))
            window.addEventListener(`scroll`, (e)=>{
                const b = res.lastElement.getBoundingClientRect()
                const perc = b.y /100 
                if(perc < 0)prec  = 0
                res.value = perc
                res.updateValue()
            })
        },
        updateValue(){
            this.bar.style.width = `${this.value}%`
            this.bar.textContent = `${this.value}%`
        },
        load(){
            this.element = document.createElement('div')
            this.element.classList.add('progressBar')
            this.element.style.width = 200 + `px`
            this.element.style.height = 20 + `px`
            this.bar = document.createElement('div')
            this.bar.classList.add('bar')
            this.element.append(this.bar)
            to.append(this.element)
            setTimeout(()=>{
                this.getValue()
                this.updateValue()
            },100)
        }
    }
    res.load()

    
    return res
}
tree['progressBar'] = progressBar