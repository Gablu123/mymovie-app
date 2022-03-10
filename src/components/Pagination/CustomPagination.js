import React from "react";
import Pagination from '@material-ui/lab/Pagination'
import { createTheme ,ThemeProvider} from '@material-ui/core/styles'
//npm i material -ui-lab ke krte hbe naile hbena paginaation

const darkTheme = createTheme({
palette:{
    type:"dark"
}
})


const CustomPagination = ({setPage,numOfpages = 10}) => {

    const handlePageChange = (page) =>{
        setPage(page);
        window.scroll(0,0)
    }
  return (
      <div 
      style={{
          width:"100%",
          display:"flex",
          justifyContent:"center",
          marginTop: 10,
          
      }}
      >

          <ThemeProvider theme={darkTheme}>
          <Pagination count={numOfpages} onChange={(e) => handlePageChange(e.target.textContent)}
          color="primary"
          />
       
          </ThemeProvider>
          
      </div>
  )
};

export default CustomPagination;
