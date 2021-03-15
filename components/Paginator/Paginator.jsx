import styles from "../Users/users.module.css";
import React, {useState} from "react";
import cn from 'classnames'

export let Paginator = (props) => {
    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize)
    let pages = []
    for (let x=1; x<=pagesCount; x++) {
        pages.push(x)
    }
    let portionSize = 20
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize



    return <div>
        <div className={styles.paginWindow}>
        { portionNumber > 1 &&
        <a style={{marginRight: 7}} className={styles.pagin} onClick={() => { setPortionNumber(portionNumber - 1) }}>« </a> }
<span>
        {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {

                return <span className={ cn({
                    [styles.activePage]: props.currentPage === p
                }, styles.pagin) }
                             key={p}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
</span>
        { portionCount > portionNumber &&
        <a style={{marginLeft: 7}} className={styles.pagin} onClick={() => { setPortionNumber(portionNumber + 1) }}> »</a> }
<a className={ cn({
    [styles.activePage]: props.currentPage === pagesCount
}, styles.pagin) } onClick={() => props.onPageChanged(pagesCount)}>{pagesCount}</a>
        </div>






</div>
}