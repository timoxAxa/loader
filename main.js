let form = document.forms.reg
let needInps = document.querySelectorAll('.required')
let allInputs = form.querySelectorAll('input')
let error_view = document.querySelector('.error')
let success_view = document.querySelector('.success')
let need_view = document.querySelector('.need')
let all_view = document.querySelector('.all')



document.body.onload = function(){

    setTimeout(function() 
{
    var preloader = document.getElementById('page-preloader');

    if( !preloader.classList.contains('done')){
        preloader.classList.add('done');
    }

}, 1000);
}






all_view.innerHTML = `All: ${allInputs.length}`
need_view.innerHTML = `Need: ${needInps.length}`


form.onsubmit = (event) => {
    event.preventDefault()
    let error = 0 

    needInps.forEach(lbl => {
        let inp = lbl.querySelector('input')
        lbl.classList.remove('invalid')

        if(inp.value.length === 0) {
            lbl.classList.add('invalid')
            error++
        }
    })

    error_view.innerHTML = `Error: ${error}`
    success_view.innerHTML = `Success: ${needInps.length - error}`


    if(error > 0) {
        alert('Кто ты, воин?')
    } else {
        submit()
    }
}


function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    // console.log(user);
}
