import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardSection from "../../shared/CardSection";

const Search = () => {
    const params = useParams();
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {

    })
    return (
        <SearchResultContainer>
        <SearchTitle>{params.word}</SearchTitle>
        <CardWrapper>
        <CardSection />
        <CardSection />
        <CardSection />
        <CardSection />
        <CardSection />
        </CardWrapper>
        </SearchResultContainer>
    );
};

export default Search;

const SearchResultContainer = styled.div`
    width: 1180px;
    margin: 0 auto;
    background-color: aliceblue;
`
const SearchTitle = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #c8f1e8;
    gap: 20px 20px;
`