
import React, {useState} from "react"

export default function Word ({word}){
    const[isShow, setIsShow] = useState(true);
    function toggleShow()
    {
        setIsShow(!isShow)
    }
console.log(isShow)
    return(
<tr>
<td>
    <input type="checkbox"></input>
</td>
<td>{word.eng}</td>
<td>{isShow && word.kor}</td>
<td>
<button onClick={toggleShow}>뜻{isShow ? '숨기기' : '보기'}        </button>
<button className="btn_del">삭제하기</button>
</td>
</tr>
    )}