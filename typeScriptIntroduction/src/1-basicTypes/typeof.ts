function myTypeof(arg: any): typeof arg {
    let internal: typeof arg = arg;
    return arg + internal;
}

console.log(myTypeof('10')); // lgs 1010
console.log(myTypeof(10)); // logs 20
