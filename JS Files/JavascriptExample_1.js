
window.onload = () => 
{
    let data = 'Yamaha';
    // Entry point to the code execution.
    CallMeFunction(data);
}

function CallMeFunction(input)
{
    var global = `Global ${input}`;
    console.log(global);

    if(true)
    {
        let local = `Local`; // VAR vs LET vs CONST
        global = local;

        console.log(`${local} ${input}`);
        console.log(`${global} ${input}`);

        local = 'Modified local';

    }

    //local = "Modified outside!";
    //console.log(`${local}`);// threw the error!
    console.log(`${global} ${input}`);

}




