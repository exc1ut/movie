import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useAppSelector } from "../store/store";
import { useDispatch } from "react-redux";
import { setArrayAuthor } from "../store/reducers/catalogNav";
const fetchData = () => {
	const data = axios.get(
		`https://newsapi.org/v2/everything?q=tesla&from=2021-03-10&sortBy=publishedAt&apiKey=85c0c2a862aa42f69047816ceac5ef62`
	);
	return data;
};
interface IArticle {
	author: string,
	content: string
	source: { id: number, name: string }
	title: string,
	url: string,
	urlToImage: string
}

const Testing = () => {
	let arrayAuth: string[] | null = [];
	const arrayGroup = useAppSelector(state => {
		return state;
	})
	const dispatch = useDispatch();
	const handleClick = (item) => {
		//let currentState = arrayGroup.catalogNav.authorArray;
		dispatch(setArrayAuthor(item.author));
	}
	const apiKey = "";
	const { data, isLoading } = useQuery(["fetched"], fetchData, {
		retry: 0,
	});
	console.log(data?.data.articles);
	return <>
		{!isLoading ? data?.data.articles.map((item: IArticle, index) => {
			return <div key={index} onClick={() => handleClick(item)}> {item.author} </div>;
		}) : null}
		<div style={{ display: "flex" }}>[{arrayGroup.catalogNav.authorArray?.map((item) => {
			return <div>{item},</div>;
		})}]</div>
	</>;
};

export default Testing;
