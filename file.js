var fs = require('fs');

//fs = file system


fs
    // escrevendo em arquivo
    // .writeFile('data.txt', 'Hello world from Alex', function(error){
    //     if(error)
    //         throw error;
    // })

    //lendo arquivo
    // .readFile('data.txt', function(error, data){
    //     if(error)
    //         throw error;
    //
    //     console.log(data.toString('utf8'));
    // });

    //lendo diretorios
    // .readdir('.', function(error, files){
    //     if(error)
    //         throw error;
    //
    //     for(var file in files)
    //         console.log(files[file]);
    // })

    .readdirSync('.')
    .filter(function(file){
        return (file.endsWith('.js'));
    })
    .forEach(function(file){
        console.log(file);
    });


