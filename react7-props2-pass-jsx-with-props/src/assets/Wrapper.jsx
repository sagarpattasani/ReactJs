function Wrapper({children,color="green"}){
    return(
        <div style={{color:color,border:'5px solid green',width:'300px',margin:'10px'} }>
         {children}

          {/* if you remove {children}, the h1 won't show */}
        </div>
    )

}

export default Wrapper

// Whatever you write between <Wrapper> and </Wrapper> becomes the children prop automatically — 
// no need to pass it manually.