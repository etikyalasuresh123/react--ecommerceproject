import './Pagination.css';

function Pagination ({products, pageHandler}){

    let pageNumbers = [];
    for(let i=1; i< Math.ceil(products.length/5)+1; i++){
        pageNumbers.push(i);
    }

    
    return (
        <div>
           {pageNumbers.map(page => <span className="flex-container" onClick={() => pageHandler(page)}>{page}</span>)}
        </div>
    )
}
export default Pagination;