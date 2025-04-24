function testimonials({to, worddecrimgarray}){
    const res = {
        load(){
            console.log(to)
            this.element = document.createElement('div')
            this.element.classList.add('testimonials')
            worddecrimgarray.forEach(arr=>{
                const word = arr[0]
                const descr = arr[1]
                const src = arr[2]
                const div = document.createElement('div')
                div.classList.add('card'    )
                div.innerHTML += `
                <img src = '${src}'>
                <div class ='word'>${word}</div>
                <div class ='descr'>${descr}</div>
                `
                this.element.append(div)
            })
            to.append(this.element)
        }
    }
    res.load()
    return res
}
tree['testimonials'] = testimonials