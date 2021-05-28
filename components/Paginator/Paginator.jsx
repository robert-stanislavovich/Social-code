import styles from "../Users/users.module.css";
import React, {useState} from "react";
import cn from 'classnames'
import Button from "@material-ui/core/Button";

export let Paginator = (props) => {
    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize)
    let pages = []
    for (let x=1; x<=pagesCount; x++) {
        pages.push(x)
    }
    let portionSize = 10
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return <div>
        <div className={styles.paginWindow}>

            <Button size="small" onClick={() => {
                portionNumber > 1 && setPortionNumber(portionNumber - 1)
            }}>
                ◁
            </Button>
            <span>
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <Button fullWidth={false} size="small" className={cn({
                    [styles.activePage]: props.currentPage === p
                }, styles.pagin)}
                             key={p}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>
                            {p}
                        </Button>
            })}
                        </span>
            {portionCount > portionNumber &&
            <Button fullWidth={false} size="small" onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}> ▷</Button>} <Button fullWidth={false} size="small" className={cn({
                [styles.activePage]: props.currentPage === pagesCount
            }, styles.pagin)} onClick={() => props.onPageChanged(pagesCount)}>{pagesCount}</Button>
        </div>






</div>
}

/*return <span className={cn({
                    [styles.activePage]: props.currentPage === p
                }, styles.pagin)}
                             key={p}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>
                            {p}
                        </span>

 */