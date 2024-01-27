import useSelectior from "antd/es/table/hooks/useSelection";
import { useDispatch } from "react-redux"

const GetData=()=>{
    const dispatch=useDispatch();
const { data,loading, error}=useSelectior(state=>state.data);
return(
{const getData=data.map((d,index)=>{<Homepage key={index} items={d}/>})}

)
}

