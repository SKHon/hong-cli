var program = require('commander');
 
program
    .command('new <name>')
    .option('-d, --debug', 'output extra debugging')
    .action((name,cmd) => {
        console.log(cmd.debug)
        console.log(cmd)
    })

program.parse(process.argv)
