const invoice = document.getElementById('invoice');
const graph = document.getElementById('graph');

const invoicecontainer = document.getElementById('invoicecontainer');
const graphcontainer = document.getElementById('graphcontainer');

// console.log(graphcontainer);

graph.addEventListener('click',()=>{
  graphcontainer.classList.remove('active');
  invoicecontainer.classList.add('active'); 
});

invoice.addEventListener('click',()=>{
  invoicecontainer.classList.remove('active');
  graphcontainer.classList.add('active');
});

