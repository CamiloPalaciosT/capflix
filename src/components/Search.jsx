import { BsSearch } from "react-icons/bs";
import styles from "./search.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";


export function Search() {
    const query = useQuery();
    const search = query.get("search");

    const [SearchText, setSearchText] = useState("");
    const history = useHistory()

    useEffect(() => {
        setSearchText(search || "");
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/?search=" + SearchText);
    }
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit }>
            <div className={styles.searchBox}>
                <input 
                className={styles.searchInput} 
                type="text" 
                value={SearchText} 
                onChange={(e) => setSearchText(e.target.value)}
                />
                <button className={styles.searchButton} type="submit">
                    <BsSearch size={25}/>
                </button>
            </div>
        </form>
    )
}
