

export const first = (req,res)=>{
    return res.status(200).json({message:"From Backend. This is First Page."})
}

export const second = (req,res)=>{
    res.send("This is second Page.")
}

export const third = (req,res)=>{
    res.send("This is third Page.")
}