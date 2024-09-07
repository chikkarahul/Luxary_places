const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        
    },
    description:String,
    image:{
        type:String,
        default:"https://images.unsplash.com/photo-1584266032559-fe29c2fc22e8?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set:(v)=>v===""?"https://images.unsplash.com/photo-1584266032559-fe29c2fc22e8?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":v,
    },
    price:Number,
    location:String,
    country:String
})

const Listing = mongoose.model("Listing",listingSchema);

module.exports=Listing;