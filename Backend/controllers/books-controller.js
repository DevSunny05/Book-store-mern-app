const Book=require("../model/Books");

const getAllBooks=async (req,res,next)=>{
    let books;
    try{
        books=await Book.find();
    }catch(err){
        console.log(err)
    }

    if(!books){
        return res.status(404).json({message:"No product found"})
    }
    return res.status(200).json({books})
}

const getById= async (req,res,next)=>{
    const id=req.params.id;
    let book;

    try{
        book=await Book.findById(id)
    }catch(err){
        console.log(err)
    }

    if(!book){
        return res.status(404).json({message:"No Book found"})
    }
    return res.status(200).json({book})

}

const addBooks= async(req,res,next)=>{
    const{name,description,author,price,available,image}=req.body;
    let book;

    try{
        book=new Book({
            name,
            author,description,price,available,image
        })

        await book.save()
    }catch(err){
        console.log(err)
    }

    if(!book){
        return res.status(500).json({message:"Unable to add"})
    }
    return res.status(201).json({book})
}

const updateBook=async(req,res,next)=>{
    const id=req.params.id;
    const{name,description,author,price,available,image}=req.body;
    let book;
    try{
        book=await Book.findByIdAndUpdate(id,{name,price,description,image,author,available});

        book=await book.save();
    }catch(err){
        console.log(err)
    }

    if(!book){
        return res.status(500).json({message:"Unable to audate by ID"})
    }
    return res.status(200).json({book})

}

const deleteById=async (req,res,next)=>{
    const id=req.params.id;
    let book;
    try{
        book=await Book.findByIdAndRemove(id)
    }catch(err){
        console.log(err)
    }

    if(!book){
        return res.status(404).json({message:"Unable to delete by ID"})
    }
    return res.status(200).json({message:"product successfully deleted"})
}

exports.getAllBooks=getAllBooks;
exports.addBooks=addBooks;
exports.getById=getById;
exports.updateBook=updateBook;
exports.deleteById=deleteById;