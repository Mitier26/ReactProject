import React from "react";
import { useNavigate } from "react-router-dom";

const TopMenu = ()=>{
    const menu = ["Women","Men","Baby","Kids","Sport","Sale","지속가능성"];
    let navigate = useNavigate();

    const search=(event)=>{
        if(event.key ==="Enter"){
            let keyword = event.target.value;
            console.log(keyword)

            navigate(`/?q=${keyword}`)
        }
    }
   

    return (<>
    <div className="menu">
        <ul className="menu-list">
            {menu.map((item, key)=>(<li key={key}>{item}</li>))}   
        </ul>
        <div className="menu-search">
            <i className="xi-search"></i>
            <input type="text" placeholder="제품 검색" onKeyPress={(event)=>search(event)}/>
        </div>
    </div>
 {/* -------------------------모바일사이드메뉴 ------------------------------------------------ */}
    <div className="m-menu show">
        <div className="close-btn">
            <i className="xi-close"></i>
        </div>
        <ul className="">
            {menu.map((item, key)=>(<li key={key}>{item}</li>))}   
        </ul>
    </div>
    </>
    )
}


export default TopMenu;