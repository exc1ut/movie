import classes from "./Pagination.module.css";
import React from 'react';
import { AppState, useAppSelector } from "../../store/store";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../store/reducers/catalogNav";
interface IProps {
    pageCount: number;

}
const Pagination = ({ pageCount }) => {
    const number = pageCount;
    const storeState = useAppSelector((state: AppState) => {
        return state;
    });
    const dispatch = useDispatch();
    console.log("CP: " + storeState.catalogNav.currentPage);
    const currentPage = storeState.catalogNav.currentPage;
    const quantity = number;
    const pagArray = new Array(quantity).fill(1);
    return (
        <div className={classes.Pagination}>

            {pagArray.map((item, index) => {
                return <div
                    onClick={() => dispatch(setCurrentPage(index + 1))}
                    className={currentPage === index + 1 ? classes.Current : classes.Box}
                >{index + 1}</div>
            })}
        </div>
    );
}

export default Pagination;
