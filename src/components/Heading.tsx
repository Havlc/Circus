export function Heading() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return(
      <>
      <header id='headingDiv'>
        <h3>Circus - Government app to manage prison</h3>
        <h5>It's {date}</h5>
        <img src="https://media.istockphoto.com/vectors/prisoner-in-jail-vector-id165487536?k=6&m=165487536&s=612x612&w=0&h=vYzJd64kHCHjchZQpyDUXdPRjyGfdXsF_YOwBgYlgVk=" width='150vh' height='100vh'/>
      </header>
      </>
    )
  }