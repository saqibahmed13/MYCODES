

//syntax

useEffect(() => {
    first    //  this is a side effect function
  
    return () => {   // clean up scenario when second is unmounted (removed) run this statement
      second
    }
  }, [third])   // this is a dependency which means when ever third changes useEffect will run 


//variation 1
  useEffect(()=>{
    alert("this useEffect will run on each render ")
  })


  //variation 2
  useEffect(()=>{
    alert("this useEffect will run once")
  },[])   // it will run once 


  //variation 3
  useEffect(()=>{
    alert("this useEffect will run based on dependencies")
  },[count])   // it will whenever count is updated 


//variation 4
  useEffect(()=>{
    alert("this useEffect will run on multiple dependencies ")
  },[count, total, balance])   // it will whenever count,total, balance is updated 

  //variation 5

  useEffect(()=>{
    alert("this useEffect will run based on dependencies")

    return ()=>{
        alert("this will be run when clean up occurs")
    }
  },[count])   // it will run whenever count is updated 