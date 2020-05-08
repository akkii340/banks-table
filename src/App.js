import React,{useState,useEffect} from 'react'
import './Cool.css'
import Table from './Components/UI/Table'
import Select from './Components/UI/Select'
import {categoryOptions,cityOptions} from './Components/UI/SelectData'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import BlockEdge from './Components/UI/BlockEdge'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const App = () => {
    const [alldata,setData] = useState([])
    const [filter,setFilter] = useState({city:'MUMBAI',category:'',search:''})
    const searchRef = React.useRef();
    const [error,setError] = React.useState(null)
  const filterHandler=(e)=>{
    if(e.target.id == 'city')
    setFilter({...filter,city:e.target.value,search:''})
    else if(e.target.id == 'category')
    setFilter({...filter,category:e.target.value,search:''})
    else if(e.target.id == 'search')
    setFilter({...filter,search:e.target.value})
}

useEffect(()=>{
 
    const timer = setTimeout(()=>{
        if(filter.search === searchRef.current.value){ 

            if(filter.search === '')
            {
                fetch(`https://vast-shore-74260.herokuapp.com/banks?city=${filter.city}`).then( response => response.json())
                .then( resData => setData(resData)).catch(error => setError(error))
            }
            else{
            if(filter.category == 'IFSC')
            {
                fetch(`https://vast-shore-74260.herokuapp.com/banks?city=${filter.city}&ifsc=${filter.search}`).then( response => response.json())
            .then( resData => setData(resData)).catch(error => setError(error))}
                else if(filter.category == 'BRANCH')
            {
             fetch(`https://vast-shore-74260.herokuapp.com/banks?city=${filter.city}&branch=${filter.search}`).then( response => response.json())
            .then( resData => setData(resData)).catch(error => setError(error))
            }  else if(filter.category == 'BANK NAME')
            {
            fetch(`https://vast-shore-74260.herokuapp.com/banks?city=${filter.city}&bank_name=${filter.search}`).then( response => response.json())
            .then( resData => setData(resData)).catch(error => setError(error))
            }
            }
        }
        return(()=>{
            clearTimeout(timer)
        })
    },500)
    
},[filter.search,searchRef])
    
return(
    <div className="container">
    <div className="block-edge">
        <BlockEdge>
          <div className="inner-edge">
          <span className="icon"><AccountBalanceIcon/></span><span className="inner-span">BANKS</span></div>
       </BlockEdge>
    </div>
    <div className="sidenav">
  </div>
  <div className="tabbar"></div>
  <div className="main">
  {error!=null?<p className="error">error</p>:null}
        <div className="inner-main">
        <div className="inner-header">
            <h4>BANK</h4>
            </div>
            <div className="inner-main-container">
              <div><Select onChange={filterHandler} id ="city" value ={filter.city} option={cityOptions.option}/></div>
              <div className="select-for"><Select onChange={filterHandler} id ="category" value ={filter.category} option={categoryOptions.option}/></div>
              <div className="select-for-input">
              <TextField
               inputProps={{
             ref: searchRef
                 }}
              InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
          ),
        }}  onChange={filterHandler} id ="search" type="text" value={filter.search}/></div>
        </div>
        </div>
        <Table rows={alldata}/>
      </div>
  </div>
  )
   
}

export default App



 {/* <div>
                    <span>Row Per Pages:</span><Select id ="row-change" onChange={rowPerPageHandler} value ={rowperPages} option={rowOptions.option}/>
                     <span style={{marginLeft:20}}>{indexofFirstPost} - {indexofLastPost>alldata.length?alldata.length:indexofLastPost} of {alldata.length}</span>  
                     <span style={{marginLeft:20}}> <button id="back" onClick={onBackandForth}> ( </button> 
                     <button id="forth" onClick={onBackandForth}> > </button></span>   
                </div> */}

 // const rowPerPageHandler=(e)=>{
    //         setRowPerPages(e.target.value)
    // }
    // const [rowperPages,setRowPerPages] = useState(10)
//const [currentPage,setCurrentPage] = useState(0)

    // const onBackandForth=(e)=>{
    //     console.log(e.target.id)
    //     if(e.target.id == "back" && currentPage > 1)
    //     {
    //         const count = currentPage -1;
    //         setCurrentPage(count)
    //     }
    //     else if(e.target.id == "forth")
    //     {
    //         const count = currentPage + 1;
    //         setCurrentPage(count)
    //     }
    // }
    // const indexofLastPost = currentPage*rowperPages;
    // const indexofFirstPost = indexofLastPost - rowperPages;
    // const currentPost = alldata.slice(indexofFirstPost,indexofLastPost) 