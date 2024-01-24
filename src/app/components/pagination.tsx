import { LeftArrow } from "./svg/left_arrow";
import { RightArrow } from "./svg/right_arrow";
interface IProps {
    total:number;
    usersPerPage:number;
    currentPage:number;
    handlePageChange:(selectedPage:number)=>void;
}
export default function Pagination({
    total,
    usersPerPage,
    currentPage,
    handlePageChange
}:IProps) {
   const pageNumbers = [];
   for (let i = 1; i <= Math.ceil(total / usersPerPage); i++) {
     pageNumbers.push(i);
   }

   const handlePreviousClick = () => {
    if(currentPage > 1){
      handlePageChange(currentPage-1)
    }
   }
   
   const handleNextClick = () => {
    if(currentPage < total){
      handlePageChange(currentPage+1)
    }
   }

  return (
    <>
    {total > 0 ? 
    <div className="flex items-center justify-between 
    border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          onClick={handlePreviousClick}
          className="relative inline-flex items-center 
          rounded-md border border-gray-300 bg-white px-4 py-2 text-sm 
          font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          onClick={handleNextClick}
          className="relative ml-3 inline-flex items-center 
          rounded-md border border-gray-300 bg-white px-4 py-2 
          text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end">
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              onClick={handlePreviousClick}
              className="relative inline-flex items-center 
              rounded-l-md px-2 py-2 text-gray-400 ring-1
               ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <LeftArrow/>
             
            </a>
            {pageNumbers.map((eachPage=>{
             return(
              <a
              key={eachPage}
              onClick={()=>handlePageChange(eachPage)}
              aria-current="page"
              className={`
              relative z-10 
              inline-flex items-center ${currentPage === eachPage ?'bg-indigo-600':'bg-gray-600'}
               px-4 py-2 text-sm font-semibold
                text-white focus:z-20 focus-visible:outline 
                focus-visible:outline-2 focus-visible:outline-offset-2
                 focus-visible:outline-indigo-600 hover:cursor-pointer`}
            >
              {eachPage}
            </a>
                )
            }))}
            
            <a
              href="#"
              onClick={handleNextClick}
              className="relative inline-flex items-center 
              rounded-r-md px-2 py-2 text-gray-400 ring-1 
              ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <RightArrow />
            </a>
          </nav>
        </div>
      </div>
    </div>:''}
    </>
  )
}
