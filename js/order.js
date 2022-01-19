const orders = document.querySelectorAll('.orders');
const todays = document.querySelector('.todays');
const yesterdays = document.querySelector('.yesterdays');

orders.forEach((order)=>{
    order.addEventListener('click',(e)=>{
        let datafilter = order.getAttribute('data-filter');
        // console.log(datafilter);
        removeactive();
        e.target.classList.add('active');

        if(datafilter === 'today'){
            todays.style.display = 'inline-block';
            yesterdays.style.display = 'none';
        }else{
            yesterdays.style.display = 'inline-block';
            todays.style.display = 'none';
        }

    });
});


function removeactive(){
    orders.forEach(order=>{
        order.classList.remove('active');
    });
}
