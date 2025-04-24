function textSection2({to, text}){
    const res = {
        load(){
            this.element = document.createElement('h1')
            this.element.classList.add(`textSection2`)
            this.element.textContent = text
            to.append(this.element)
        }
    }
    res.load()
    return res   
}
tree['sectiontitle2'] = textSection2