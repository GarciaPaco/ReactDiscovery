import React from 'react';
import {Pagination} from "../../services/pagination/pagination.dto";

export function PaginationComponent(props: Pagination) {

    let per_page = !props.per_page ? 0 :props.per_page;
    let page = !props.page ? 0 : props.page;
    let total_pages = !props.total_pages ? 0 : props.total_pages;
    let userInf = per_page * (page - 1) + 1;
    let userSup = per_page * page;
    let nextPage = 0;
    let previousPage = 0;
    let notLastPage = 1;
    const refresh = props.refresh ? props.refresh : (page:number) => {};

    if (page + 1 > total_pages ){
        nextPage = page;
        notLastPage = 0;
    } else {
      nextPage = page + 1;
    }
    if (page - 1 < 1) {
        previousPage = 0;
    } else {
        previousPage = page - 1;
    }

const bouttonNext = (<button onClick={()=>refresh(page+1)}>{nextPage}</button>);
const bouttonPrev = (<button onClick={()=>refresh(page-1)}>{previousPage}</button>);
    return (
        <div className='Pagination'>
            <p>Utilisateur {userInf} à {userSup} </p>
            {previousPage === 0 ? '': bouttonPrev}
            <button disabled>{props.page}</button>
            {notLastPage === 0 ? '' : bouttonNext}
            <p>Total page : {props.total_pages}</p>
        </div>

    );
}
