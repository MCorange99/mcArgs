
module.exports = class mcArgs {
    constructor(argv){
        this.argv = argv
        this.argc = argv.length
        this.SINGLE = "TYPE_SINGLE"
        this.DOUBLE = "TYPE_DOUBLE"
        this.PREFIXLESS = "TYPE_PREFIXLESS"
        this.bool_args = {}
        this.str_args = {}
        this.prefixless_args = []
        this.parsed = {}
    }

    add_single(name, trigger){
        this.bool_args[name] = {
            trigger: trigger
        }

        this.parsed[name] = {
            name: name,
            trigger: trigger,
            type: this.SINGLE,
            value: false
        }
    }

    add_double(name, trigger){
        this.str_args[name] = {
            trigger: trigger
        }
        this.parsed[name] = {
            name: name,
            trigger: trigger,
            type: this.DOUBLE,
            value: ""
        }
    }

    add_prefixless(name, position){
        this.prefixless_args.push({
            name: name,
            pos: position
        })
        this.parsed[name] = {
            name: name,
            trigger: null,
            type: this.PREFIXLESS,
            value: "",
            pos: position
        }
    }

    parse(){
        this.parsed["_node_path"] = {
            name: "_node_path",
            trigger: null,
            type: this.DOUBLE,
            value: this.argv.shift()
        }

        this.parsed["_exec"] = {
            name: "_exec",
            trigger: null,
            type: this.DOUBLE,
            value: this.argv.shift()
        }



        let i = 0
        for (i in this.argv){
            if (!this.argv[i].startsWith("-")){
                let idk = this.prefixless_args.shift()
                console.log(idk)
                this.parsed[idk.name].value = this.argv[i].toString()
            }
            // test for bool args
            for (const def_bool of Object.entries(this.bool_args)){
                const name = def_bool[0];
                const trigger = def_bool[1].trigger;
                if (trigger == this.argv[i]){
                    this.parsed[name].value = true;
                }
            }

            // test for str args
            for (const def_str of Object.entries(this.str_args)){
                const name = def_str[0];
                const trigger = def_str[1].trigger;
                if (trigger == this.argv[i]){
                    i++
                    this.parsed[name].value = this.argv[i];

                    // Apparently its uselless to try to parse "hello MCorange" to a single string since most shells do it for you ;-;
                    
                    // let buf = ""
                    // if (this.argv[i].startsWith("\"")){
                    //     while (!this.argv[i].endsWith("\"")){
                    //         buf += this.argv[i].toString()
                    //         i++
                    //     }
                        
                    // } else {
                    //     this.parsed[name].value = this.argv[i];
                    // }
                    
                }
            }

        }

        return this.parsed
    }


}