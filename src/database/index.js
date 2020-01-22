const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost/noderest');
mongoose.Promise = global.Promise;

module.exports = mongoose;


mongoose.connect('mongodb+srv://Luan:46693445l@TreinoAPI-jaaaj.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});





