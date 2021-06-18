const name = "pitbull" ;
const dog ={
    breeds : "Canis lupus familiaris",
    color : "brown",
};

exports.name = "freak";
//存取 access exports可以是函式、字串
exports.getColor = function() {
    return dog.color;
};

exports.setColor = function(color){
    if(color == "white" || color == "black"){
        dog.color = color;
    }
   
};

// module.exports{}; 空物件 會找不到