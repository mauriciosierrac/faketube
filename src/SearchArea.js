import React, { useState } from "react"
import Results from "./Results"
import axios from "axios"
import * as AppConstants from "./AppConstant"

const SearchArea = () => {
    const [keyword, setKeyword] = useState("budgies")
    const [videos, setVideos] = useState([])
    function requestSearch() {
        axios .get(`${AppConstants.SEARCH_URL}&q=${keyword}`)
        .then((res) => {
            const {items}= res.data
            console.log(items)
            setVideos(items)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div className="search-area">
            <form onSubmit={(e) => {
                e.preventDefault()
                requestSearch()
            }}>
                <label htmlFor="keyword" > Search
                    <input type="text" id="keyword" name="" onChange={(e) => setKeyword(e.target.value)} value={keyword} />
                </label>
                <button type="">Submit</button>

            </form>
            <Results videos={videos} />
        </div>
    )
}

export default SearchArea