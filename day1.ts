import { join } from 'path';
import * as fs from 'fs';
import * as rd from 'readline';

var reader = rd.createInterface(fs.createReadStream(join(__dirname, 'input.txt')))
var array: number[][] = [[]]
var elf = 0

reader.on("line", (l:string) => {
	if (l.length > 0) {
		const n = parseInt(l)
		array[elf].push(n)

	} else {
		elf++
		array[elf] = []
	}
})

reader.on("close", () => {
	const a2 = array.map(a => a.reduce((p, c) => p + c))
	console.log(Math.max(...a2))
})
