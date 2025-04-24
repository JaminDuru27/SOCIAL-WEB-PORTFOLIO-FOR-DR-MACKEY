function sectionTitle({text}){
    const res = {
        load(){
            this.element = document.createElement('h1')
            this.element.classList.add('h1')
            this.element.textContent = text
            document.body.append(this.element)
        }
    }
    res.load()
    return res
}

tree['sectionTitle'] = sectionTitle