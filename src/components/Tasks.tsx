export function Tasks(guardian: string[]){

    return(
      <>
        <h4>Today you've been ordered to:</h4>
        <ol>{[...guardian.duties].map((item: string, index:number)=><li key={index}><input type="checkbox"></input>{item}</li>)}</ol>
      </>
    )
  }